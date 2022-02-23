import { useState } from "react"

const Post = ({post}) => {
    const [epicCount, setEpicCount] = useState(0);
    const [cringeCount, setCringeCount] = useState(0);
    const [pogCount, setPogCount] = useState(0);
    const [bruhCount, setBruhCount] = useState(0);

    function incrementEpic() {
        setEpicCount(epicCount++);
    }

    function incrementCringe() {
        setCringeCount(cringeCount++);
    }

    function incrementPog() {
        setPogCount(pogCount++);
    }

    function incrementBruh() {
        setBruhCount(bruhCount++);
    }


    return (
        <div className="post">
            <div className="video"></div>
            <div className="post-title">{post.title}</div>
            <div className="reactions-box">
                <button className="epic-btn" onClick={incrementEpic}>EPIC: {epicCount}</button>
                <button className="cringe-btn" onClick={incrementCringe}>CRINGE: {cringeCount}</button>
                <button className="pog-btn" onClick={incrementPog}>POG: {pogCount}</button>
                <button className="bruh-btn" onClick={incrementBruh}>BRUH {bruhCount}</button>
            </div>
        </div>
    )
}

export default Post
