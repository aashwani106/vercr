import './Hero.css'

function Hero() {
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
          <h1>INNOVATION</h1>
        </div>
        
        {/* Left Section */}
        <div className="left-section">
          <div className="welcome-text">
            <p>
              Welcome to VRCR, where Vision Drives Impact. Discover the journey of{' '}
              <span className="highlight-name">Vakati Ravichandra Reddy</span>
            </p>
          </div>
          <button className="cta-button" >Discover the Vision</button>
          <div className="bottom-text">
            <p>INNOVATION FOR HUMANITY</p>
          </div>
        </div>
        
        {/* Right Section */}
        <div className="right-section">
          <div className="future-text">
            <h2>STEP INTO <span className="highlight-future">THE FUTURE</span></h2>
          </div>
          <div className="button-group">
            <button className="cta-button"  >Join The Movement</button>
            <button className="cta-button" >Explore My Journey</button>
          </div>
        </div>
        
        {/* Coming Soon Text - Below the background man */}
        <div className="coming-soon-section">
          <h3>COMING SOON</h3>
        </div>
      </div>
    </div>
  )
}

export default Hero
