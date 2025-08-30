import './Hero.css'
import { useState, useEffect } from 'react'

function Hero() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('October 6, 2025 00:00:00').getTime()
    console.log('Target date set to:', new Date(targetDate).toDateString())

    // Calculate initial countdown
    const calculateCountdown = () => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance > 0) {
        const newCountdown = {
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        }
        setCountdown(newCountdown)
        console.log('Initial countdown:', newCountdown)
        return newCountdown
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        console.log('Countdown finished!')
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }
    }

    // Set initial countdown
    calculateCountdown()

    const timer = setInterval(() => {
      const newCountdown = calculateCountdown()
      if (newCountdown) {
        console.log('Countdown updated:', newCountdown)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="hero-container">
      {/* Left Yellow Curve - Behind everything */}
      <div className="left-curve">
        <img src="/assestes/left-yellow-curve.png" alt="Left yellow curve" />
      </div>

      {/* Right Yellow Curves - Behind everything */}
      <div className="right-curves">
        <img src="/assestes/right-yellow-curves.png" alt="Right yellow curves" />
      </div>

      {/* Main Content Card - Semi-transparent containing man and text */}
      <div className="hero-content">
        {/* Background Image - Inside the main card */}
        <div className="background-image">
          <img src="/assestes/manInBg.png" alt="Man in background" className="man-bg" />
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
              Welcome to VRCR, where Vision <br /> Drives  Impact. Discover the journey <br /> of{' '} 
              <span className="highlight-name">Vakati Ravichandra Reddy</span>
            </p>
          </div>
          <button className="cta-button" >Discover the Vision</button>
          <div className="future-text">
            <h2 > <span className='highlight-future'>INNOVATION</span>
              <br /> FOR HUMANITY
            </h2>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <div className="future-text">
            <h2>STEP INTO <span className="highlight-future">THE FUTURE</span></h2>
          </div>
          <div className="button-group">
            <button className="cta-button">Join The Movement</button>
            <button className="cta-button">Explore My Journey</button>
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
              <span className="countdown-number">{countdown.hours.toString().padStart(2, '0')}</span>
              <span className="countdown-label">HOURS</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-item">
              <span className="countdown-number">{countdown.minutes.toString().padStart(2, '0')}</span>
              <span className="countdown-label">MINUTES</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-item">
              <span className="countdown-number">{countdown.seconds.toString().padStart(2, '0')}</span>
              <span className="countdown-label">SECONDS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
