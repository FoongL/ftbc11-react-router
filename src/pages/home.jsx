import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>THIS IS MY HOME PAGE</h1>

      <ol>
        <Link to='/aboutme'>About Me Page</Link>
        <br/>
        <Link to='/posts'>Posts Page</Link>
      </ol>
    </>
  );
};

export default Home;
