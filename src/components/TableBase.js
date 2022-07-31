import styled from "styled-components";

const Table = styled.table`
    width: 80%; // 좌우 폭
    margin: auto; // 테이블 중앙 정렬
    text-align: center; // 글자 중앙 정렬
    border-spacing: 0; // 표 사이 간격
`;

const TableHeaderColumn = styled.td`
    border-bottom: 1px solid #e8e8e8; // 표 헤더와 내용 사이의 구분선
    padding: 10px 5px;
    font-size: 16px;
    font-weight: bold;
`;


const TableBase = props => {
    // props를 구조분해 할당
    const { headersName, children } = props;

    return (
        <Table>
            <thead>
                <tr>
                    {
                        headersName.map((item, index) => {
                            return (
                                <TableHeaderColumn key={index}>{item}</TableHeaderColumn>
                            );
                        })
                    }
                </tr>
            </thead>
            <tbody>
                { children }
            </tbody>
        </Table>
    );
};

export default TableBase;