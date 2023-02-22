import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

let name = "Samip"
function App() {
  return (
    <>


      {/* Navigation bar */}
      <Navbar title="TextUtils" aboutText="About us"/>

      {/* Text form  */}
      <div className="container">
      <TextForm heading="Enter your text below:"/>

      {/* <About/> */}
      </div>

      
    </>
  );
}

export default App;
