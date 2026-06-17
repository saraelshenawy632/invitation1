import "./home.css";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();


  return (

    <section className="hero">


      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >

        <source 
          src="/engagement.mp4" 
          type="video/mp4" 
        />

      </video>



      <div className="overlay"></div>



      <div className="hero-content">


        <span className="welcome">
          We're Getting Engaged
        </span>



        <h1>
          Horia <span>♡</span> Yosif
        </h1>



        <p>
          Join us as we celebrate our special day
        </p>



        <button
          className="hero-btn"
          onClick={() => navigate("/details")}
        >

          View Invitation

        </button>


      </div>


    </section>

  );
}


export default Home;