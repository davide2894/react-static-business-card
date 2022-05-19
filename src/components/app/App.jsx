import './App.scss';
import Info from '../info/Info';
import About from '../about/About';
import Interests from '../interests/Interests';
import Footer from '../footer/Footer';

export default function App() {
  return (
    <div className="App">
      <Info></Info>
      <About></About>
      <Interests></Interests>
      <Footer></Footer>
    </div>
  );
}