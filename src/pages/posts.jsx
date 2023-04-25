import { Link } from "react-router-dom";

const Posts = () => {
  return (
    <div>
      <h1>This is where i see ALL my posts:</h1>

      <h3>Posts:</h3>
      <Link to='1'>Post 1</Link>
      <br/>
      <Link to='2'>Post 2</Link>
      <br/>
      <Link to='3'>Post 3</Link>
    </div>
  );
};

// 3 posts in my DB, on mount we get data back and put it up

export default Posts;
