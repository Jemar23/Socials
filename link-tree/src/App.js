import './App.css';
import { GrTwitter } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";

function App() {
  return (
    <div className="App">
    <Name />
    <Icon />
    <Links />
    </div>
  );
}


 function Name() {
    return (
      <div className="flex flex-col items-center text-white">
        <h1 className="text-2xl font-extrabold">Jemar Johnson</h1>
        <p className="text-lg font-bold">Student Software Engineer at BloomTech</p>
      </div>
    );
 }

 function Icon() {
  return (
    <div className="flex justify-center gap-2 pt-2">
       <a className="flex items-center justify-center text-center  hover:bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg overflow-hidden h-8 w-8" 
       href="https://twitter.com/Enkourage_" 
       target="_blank" 
       rel="noopener noreferrer">
        <GrTwitter size='20px' color='white'/>
       </a>

       <a className="flex items-center justify-center text-center hover:bg-gradient-to-r from-violet-500 to-blue-500 rounded-full  shadow-lg overflow-hidden h-8 w-8" 
       href="https://www.linkedin.com/in/jemar-johnson-029280206/" 
       target="_blank" 
       rel="noopener noreferrer">
        <GrLinkedin size='20px' color='white' />   
       </a>

       <a className="flex items-center justify-center text-center hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-lg overflow-hidden h-8 w-8" 
       href="https://github.com/Jemar23" 
       target="_blank" 
       rel="noopener noreferrer">
           <GrGithub size='20px' color='white'/>
       </a>

    </div>
  );
}

 function Links() {
   return (
     <div className="container mx-auto px-14 w-full space-y-4 pt-2 text-lg text-slate-300">
       <a className="flex items-center justify-start text-center bg-slate-800 rounded-md border border-slate-600 shadow-lg hover:shadow-indigo-500/40 overflow-hidden h-24" 
       href="https://opensea.io/EnKourage" 
       target="_blank" 
       rel="noopener noreferrer">
         <img className="h-24 w-auto bg-auto" src="https://lh3.googleusercontent.com/fUXzLYjKgqtHqiePsN2nFkjSu2ZK4nRy5BhnPt4Kn8D0ypQv9lBr6g3NJgWDlRGfZjyqWTQsIy0VXW5b35y32CopKWeXO_V1_cBHkQ=w600" alt="FaceCam">

        </img>
        <div className="p-4">View NFT's I own!</div>
       </a>

       <a className="flex items-center justify-start text-center bg-slate-800 rounded-md border border-slate-600 shadow-lg hover:shadow-indigo-500/40 overflow-hidden h-24" 
       href="https://www.amazon.com/Sceptre-DisplayPort-Edge-Less-FreeSync-C275B-1858RN/dp/B089V2R9WW/ref=sr_1_14?keywords=sceptre+27+inch+monitor&qid=1650495955&s=electronics&sprefix=sc%2Celectronics%2C77&sr=1-14" 
       target="_blank" 
       rel="noopener noreferrer">
         <img className="h-24 w-auto bg-auto" src="https://m.media-amazon.com/images/I/61oVczVkrkL._AC_SX679_.jpg" alt="FaceCam">

        </img>
        <div className="p-4">Link to my Monitors</div>
       </a>

       <a className="flex items-center justify-start text-center bg-slate-800 rounded-md border border-slate-600 shadow-lg hover:shadow-indigo-500/40 overflow-hidden h-24" 
       href="https://www.amazon.com/gp/product/B07W6ZTMWP/ref=ppx_yo_dt_b_asin_image_o03_s02?ie=UTF8&th=1" 
       target="_blank" 
       rel="noopener noreferrer">
         <img className="h-24 w-auto bg-auto" src="https://m.media-amazon.com/images/I/71y87QFHegL._AC_SX679_.jpg" alt="FaceCam">

        </img>
        <div className="p-4">Link to my KeyBoard</div>
       </a>

       <a className="flex items-center justify-start text-center bg-slate-800 rounded-md border border-slate-600 shadow-lg hover:shadow-indigo-500/40 overflow-hidden h-24 " 
       href="https://www.elgato.com/en/facecam" 
       target="_blank" 
       rel="noopener noreferrer">
         <img className="h-24 w-auto bg-auto" src="https://www.xda-developers.com/files/2021/07/Elgato-Facecam-1.jpg" alt="FaceCam">

        </img>
        <div className="p-4">Link to my Camera</div>
       </a> 
     </div>
   );
 }

export default App;
