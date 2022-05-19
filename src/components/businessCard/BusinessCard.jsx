import Info from "../info/Info";
import About from "../about/About";
import Interests from "../interests/Interests";
import Footer from "../footer/Footer";
import './BusinessCard.scss';

export default function BusinessCard() {
    return(
        <div className="businessCard">
            <Info></Info>
            <About></About>
            <Interests></Interests>
            <Footer></Footer>
        </div>
    )
}