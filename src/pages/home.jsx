import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { TestContext } from "../provider/TestProvider";
import { MoreContext } from "../provider/TestProvider";

const Home = (props) => {
  const data = useContext(TestContext);
  const moreData = useContext(MoreContext)

    useEffect(()=>{
        console.log('HomePage data:', data)
        console.log('more Data:', moreData)
    })

  return (
    <>
      <h1>THIS IS MY HOME PAGE</h1>
        <h2>Welcome back {data.name}</h2>
      <ol>
        <Link to="/aboutme">About Me Page</Link>
        <br />
        <Link to="/posts">Posts Page</Link>
      </ol>
    </>
  );
};

export default Home;
