import { Outlet } from "react-router-dom";

const PostLayout = () => {
  return (
    <div>
      <h1>This is my posts navbar</h1>
      <Outlet/>
    </div>
  );
};

export default PostLayout;
