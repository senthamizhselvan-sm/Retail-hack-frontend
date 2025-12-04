'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [typedText, setTypedText] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [showLogo, setShowLogo] = useState(false)
  const platforms = ['Amazon', 'Flipkart', 'YouTube', 'Meta', 'Instagram']
  const companyFullName = 'CreativeGenius'

  useEffect(() => {
    // Typewriter effect for platforms - SLOWED DOWN
    let index = 0
    let currentWord = platforms[0]
    let isDeleting = false
    
    const typePlatforms = () => {
      if (isDeleting) {
        setTypedText(currentWord.substring(0, index - 1))
        index--
        if (index === 0) {
          isDeleting = false
          currentWord = platforms[(platforms.indexOf(currentWord) + 1) % platforms.length]
        }
      } else {
        setTypedText(currentWord.substring(0, index + 1))
        index++
        if (index === currentWord.length) {
          isDeleting = true
          setTimeout(() => {}, 2000) // Pause when complete (increased from 1000ms)
        }
      }
      
      setTimeout(typePlatforms, isDeleting ? 100 : 150) // Slower typing (was 40/80)
    }
    
    // Company name animation
    let nameIndex = 0
    const typeCompanyName = () => {
      if (nameIndex <= companyFullName.length) {
        setCompanyName(companyFullName.substring(0, nameIndex))
        nameIndex++
        setTimeout(typeCompanyName, 100)
      } else {
        setShowLogo(true)
      }
    }
    
    const timer1 = setTimeout(typePlatforms, 500)
    const timer2 = setTimeout(typeCompanyName, 300)
    
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <div className="landing-page">
      {/* Improved Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          {/* Right - Auth Buttons */}
          <div className="nav-buttons">
            <a href="/login" className="nav-btn nav-btn-login">
              <span className="btn-icon">🔑</span>
              Login
            </a>
            <a href="/signup" className="nav-btn nav-btn-signup">
              <span className="btn-icon">🚀</span>
              Sign Up Free
            </a>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            {/* Main Headline */}
            <h1 className="hero-title">
              Create Retail-Perfect
              <br />
              <span className="gradient-text">Ad Creatives in Seconds</span>
            </h1>

            {/* Subheading */}
            <p className="hero-subtitle">
              Generate, validate, and auto-correct{' '}
              <span className="typewriter-text">
                {typedText}
              </span>
              {' '}creatives with zero design skills.
            </p>

            {/* CTA Buttons */}
            <div className="cta-buttons">
              <a href="/signup" className="btn btn-primary">
                <span className="btn-icon">🚀</span>
                Start Creating Free
              </a>
              <a href="/login" className="btn btn-secondary">
                <span className="btn-icon">🔑</span>
                Login to Account
              </a>
            </div>

            {/* Stats */}
            <div className="stats">
              <div className="stat-item">
                <div className="stat-value">10x</div>
                <div className="stat-label">Faster Creation</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">99%</div>
                <div className="stat-label">Approval Rate</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">50+</div>
                <div className="stat-label">Platform Sizes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .landing-page {
          min-height: 100vh;
        }
        
        /* Improved Navbar Styles */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 18px 0;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(15px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
        }
        
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
        
        .nav-buttons {
          display: flex;
          gap: 14px;
          align-items: center;
        }
        
        .nav-btn {
          padding: 12px 28px;
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 15px;
          cursor: pointer;
        }
        
        .nav-btn-login {
          color: white;
          border: 2px solid white;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(5px);
        }
        
        .nav-btn-login:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(255, 255, 255, 0.2);
        }
        
        .nav-btn-signup {
          background: white;
          color: #667eea;
          border: 2px solid white;
          box-shadow: 0 5px 20px rgba(255, 255, 255, 0.3);
        }
        
        .nav-btn-signup:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(255, 255, 255, 0.4);
          background: #f8f9ff;
        }
        
        .btn-icon {
          font-size: 16px;
          display: flex;
          align-items: center;
        }
        
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 120px 0 60px;
          position: relative;
          overflow: hidden;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }
        
        .hero-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .hero-title {
          font-size: clamp(2.5rem, 6vw, 3.8rem);
          font-weight: 800;
          line-height: 1.1;
          color: white;
          margin-bottom: 24px;
          text-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          animation: fadeIn 0.6s ease 0.3s both;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #fff 0%, #f093fb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-subtitle {
          font-size: 1.3rem;
          color: rgba(255, 255, 255, 0.95);
          margin-bottom: 40px;
          line-height: 1.6;
          animation: fadeIn 0.6s ease 0.4s both;
        }
        
        .typewriter-text {
          display: inline-block;
          min-width: 130px;
          color: #f093fb;
          font-weight: 700;
          border-right: 3px solid #f093fb;
          padding-right: 5px;
          animation: blink 1s step-end infinite;
          background: rgba(255, 255, 255, 0.15);
          padding: 4px 10px;
          border-radius: 6px;
          backdrop-filter: blur(5px);
        }
        
        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-bottom: 60px;
          flex-wrap: wrap;
          animation: fadeIn 0.6s ease 0.5s both;
        }
        
        .btn {
          padding: 16px 32px;
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 16px;
          min-width: 200px;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
          box-shadow: 0 10px 30px rgba(245, 87, 108, 0.3);
          border: none;
        }
        
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 40px rgba(245, 87, 108, 0.4);
        }
        
        .btn-secondary {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.3);
          color: white;
        }
        
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(255, 255, 255, 0.1);
        }
        
        .btn-icon {
          font-size: 18px;
        }
        
        .stats {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin-top: 40px;
          flex-wrap: wrap;
          animation: fadeIn 0.6s ease 0.6s both;
        }
        
        .stat-item {
          text-align: center;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 20px 30px;
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          min-width: 150px;
          transition: all 0.3s ease;
        }
        
        .stat-item:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
        
        .stat-value {
          font-size: 2.5rem;
          font-weight: 800;
          color: white;
          margin-bottom: 5px;
          text-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .stat-label {
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.9rem;
          font-weight: 500;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        @media (max-width: 768px) {
          .nav-btn {
            padding: 10px 22px;
            font-size: 14px;
          }
          
          .btn-icon {
            font-size: 14px;
          }
          
          .nav-buttons {
            gap: 10px;
          }
          
          .hero-section {
            padding: 100px 0 40px;
          }
          
          .hero-title {
            font-size: 2.2rem;
          }
          
          .hero-subtitle {
            font-size: 1.1rem;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .btn {
            width: 100%;
            max-width: 300px;
          }
          
          .stats {
            gap: 20px;
          }
          
          .stat-item {
            min-width: 120px;
            padding: 15px 20px;
          }
          
          .stat-value {
            font-size: 2rem;
          }
        }
        
        @media (max-width: 480px) {
          .nav-logo-text {
            display: none;
          }
          
          .nav-buttons {
            gap: 8px;
          }
          
          .nav-btn {
            padding: 8px 16px;
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  )
}