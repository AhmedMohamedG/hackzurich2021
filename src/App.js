import './App.css';
import {send_breastcancerPROM} from './data/dummyData'

function App() {
  console.log('json data', JSON.parse(send_breastcancerPROM('patient1','patient1')))
  return (
    <div className="App">
      <header className="App-header">
      Hackzurich 2021
      </header>
      Challenge 10 Roche
    </div>
  );
}

export default App;
