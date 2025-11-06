import { useEffect, useState } from "react";
import type { IFormValues } from "../form/Form";
import Form from "../form/Form";
import {
  Container,
  Header,
  AddButton,
  StyledTable,
  TableWrapper,
  NoDataRow,
} from "./TableStyles";

const Table = () => {
  const [showModal, setShowModal] = useState(false);

  const [employeesList, setEmployeesList] = useState<IFormValues[]>(() => {
    const data = sessionStorage.getItem("formData");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    setEmployeesList(() => {
      const data = sessionStorage.getItem("formData");
      return data ? JSON.parse(data) : [];
    });
  }, [showModal]);

  const handleDelete = (index: number) => {
    const updatedList = employeesList.filter((_, i) => i !== index);
    setEmployeesList(updatedList);
    sessionStorage.setItem("formData", JSON.stringify(updatedList));
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Container>
      {showModal && <Form cancel={handleModal} />}

      {!showModal && (
        <>
          <Header>
            <h2>Employee List</h2>
            <AddButton onClick={handleModal}>+ Add Employee</AddButton>
          </Header>

          <TableWrapper>
            <StyledTable>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Salutation</th>
                  <th>Full Name</th>
                  <th>Gender</th>
                  <th>Dob</th>
                  <th>Email</th>
                  <th>Designation</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Country</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {employeesList.length > 0 ? (
                  employeesList.map((employee, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{employee.salutation}</td>
                      <td>
                        {employee.firstName} {employee.lastName}
                      </td>
                      <td>{employee.gender}</td>
                      <td>{employee.dob}</td>
                      <td>{employee.email}</td>
                      <td>{employee.designation}</td>
                      <td>{employee.city}</td>
                      <td>{employee.state}</td>
                      <td>{employee.country}</td>
                      <td>{employee.address || "---"}</td>
                      <td>
                        <AddButton
                          variant="red"
                          type="button"
                          onClick={() => handleDelete(index)}
                        >
                          Delete
                        </AddButton>
                      </td>
                    </tr>
                  ))
                ) : (
                  <NoDataRow>
                    <td colSpan={13}>No Employees available</td>
                  </NoDataRow>
                )}
              </tbody>
            </StyledTable>
          </TableWrapper>
        </>
      )}
    </Container>
  );
};

export default Table;
