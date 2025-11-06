import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  min-height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  // max-width: 1000px;
  margin-bottom: 20px;
`;

export const AddButton = styled.button<{ variant?: "red" | "green" }>`
  background-color: ${({ variant }) =>
    variant === "red" ? "#dc2626" : "#16a34a"};
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 14px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: ${({ variant }) =>
      variant === "red" ? "#b91c1c" : "#15803d"};
  }
`;

export const TableWrapper = styled.div`
  width: 90%;
  // max-width: 1000px;
  overflow-x: auto;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 14px;

  th {
    background-color: #e5e7eb;
    padding: 10px;
    font-weight: 600;
  }

  td {
    padding: 10px;
    border-top: 1px solid #e5e7eb;
  }

  tr:hover td {
    background-color: #f9fafb;
  }
`;

export const NoDataRow = styled.tr`
  td {
    text-align: center;
    padding: 20px;
    color: #6b7280;
  }
`;
