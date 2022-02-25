import Posts from "./Posts";
import { useState } from "react";
import pitch from "../videos/pitch.mp4"
import epicCSPlay from "../videos/eesee's EPIC cs play.mp4"

const Home = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "EPIC GAMER MOMENT WEBSITE PREMIER",
      video: pitch,
      op: "EGM"
    },
    {
      id: 2,
      title: "EPIC CS PLAY",
      video: epicCSPlay,
      op: "eesee"
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
