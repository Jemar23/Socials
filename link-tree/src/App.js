import './App.css';

function App() {
  return (
    <div className="App">
      <Name />
      <InfoBox />
    </div>
  );
}

function Name() {
   return (
     <div className="flex flex-col items-center">
       <h1 className="text-2xl font-extrabold">Jemar Johnson</h1>
       <p className="text-lg font-bold">Student Software Engineer</p>
     </div>
   );
}

function InfoBox() {
  return (
    <div className="w-full space-y-4 pt-2 row-3">
      <p className="text-center text-lg">OpenSea NFT portfolio</p>
      <p className="text-center text-lg">Monitors</p>
      <p className="text-center text-lg">Camera</p>
    </div>
  )
}

export default App;
