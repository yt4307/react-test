import { Route, Routes } from "react-router-dom";
import { Home, User, Board, PostView } from "pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/board/*" element={<Board />}/>
        <Route path="/board/:no" element={<PostView />} />
      </Routes>
    </>
  );
};

export default App;