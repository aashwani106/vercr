import "./Hero.css";
import { useState, useEffect } from "react";

function Hero() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("October 6, 2025 00:00:00").getTime();
    // console.log("Target date set to:", new Date(targetDate).toDateString());

    // Calculate initial countdown
    const calculateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const newCountdown = {
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        };
        setCountdown(newCountdown);
        // console.log("Initial countdown:", newCountdown);
        return newCountdown;
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        console.log("Countdown finished!");
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
    };

    // Set initial countdown
    calculateCountdown();

    const timer = setInterval(() => {
      const newCountdown = calculateCountdown();
      if (newCountdown) {
        console.log("Countdown updated:", newCountdown);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-container">
      {/* Left Yellow Curve - Behind everything */}
      <div className="left-curve">
        <img src="/assestes/left-yellow-curve.png" alt="Left yellow curve" />
      </div>

      {/* Right Yellow Curves - Behind everything */}
      <div className="right-curves">
        <img
          src="/assestes/right-yellow-curves.png"
          alt="Right yellow curves"
        />
      </div>

      {/* Main Content Card - Semi-transparent containing man and text */}
      <div className="hero-content">
        {/* Background Image - Inside the main card */}
        {/* <div>
          
        </div> */}
        <div
          className="svgs"
          style={{ position: "absolute", top: 190, left: 500, zIndex: 2 }}
        >
          <svg
            width="270"
            height="361"
            viewBox="0 0 370 261"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31 2.05957H339C355.292 2.05957 368.5 15.2672 368.5 31.5596V597C368.5 613.292 355.292 626.5 339 626.5H31C14.7076 626.5 1.5 613.292 1.5 597V31.5596C1.5 15.2672 14.7076 2.05957 31 2.05957Z"
              stroke="url(#paint0_linear_43_3979)"
              stroke-width="3"
            />
            <defs>
              <linearGradient
                id="paint0_linear_43_3979"
                x1="0"
                y1="314.28"
                x2="370"
                y2="314.28"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#725408" />
                <stop offset="0.485" stop-color="#FFD500" />
                <stop offset="1" stop-color="#725408" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div
          className="svgs"
          style={{ position: "absolute", top: 250, right: 68, zIndex: 2 }}
        >
          <svg
            width="399"
            height="90"
            viewBox="0 0 399 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.25278 1.6709H81.5482L147.972 89.1984H398.782"
              stroke="#FFD500"
              stroke-width="1.5"
            />
          </svg>
        </div>
        <div
          className="svgs"
          style={{ position: "absolute", bottom: 110, left: 115, zIndex: 2 }}
        >
          <svg
            width="386"
            height="60"
            viewBox="0 0 386 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M385.869 0.911987H303.55L236.289 58.6429H0.375488"
              stroke="#FFD500"
              stroke-width="1.5"
            />
          </svg>
        </div>

        <div className="background-image">
          <img
            src="/assestes/manInBg.png"
            alt="Man in background"
            className="man-bg"
          />
        </div>

        {/* Top Innovation Text */}
        <div className="innovation-text">
          {/* <h1>INNOVATION</h1> */}
          <h1>COMING SOON</h1>
        </div>

        {/* Left Section */}
        <div className="left-section">
          <div className="welcome-text">
            <p>
              Welcome to VRCR, where Vision <br /> Drives Impact. Discover the
              journey <br /> of{" "}
              <span className="highlight-name">Vakati Ravichandra Reddy</span>
            </p>
          </div>
          <button className="cta-button">Discover the Vision</button>
          <div className="future-text">
            <h2>
              {" "}
              <span className="highlight-future">INNOVATION</span>
              <br /> FOR HUMANITY
            </h2>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <div className="future-text">
            <h2>
              STEP INTO <br />
              <span className="highlight-future">THE FUTURE</span>
            </h2>
          </div>
          <div className="button-group">
            <button className="cta-button" style={{ borderRadius: "40px" }}>
              Join The Movement
            </button>
            <button className="cta-button" style={{ borderRadius: "40px" }}>
              Explore My Journey
            </button>
          </div>
        </div>

        {/* Coming Soon Text - Below the background man */}
        <div className="coming-soon-section">
          <div className="countdown-timer">
            <div className="countdown-item">
              <span className="countdown-number">{countdown.days}</span>
              <span className="countdown-label">DAYS</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-item">
              <span className="countdown-number">
                {countdown.hours.toString().padStart(2, "0")}
              </span>
              <span className="countdown-label">HOURS</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-item">
              <span className="countdown-number">
                {countdown.minutes.toString().padStart(2, "0")}
              </span>
              <span className="countdown-label">MINUTES</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-item">
              <span className="countdown-number">
                {countdown.seconds.toString().padStart(2, "0")}
              </span>
              <span className="countdown-label">SECONDS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
