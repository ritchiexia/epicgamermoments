import MinecraftBanner from "../banners/minecraft.png";
import LeagueBanner from "../banners/league.jpg";
import GTAVBanner from "../banners/gtav.png";
import ValorantBanner from "../banners/valorant.png";
import AmongUsBanner from "../banners/amongus.jpg";

const Games = () => {
  return (
    <div>
      <h1>Games</h1>
      <div className="games-grid">
        <a href="https://www.minecraft.net/en-us" className="game">
          <div className="banner">
            <img src={MinecraftBanner} alt="Minecraft Banner" />
          </div>
          <p>Minecraft</p>
        </a>
        <a href="https://www.leagueoflegends.com/en-us/" className="game">
          <div className="banner">
            <img src={LeagueBanner} alt="League of Legends Banner" />
          </div>
          <p>League of Legends</p>
        </a>
        <a
          href="https://www.rockstargames.com/V/restricted-content/agegate/form?redirect=https%3A%2F%2Fwww.rockstargames.com%2FV%2F&options=&locale=en_us"
          className="game"
        >
          <div className="banner">
            <img src={GTAVBanner} alt="GTAV Banner" />
          </div>
          <p>GTA V</p>
        </a>
        <a href="https://playvalorant.com/en-us/" className="game">
          <div className="banner">
            <img src={ValorantBanner} alt="VALORANT Banner" />
          </div>
          <p>VALORANT</p>
        </a>
        <a href="https://www.innersloth.com/games/among-us/" className="game">
          <div className="banner">
            <img src={AmongUsBanner} alt="VALORANT Banner" />
          </div>
          <p>Among Us</p>
        </a>
      </div>
    </div>
  );
};

export default Games;
