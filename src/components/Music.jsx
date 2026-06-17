import { useRef, useState, useEffect } from "react";
import { FaMusic, FaVolumeMute } from "react-icons/fa";
import "./Music.css";

function Music() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  // تشغيل تلقائي ناعم عند أول حركة أو نقرة في الموقع
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioRef.current && !audioRef.current.playing) {
        audioRef.current.play()
          .then(() => {
            setPlaying(true);
          })
          .catch((err) => console.log("Autoplay waiting for interaction"));
        
        // أول ما يشتغل بنشيل الـ listeners فوراً عشان ما تتدخلش تاني
        window.removeEventListener("click", handleFirstInteraction);
        window.removeEventListener("scroll", handleFirstInteraction);
        window.removeEventListener("touchstart", handleFirstInteraction);
      }
    };

    window.addEventListener("click", handleFirstInteraction);
    window.addEventListener("scroll", handleFirstInteraction);
    window.addEventListener("touchstart", handleFirstInteraction);

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, []);

  // زرار التحكم المباشر: تشغيل / إيقاف
  const toggleMusic = (e) => {
    e.stopPropagation(); // منع حدوث مشاكل مع الـ window click

    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play();
      setPlaying(true);
    } else {
      audioRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio 
        ref={audioRef} 
        src="/the_mountain-wedding-522480.mp3" 
        loop 
        preload="auto"
      />

      <button 
        className={`music-btn ${playing ? "playing" : ""}`} 
        onClick={toggleMusic}
      >
        {playing ? <FaMusic /> : <FaVolumeMute />}
      </button>
    </>
  );
}

export default Music;