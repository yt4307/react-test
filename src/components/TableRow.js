import styled from "styled-components";

const Tr = styled.tr`
    &:hover {
        background-color: #eceaea;
        cursor: pointer;
    }
`;

const TableRow = ({ children }) => {
  return (
    <Tr>
      { children }
    </Tr>
  );
};

export default TableRow;