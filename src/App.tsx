import backgroundImage from "./assets/RingRunnerWeb_AllZone_NoEffect 1.png";
import wallet from "./assets/wallet.png";
import vesselShield from "./assets/VessleShield 2.png";
import soloSpaceShip from "./assets/SoloSpaceShipSHield 2.png";
import grandMarketHolo from "./assets/GrandMarketHolo 2.png";
import armoryHolo from "./assets/ArmoryHolo 2.png";
import researchCenter from "./assets/ResearchCenterHolo 2.png";
import mulitiVerse from "./assets/MultiversePortalHolo 2.png";
import virtualTraining from "./assets/VirtualTrainingHolo 2.png";
import bossFight from "./assets/BossFightHolo 2.png";
import rechargeCenter from "./assets/RechargeCenterHolo 2.png";
import dungeon from "./assets/DunegeonHolo 2.png";
import beacon from "./assets/BeaconHolo 2.png";
import outpost from "./assets/OutpostHolo 2.png";

import logo from "./assets/Logo.png";

// sound
import bgMusic from "./assets/audio/sci-fi-cyberpunk-trailer-110587.mp3";
import hoverSound from "./assets/audio/mixkit-space-coin-win-notification-271.wav";

import { useState } from "react";
import ReactAudioPlayer from "react-audio-player";

