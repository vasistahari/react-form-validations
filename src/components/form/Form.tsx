import { useState, type ChangeEvent } from "react";
import Employee, {
  genders,
  salutations,
  type TGender,
  type TSalutation,
  type TValidationErrors,
} from "./formValidations";
import {
  Button,
  CheckboxGroup,
  ErrorText,
  Field,
  FieldRow,
  FormWrapper,
  Input,
  Label,
  RadioGroup,
  Section,
  SectionTitle,
  Select,
  TextAreaInput,
  Title,
} from "./FormStyles";

export interface IFormValues {
  salutation: TSalutation;
  firstName: string;
  lastName: string;
  gender: TGender;
  dob: string;
  email: string;
  employmentType?: string;
  remoteWork?: boolean;
  designation: string;
  city: string;
  state: string;
  country: string;
  address?: string;
}

const defaultValues: IFormValues = {
  salutation: "",
  firstName: "",
  lastName: "",
  gender: "",
  dob: "",
  employmentType: "",
  remoteWork: false,
  email: "",
  designation: "",
  city: "",
  state: "",
  country: "",
  address: "",
};

interface FormProps {
  cancel: () => void;
}

const Form = ({ cancel }: FormProps) => {
  const [formData, setFormData] = useState<IFormValues>(defaultValues);
  const [errors, setErrors] = useState<TValidationErrors>({});

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type, checked } = event.target as any;

    let newValue = value;
    if (type === "checkbox") newValue = checked;
    setFormData((prev: any) => ({ ...prev, [name]: newValue }));

    const newData = { ...formData, [name]: newValue };
    const employee = new Employee(newData as any);
    const validationErrors = employee.validate();

    setErrors((prev) => ({
      ...prev,
      [name]: validationErrors[name] || null,
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const employee = new Employee(formData as any);
    const validationErrors = employee.validate();
    setErrors(validationErrors);

    if (employee.isValid()) {
      alert("Employee added successfully!");
      const existingData = JSON.parse(
        sessionStorage.getItem("formData") || "[]"
      );
      existingData.push(formData);
      sessionStorage.setItem("formData", JSON.stringify(existingData));
      setFormData(defaultValues);
      setErrors({});
      cancel();
    }
  };

  const handleBlur = (event: ChangeEvent<any>) => {
    const { name } = event.target;
    const employee = new Employee(formData as any);
    const validationErrors = employee.validate();

    setErrors((prev) => ({
      ...prev,
      [name]: validationErrors[name] || null,
    }));
  };

  return (
    <FormWrapper>
      <Title>Employee Form</Title>
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <Section>
          <SectionTitle>Personal Information </SectionTitle>
          <FieldRow>
            <Field>
              <Label>
                Salutation <ErrorText>*</ErrorText>
              </Label>
              <Select
                name="salutation"
                value={formData.salutation}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Select</option>
                {salutations.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </Select>
              {errors.salutation && <ErrorText>{errors.salutation}</ErrorText>}
            </Field>

            <Field>
              <Label>
                First Name <ErrorText>*</ErrorText>
              </Label>
              <Input
                type="text"
                name="firstName"
                placeholder="Enter First Name"
                value={formData.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.firstName && <ErrorText>{errors.firstName}</ErrorText>}
            </Field>

            <Field>
              <Label>
                Last Name <ErrorText>*</ErrorText>
              </Label>
              <Input
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                value={formData.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.lastName && <ErrorText>{errors.lastName}</ErrorText>}
            </Field>
            <Field>
              <Label>
                Gender <ErrorText>*</ErrorText>
              </Label>
              <Select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Select</option>
                {genders.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </Select>
              {errors.gender && <ErrorText>{errors.gender}</ErrorText>}
            </Field>
          </FieldRow>

          <FieldRow>
            <Field>
              <Label>
                Date of Birth <ErrorText>*</ErrorText>
              </Label>
              <Input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.dob && <ErrorText>{errors.dob}</ErrorText>}
            </Field>
            <Field>
              <Label>
                Email <ErrorText>*</ErrorText>
              </Label>
              <Input
                type="email"
                name="email"
                placeholder="Enter Email Id"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && <ErrorText>{errors.email}</ErrorText>}
            </Field>
          </FieldRow>
        </Section>
        <Section>
          <SectionTitle>Work Details</SectionTitle>
          <FieldRow>
            <Field>
              <Label>
                Employment Type <ErrorText>*</ErrorText>
              </Label>
              <RadioGroup>
                {["Fulltime", "Contract"].map((type) => (
                  <label key={type}>
                    <input
                      type="radio"
                      name="employmentType"
                      value={type}
                      checked={formData.employmentType === type}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {type}
                  </label>
                ))}
              </RadioGroup>
              {errors.employmentType && (
                <ErrorText>{errors.employmentType}</ErrorText>
              )}
            </Field>
            <Field style={{ flex: 0.8 }}>
              <Label>Remote Work</Label>
              <CheckboxGroup>
                <label>
                  <input
                    type="checkbox"
                    name="remoteWork"
                    checked={formData.remoteWork || false}
                    onChange={handleChange}
                  />
                  Yes
                </label>
              </CheckboxGroup>
            </Field>
            <Field>
              <Label>
                Designation <ErrorText>*</ErrorText>
              </Label>
              <Input
                type="text"
                name="designation"
                placeholder="Enter Designation"
                value={formData.designation}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.designation && (
                <ErrorText>{errors.designation}</ErrorText>
              )}
            </Field>
          </FieldRow>
        </Section>
        <Section>
          <SectionTitle>Work Details</SectionTitle>
          <FieldRow>
            <Field>
              <Label>
                City <ErrorText>*</ErrorText>
              </Label>
              <Input
                type="text"
                name="city"
                placeholder="Enter City"
                value={formData.city}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.city && <ErrorText>{errors.city}</ErrorText>}
            </Field>
            <Field>
              <Label>
                State <ErrorText>*</ErrorText>
              </Label>
              <Input
                type="text"
                name="state"
                placeholder="Enter state"
                value={formData.state}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.state && <ErrorText>{errors.state}</ErrorText>}
            </Field>

            <Field>
              <Label>
                Country <ErrorText>*</ErrorText>
              </Label>
              <Input
                type="text"
                name="country"
                placeholder="Enter Country"
                value={formData.country}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.country && <ErrorText>{errors.country}</ErrorText>}
            </Field>
          </FieldRow>
          <Field>
            <Label>Address</Label>
            <TextAreaInput
              name="address"
              placeholder="Enter Address"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && <ErrorText>{errors.address}</ErrorText>}
          </Field>
        </Section>
        <Button type="submit" variant="green">
          Submit
        </Button>
        <Button type="button" variant="red" onClick={cancel}>
          Cancel
        </Button>
      </form>
    </FormWrapper>
  );
};

export default Form;
