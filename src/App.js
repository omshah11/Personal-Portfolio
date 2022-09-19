import './App.css';
import useMediaQuery from "react-responsive";
import Header from './Components/Header/index';
import LandingPage from './views/LandingPage/index';
import AcademicsSection from './views/AcademicsSection/AcademicsSection';
import Projects from './views/ProjectsSection/ProjectsSection';
import Certifications from './views/CertificationsSection/CertificationsSection';
import { data } from "./Components/Academics/data";
import {data2} from "./Components/Projects/data";
import {data3} from "./Components/Certifications/data";
const App = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  const ApplicationStyle = isMobile ? 'ApplicationContainer-mobile' : 'ApplicationContainer-desktop';
  return (
    <section>
      <div className={ApplicationStyle}>
        <Header />
        <LandingPage />
        <AcademicsSection data={data}/>
        <Projects data = {data2}/>
        <Certifications data = {data3}/>
      </div>
    </section>
  );
}

export default App;
