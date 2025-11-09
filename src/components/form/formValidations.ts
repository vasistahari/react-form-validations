export type TValidationErrors = {
  [key: string]: string | null;
};
export type TGender = "Male" | "Female" | "Other" | "";
export type TSalutation = "Mr." | "Mrs." | "Ms." | "Dr." | "Prof." | "";

export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const salutations = ["Mr.", "Mrs.", "Ms.", "Dr.", "Prof."];
export const genders = ["Male", "Female", "Other"];

export default class Employee {
  salutation: TSalutation;
  firstName: string;
  lastName: string;
  gender: TGender;
  dob: string;
  email: string;
  employmentType: string;
  designation: string;
  city: string;
  state: string;
  country: string;
  remoteWork?: boolean; // optional
  address?: string; // optional

  constructor(data: {
    salutation: TSalutation;
    firstName: string;
    lastName: string;
    gender: TGender;
    dob: string;
    email: string;
    employmentType: string;
    designation: string;
    city: string;
    state: string;
    country: string;
    remoteWork?: boolean; // optional
    address?: string; // optional
  }) {
    this.salutation = data.salutation;
    this.firstName = data.firstName.trim();
    this.lastName = data.lastName.trim();
    this.gender = data.gender;
    this.email = data.email.trim();
    this.dob = data.dob;
    this.employmentType = data.employmentType;
    this.designation = data.designation.trim();
    this.city = data.city.trim();
    this.state = data.state.trim();
    this.country = data.country.trim();
    this.remoteWork = data.remoteWork || false; // optional
    this.address = data.address?.trim() || ""; // optional
  }

  validate(): TValidationErrors {
    const errors: TValidationErrors = {};

    if (!this.salutation || !salutations.includes(this.salutation))
      errors.salutation = "Invalid Salutation";

    if (!this.salutation) errors.salutation = "Salutation is required";
    else if (!salutations.includes(this.salutation))
      errors.gender = "Salutation is invalid";

    if (!this.firstName) errors.firstName = "First Name is required";
    if (!this.lastName) errors.lastName = "Last Name is required";

    if (!this.gender) errors.gender = "Gender is required";
    else if (!genders.includes(this.gender))
      errors.gender = "Gender is invalid";

    if (!this.dob) errors.dob = "Date of Birth is required";

    if (!this.email) errors.email = "Email is required";
    else if (!emailRegex.test(this.email)) errors.email = "Email is invalid";

    if (!this.employmentType)
      errors.employmentType = "Employment Type is required";

    if (!this.designation) errors.designation = "Designation is required";

    if (!this.city) errors.city = "City is required";
    if (!this.state) errors.state = "State is required";
    if (!this.country) errors.country = "Country is required";

    return errors;
  }

  isValid(): Boolean {
    const errors = this.validate();
    return Object.values(errors).every(
      (error) => error === null || error === undefined
    );
  }
}
