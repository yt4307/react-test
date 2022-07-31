import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import TableBase from "components/TableBase";
import TableRow from "components/TableRow";
import TableColumn from "components/TableColumn";
import { postList } from "Data";

const PostList = props => {
    const [dataList, setDataList] = useState([]);

    // 빈 배열을 넣음으로써 컴포넌트가 최초 렌더링 됐을때만 실행된다.
    useEffect(() => {
        setDataList(postList);
    }, []);

    return (
        <>
            <TableBase headersName={["글번호", "제목", "등록일", "조회수"]}>
                {
                    dataList ? dataList.map((item, index) => {
                        return (
                            <TableRow key={index}>
                                <TableColumn>{item.no}</TableColumn>
                                <TableColumn>
                                    <Link to={`${item.no}`}>{item.title}</Link>
                                </TableColumn>
                                <TableColumn>{item.createDate}</TableColumn>
                                <TableColumn>{item.readCount}</TableColumn>
                            </TableRow>
                        );
                    }) : ''
                }
            </TableBase>
            <Outlet />
        </>
    );
};

export default PostList;