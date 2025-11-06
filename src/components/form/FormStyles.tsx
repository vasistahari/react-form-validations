import styled from "styled-components";

export const FormWrapper = styled.div`
  background-color: #f0f4fa;
  padding: 32px;
  border-radius: 12px;
  max-width: 900px;
  // margin: 40px auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  // font-weight: 700;
  color: #1f2937;
  // margin-bottom: 10px;
`;

export const Section = styled.div`
  margin-bottom: 32px;
`;

export const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 16px;
`;

export const FieldRow = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Field = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #374151;
  margin-bottom: 6px;
`;

export const Input = styled.input`
  padding: 10px 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 14px;
  background-color: #fff;
  transition: border-color 0.2s;
  &:focus {
    border-color: #2563eb;
    outline: none;
  }
`;

export const TextAreaInput = styled.textarea`
  resize: none;
  padding: 10px 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 14px;
  background-color: #fff;
  transition: border-color 0.2s;
  &:focus {
    border-color: #2563eb;
    outline: none;
  }
`;

export const Select = styled.select`
  padding: 10px 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 14px;
  background-color: #fff;
  transition: border-color 0.2s;
  &:focus {
    border-color: #2563eb;
    outline: none;
  }
`;

export const ErrorText = styled.span`
  color: #dc2626;
  font-size: 12px;
  margin-top: 4px;
`;

export const Button = styled.button<{ variant?: "green" | "red" | "blue" }>`
  display: block;
  width: 100%;
  color: #fff;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  margin: 0 auto;
  font-size: 15px;
  cursor: pointer;
  margin-top: 16px;
  transition: background 0.2s;

  background-color: ${({ variant }) =>
    variant === "green"
      ? "#16a34a"
      : variant === "red"
      ? "#dc2626" // red-600
      : "#2563eb"}; // default blue

  &:hover {
    background-color: ${({ variant }) =>
      variant === "green"
        ? "#15803d" // green-700
        : variant === "red"
        ? "#b91c1c" // red-700
        : "#1e40af"}; // blue-800
  }
`;

export const TableWrapper = styled.div`
  margin-top: 32px;
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 4px;
`;

export const CheckboxGroup = styled.div`
  margin-top: 8px;
`;
