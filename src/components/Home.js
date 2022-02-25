import Posts from "./Posts";
import { useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "EPIC GAMER MOMENT WEBSITE PREMIER",
    },
    {
      id: 2,
      title: "PLAYED AGAINST A HACKER (GOT BANNED)",
    },
  ]);

  return (
    <div>
      <h1>Home</h1>
      <Posts posts={posts} />
    </div>
  );
};

export default Home;
