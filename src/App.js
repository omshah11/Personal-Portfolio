import './App.css';
import Header from './Components/Header/index';
import LandingPage from './views/LandingPage/index';
import AcademicsSection from './views/AcademicsSection/AcademicsSection';
import { data } from "./Components/Academics/data";
function App() {
  return (
    <div className="ApplicationContainer">
      <Header />
      <LandingPage />
      <AcademicsSection data={data}/>
    </div>
  );
}

export default App;
