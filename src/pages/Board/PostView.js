import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getPostByNo } from "Data";


const PostViewWrapper = styled.div`
    width: 60%;
    margin: 0 auto;
`;

const PostViewGoListBtn = styled.button`
    border: 0;
    padding: 10px;
    background-color: #ffd9d9;

`;

const PostViewRow = styled.div`
    margin: 10px 0;
    display: flex;

    label:first-child {
        margin: 10px 0;
        width: 30%;
        font-weight: bold;
    }

    *:nth-child(2) {
        margin: 10px 0;
        width: 70%;
    }
`;


const PostView = () => {
    const [data, setData] = useState({});
    const no = useParams();

    useEffect(() => {
        setData(getPostByNo(no));
    }, [no]);

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/board");
    };

    return (
        <>
            <h2 align="center">게시글 상세정보</h2>

            <PostViewWrapper>
                {
                    data ? (
                        <>
                            <PostViewRow>
                                <label>게시글 번호</label>
                                <label>{data.no}</label>
                            </PostViewRow>
                            <PostViewRow>
                                <label>제목</label>
                                <label>{data.title}</label>
                            </PostViewRow>
                            <PostViewRow>
                                <label>작성일</label>
                                <label>{data.createDate}</label>
                            </PostViewRow>
                            <PostViewRow>
                                <label>조회수</label>
                                <label>{data.readCount}</label>
                            </PostViewRow>
                            <PostViewRow>
                                <label>내용</label>
                                <div>
                                    {
                                        data.content
                                    }
                                </div>
                            </PostViewRow>
                        </>
                    ) : "해당 게시글을 찾을 수 없습니다."
                }
                <PostViewGoListBtn onClick={handleClick}>목록으로 돌아가기</PostViewGoListBtn>
            </PostViewWrapper>
        </>
    );
};


export default PostView;