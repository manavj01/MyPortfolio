import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import MyIntro from './components/myIntro/MyIntro';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <MyIntro />
    </>
  );
}

export default App;
