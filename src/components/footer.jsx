import { FaInstagram, FaFacebook, FaHeart } from "react-icons/fa";
import "./Footer.css";


function Footer(){

  return (

    <footer className="footer">

      <div className="footer-content">

        <h2>
          Horia & Youssef 
        </h2>

        <p>
          Together with love, we celebrate our special day ❤️
        </p>


        <div className="social">

          <a href="#">
            <FaInstagram/>
          </a>

          <a href="#">
            <FaFacebook/>
          </a>

        </div>


        <p className="copyright">
          Made with <FaHeart/> for our engagement
        </p>


      </div>


    </footer>

  )

}


export default Footer;