import React, { useState, useEffect } from "react";
import "./details.css";

import { 
  FaCalendarDays, 
  FaClock, 
  FaLocationDot 
} from "react-icons/fa6";

function Details() {
  // تحديد تاريخ المناسبة (25 يونيو 2026 الساعة 8 مساءً)
  const targetDate = new Date("2026-06-25T20:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="details">
      <div className="details-card">
        
        {/* قسم العداد التنازلي */}
        <div className="countdown-container">
          <div className="countdown-box">
            <span className="countdown-number">{timeLeft.days}</span>
            <span className="countdown-label">Days</span>
          </div>
          <div className="countdown-divider">:</div>
          <div className="countdown-box">
            <span className="countdown-number">{timeLeft.hours}</span>
            <span className="countdown-label">Hours</span>
          </div>
          <div className="countdown-divider">:</div>
          <div className="countdown-box">
            <span className="countdown-number">{timeLeft.minutes}</span>
            <span className="countdown-label">Mins</span>
          </div>
          <div className="countdown-divider">:</div>
          <div className="countdown-box">
            <span className="countdown-number">{timeLeft.seconds}</span>
            <span className="countdown-label">Secs</span>
          </div>
        </div>

        <h1>Event Details</h1>
        <p className="subtitle">
          We would love to celebrate this special moment with you
        </p>

        <div className="info">
          <div className="item">
            <FaCalendarDays />
            <div>
              <h3>Date</h3>
              <p>Thursday, June 25th, 2026</p>
            </div>
          </div>

          <div className="item">
            <FaClock />
            <div>
              <h3>Time</h3>
              <p>8:00 PM</p>
            </div>
          </div>

          <div className="item">
            <FaLocationDot />
            <div>
              <h3>Location</h3>
              <p>Benha, Business Men Club</p>
            </div>
          </div>
        </div>

        <div className="couple">
          <h2>
            Yosif <span>♡</span> Horia
          </h2>
          <p>Engagement Celebration</p>
        </div>

        <a
          className="location-btn"
          href="https://maps.app.goo.gl/NCBdBfhGmvrADV4E7?g_st=ic"
          target="_blank"
          rel="noreferrer"
        >
          View Location
        </a>
      </div>

    </section>
  );
}

export default Details;
