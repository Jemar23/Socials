import './App.css';
import { GrTwitter } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";

function App() {
  return (
    <div className="App">
      <Name />
      <Logos />
      <InfoBox />
      <Buttons />
      <Discord />
    </div>
  );
}

function Name() {
   return (
     <div className="flex flex-col items-center">
       <h1 className="text-2xl font-extrabold">Jemar Johnson</h1>
       <p className="text-lg font-bold">Student Software Engineer at BloomTech</p>
     </div>
   );
}

function InfoBox() {
  return (
    <div className="w-full space-y-4 pt-2 row-3">
      <p className="text-center text-lg">OpenSea NFT portfolio</p>
      <p className="text-center text-lg">Monitors</p>
      <p className="text-center text-lg">KeyBoard</p>
      <p className="text-center text-lg">Camera</p>
    </div>
  );
}

function Logos() {
  return (
    <div className="flex justify-center gap-2 pt-2">
      <GrTwitter size='20px' />
      <GrLinkedin size='20px'/>
      <GrGithub size='20px'/>
    </div>
  );
}

function Buttons() {
  return (
    <div className="flex justify-center pt-2">
      <button className="box-border border-solid rounded-full h-30 w-72 p-4 border-4">Click</button>
    </div>
  );
}

function Discord() {
  return (
    <div className="w-6 h-6 rounded-full">
      <a href="https://discord.com" target="_blank" rel="noopener noreferrer">Discord</a>
      <svg width="24" height="24" fill="#ffffff">
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Discord</title>
        <path d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z">
        </path>
        </svg>
      </svg>
    </div>
  );
}

export default App;
