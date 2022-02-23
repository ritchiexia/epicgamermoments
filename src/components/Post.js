import { useState } from "react"

const Post = ({post}) => {
    let [epicCount, setEpicCount] = useState(0);
    let [cringeCount, setCringeCount] = useState(0);
    let [pogCount, setPogCount] = useState(0);
    let [bruhCount, setBruhCount] = useState(0);

    function incrementEpic() {
        console.log("click");
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
                <button className="epic-btn" onClick={incrementEpic}>
                    <img width="20" height="20" src="https://cdn.discordapp.com/attachments/707031501392314369/812947171220783145/b11d33f9a2775e2b4f030b5b3a0ee666-removebg-preview_2.png" />
                        EPIC: {epicCount}
                </button>
                <button className="cringe-btn" onClick={incrementCringe}>
                    <img width="20" height="20" src="https://media.discordapp.net/attachments/707031501392314369/812945146374127626/108-1083789_cringe-discord-emoji-clipart-png-download-transparent-png-removebg-preview.png" />
                        CRINGE: {cringeCount}
                </button>
                <button className="pog-btn" onClick={incrementPog}>
                    <img width="20" height="20" src="https://cdn.discordapp.com/attachments/707031501392314369/812954260157366302/unknown.png" />
                        POG: {pogCount}
                </button>
                <button className="bruh-btn" onClick={incrementBruh}>
                    <img width="20" height="20" src="https://cdn.discordapp.com/attachments/707031501392314369/812943432602615848/unknown.png" />
                        BRUH {bruhCount}
                </button>
            </div>
        </div>
    )
}

export default Post
