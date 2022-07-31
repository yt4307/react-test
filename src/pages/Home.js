import { Link } from "react-router-dom";
import styled from "styled-components";

const Main = styled.div`
    text-align: center;
`;

const Home = () => {
    return (
        <Main>
            <Link to={"/board"}><button>게시판</button></Link>
        </Main>
    );
};

export default Home;