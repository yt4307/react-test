import styled from "styled-components";

const Td = styled.td`
    padding: 10px 5px;
`;

const TableColumn = ({ children }) => {
  return (
    <Td>
      { children }
    </Td>
  );
};

export default TableColumn;