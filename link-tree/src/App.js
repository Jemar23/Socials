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
     <div id="first" className="firstName">
       <h1>Jemar Johnson</h1>
       <p>Student Software Engineer</p>
     </div>
   );
}

function InfoBox() {
  return (
    <div className="infoBox">
      <p>OpenSea NFT portfolio</p>
    </div>
  )
}

export default App;
