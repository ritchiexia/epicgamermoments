import { useState } from "react"

const Post = ({post}) => {
    let [epicCount, setEpicCount] = useState(0);
    let [cringeCount, setCringeCount] = useState(0);
    let [pogCount, setPogCount] = useState(0);
    let [bruhCount, setBruhCount] = useState(0);

    return (
        <div className="post-container">
            <div className="video"></div>
            <div className="post-title-container">
                <h3>{post.title}</h3>
            </div>
            <div className="reactions-box">
                <button className="reactbtn" onClick={() => {setEpicCount(++epicCount)}}>
                    <img className="reacticon" alt="epic" src="https://cdn.discordapp.com/attachments/707031501392314369/812947171220783145/b11d33f9a2775e2b4f030b5b3a0ee666-removebg-preview_2.png" />
                        EPIC: {epicCount}
                </button>
                <button className="reactbtn" onClick={() => {setCringeCount(++cringeCount)}}>
                    <img className="reacticon" alt="cringe" src="https://media.discordapp.net/attachments/707031501392314369/812945146374127626/108-1083789_cringe-discord-emoji-clipart-png-download-transparent-png-removebg-preview.png" />
                        CRINGE: {cringeCount}
                </button>
                <button className="reactbtn" onClick={() => {setPogCount(++pogCount)}}>
                    <img className="reacticon" alt="pog" src="https://cdn.discordapp.com/attachments/707031501392314369/812954260157366302/unknown.png" />
                        POG: {pogCount}
                </button>
                <button className="reactbtn" onClick={() => {setBruhCount(++bruhCount)}}>
                    <img className="reacticon" alt="bruh" src="https://cdn.discordapp.com/attachments/707031501392314369/812943432602615848/unknown.png" />
                        BRUH {bruhCount}
                </button>
            </div>
        </div>
    )
}

export default Post
