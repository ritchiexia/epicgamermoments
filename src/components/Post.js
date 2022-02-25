import { useState } from "react"
import bruhIcon from "../icons/bruh.png"
import epicIcon from "../icons/epic.png"
import cringeIcon from "../icons/cringe.png"
import pogIcon from "../icons/pog.png"

const Post = ({post}) => {
    let [showEpic, setShowEpic] = useState(false);
    let [showCringe, setShowCringe] = useState(false);
    let [showPog, setShowPog] = useState(false);
    let [showBruh, setShowBruh] = useState(false);

    return (
        <div className="post-container">
            <video autoPlay controls className="post-video">
                <source src={post.video}></source>
            </video>
            <div className="post-title-container">
                <h2>{post.title}</h2>
                <h3>Posted by: {post.op}</h3>
            </div>
            <div className="reactions-box">
                <button className={`reactbtn ${showEpic ? "activebtn" : ""}`} onClick={() => {setShowEpic(!showEpic)}}>
                    <img className="reacticon" alt="epic" src={epicIcon} />
                        EPIC
                </button>
                <button className={`reactbtn ${showCringe ? "activebtn" : ""}`} onClick={() => {setShowCringe(!showCringe)}}>
                    <img className="reacticon" alt="cringe" src={cringeIcon} />
                        CRINGE
                </button>
                <button className={`reactbtn ${showPog ? "activebtn" : ""}`} onClick={() => {setShowPog(!showPog)}}>
                    <img className="reacticon" alt="pog" src={pogIcon} />
                        POG
                </button>
                <button className={`reactbtn ${showBruh ? "activebtn" : ""}`} onClick={() => {setShowBruh(!showBruh)}}>
                    <img className="reacticon" alt="bruh" src={bruhIcon} />
                        BRUH
                </button>
            </div>
        </div>
    )
}

export default Post