function App() {
  // const [vesselShieldOpacity, setVesselShieldOpacity] = useState(0);
  const [soloshipOpacity, setSoloShipOpacity] = useState(0);
  const [grandMarketOpacity, setGrandMarketOpacity] = useState(0);
  const [armoryOpacity, setArmoryOpacity] = useState(0);
  const [researchCenterOpacity, setResearchCenterOpacity] = useState(0);
  const [multiVerseOpacity, setMultiVerseOpacity] = useState(0);
  const [virtualTrainingOpacity, setVirtualTrainingOpacity] = useState(0);
  const [bossFightOpacity, setBossFightOpacity] = useState(0);
  const [rechargeCenterOpacity, setRechargeCenterOpacity] = useState(0);
  const [dungeonOpacity, setDungeonOpacity] = useState(0);
  const [beaconOpacity, setBeaconOpacity] = useState(0);
  const [outpostOpacity, setOutpostOpacity] = useState(0);

  const [displayOverlay, setDisplayOverlay] = useState(true);

  const playSound = () => {
    new Audio(hoverSound).play();
  };

  return (
    <>
      <ReactAudioPlayer src={bgMusic} autoPlay preload="metadata" loop />
      <div className=" relative overflow-hidden">
        <img
          src={backgroundImage}
          alt="backgroundImage"
          className=" max-w-[100vw] "
        />
        <img
          src={wallet}
          alt="wallet"
          className="fixed top-[0.5rem] left-[0.2rem] lg:top-[4rem] lg:left-[2rem] w-[10rem] lg:w-[20rem] sm:w-[15rem] z-10 "
        />
        <img
          src={vesselShield}
          alt="vessel_shield"
          className={`absolute top-[7%] left-[15%] w-[28%] opacity-0`}
          // onClick={playSound}
          onMouseOver={() => {
            // setVesselShieldOpacity(1);
            playSound();
          }}
          onMouseLeave={() => {
            // setVesselShieldOpacity(0);
          }}
        />
        <img
          src={soloSpaceShip}
          alt="solo_space_ship"
          className={`absolute top-[6.6%] left-[51.5%] w-[15.5%] opacity-${soloshipOpacity}`}
          onMouseEnter={playSound}
          onMouseOver={() => setSoloShipOpacity(1)}
          onMouseLeave={() => setSoloShipOpacity(0)}
        />
        <img
          src={grandMarketHolo}
          alt="grand_market_holo"
          className={`absolute top-[2%] right-0 w-[33%] opacity-${grandMarketOpacity} `}
          onMouseEnter={playSound}
          onMouseOver={() => setGrandMarketOpacity(1)}
          onMouseLeave={() => setGrandMarketOpacity(0)}
        />
        <img
          src={armoryHolo}
          alt="armory_holo"
          className={`absolute top-[15%] left-[38.5%] w-[27%] opacity-${armoryOpacity} `}
          onMouseEnter={playSound}
          onMouseOver={() => setArmoryOpacity(1)}
          onMouseLeave={() => setArmoryOpacity(0)}
        />
        <img
          src={researchCenter}
          alt="research_center"
          className={`absolute top-[19.5%] left-0 w-[27.5%] opacity-${researchCenterOpacity} `}
          onMouseEnter={playSound}
          onMouseOver={() => setResearchCenterOpacity(1)}
          onMouseLeave={() => setResearchCenterOpacity(0)}
        />
        <img
          src={mulitiVerse}
          alt="multi_verse"
          className={`absolute top-[17%] left-[12.2%] w-[18.5%] opacity-${multiVerseOpacity} `}
          onMouseEnter={playSound}
          onMouseOver={() => setMultiVerseOpacity(1)}
          onMouseLeave={() => setMultiVerseOpacity(0)}
        />
        <img
          src={virtualTraining}
          alt="virtual_training"
          className={`absolute top-[20.5%] right-0 w-[41%] opacity-${virtualTrainingOpacity} `}
          onMouseEnter={playSound}
          onMouseOver={() => setVirtualTrainingOpacity(1)}
          onMouseLeave={() => setVirtualTrainingOpacity(0)}
        />
        <img
          src={bossFight}
          alt="boss_fight"
          className={`absolute top-[29.5%] right-[28%] w-[45%] opacity-${bossFightOpacity} `}
          onMouseEnter={playSound}
          onMouseOver={() => setBossFightOpacity(1)}
          onMouseLeave={() => setBossFightOpacity(0)}
        />
        <img
          src={rechargeCenter}
          alt="recharge_center"
          className={`absolute top-[45.5%] left-0 w-[39%] opacity-${rechargeCenterOpacity} `}
          onMouseEnter={playSound}
          onMouseOver={() => setRechargeCenterOpacity(1)}
          onMouseLeave={() => setRechargeCenterOpacity(0)}
        />
        <img
          src={dungeon}
          alt="dungeon"
          className={`absolute top-[38%] right-0 w-[35%] opacity-${dungeonOpacity} `}
          onMouseEnter={playSound}
          onMouseOver={() => setDungeonOpacity(1)}
          onMouseLeave={() => setDungeonOpacity(0)}
        />
        <img
          src={beacon}
          alt="beaon_holo"
          className={`absolute bottom-[15%] left-[8.5%] w-[28%] opacity-${beaconOpacity} `}
          onMouseEnter={playSound}
          onMouseOver={() => setBeaconOpacity(1)}
          onMouseLeave={() => setBeaconOpacity(0)}
        />
        <img
          src={outpost}
          alt="outpost_holo"
          className={`absolute bottom-[2.5%] right-[12%] w-[44%] opacity-${outpostOpacity} `}
          onMouseEnter={playSound}
          onMouseOver={() => setOutpostOpacity(1)}
          onMouseLeave={() => setOutpostOpacity(0)}
        />
        {displayOverlay && (
          <div className=" fixed h-[100vh] w-[100vw] bg-[#000000AD] top-0 left-0 flex flex-col items-center justify-center ">
            <img src={logo} alt="logo" className=" h-[10rem] w-[10rem] " />
            <button
              onClick={() => setDisplayOverlay(false)}
              className=" mt-[2.6rem] text-[#E81800] font-[2.1rem] px-[8.4rem] py-[1.4rem] bg-[#e8170046] rounded-[1.3rem] border-[#E81800] border-[0.1rem]"
            >
              {" "}
              ENTER WORLD{" "}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
