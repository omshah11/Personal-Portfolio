import './App.css';
import Header from './Components/Header/index';
import LandingPage from './views/LandingPage/index';
import Academics from './Components/Academics/index';
function App() {
  return (
    <div className="ApplicationContainer">
      <Header />
      <LandingPage />
      <Academics />
    </div>
  );
}

export default App;
