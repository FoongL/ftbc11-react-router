import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import AboutMe from "./pages/aboutMe";
import Error from "./pages/error";
import Posts from "./pages/posts";
import Post from "./pages/post";
import NewPost from "./pages/newPost";
import PostLayout from "./layouts/postsLayouts";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/posts" element={<PostLayout/>}>
          <Route index element={<Posts/>}/>
          <Route path="new" element={<NewPost />} />
          <Route path=":id" element={<Post />} />
        </Route>
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Navigate to='/error' />} />
      </Routes>
    </div>
  );
}

export default App;
