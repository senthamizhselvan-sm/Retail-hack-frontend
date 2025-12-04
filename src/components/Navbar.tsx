'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-buttons">
          <Link href="/login" className="nav-btn login-btn">
            <span className="btn-icon">🔑</span>
            Login
          </Link>
          <Link href="/signup" className="nav-btn signup-btn">
            <span className="btn-icon">🚀</span>
            Sign Up Free
          </Link>
        </div>
      </div>

      <style jsx>{`
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
        
        .navbar.scrolled {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(20px);
          box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
          padding: 15px 0;
        }
        
        .container {
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
        
        .login-btn {
          color: white;
          border: 2px solid white;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(5px);
        }
        
        .login-btn:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(255, 255, 255, 0.2);
        }
        
        .signup-btn {
          background: white;
          color: #667eea;
          border: 2px solid white;
          box-shadow: 0 5px 20px rgba(255, 255, 255, 0.3);
        }
        
        .signup-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(255, 255, 255, 0.4);
          background: #f8f9ff;
        }
        
        .btn-icon {
          font-size: 16px;
          display: flex;
          align-items: center;
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
        }
        
        @media (max-width: 480px) {
          .nav-btn {
            padding: 9px 18px;
            font-size: 13px;
          }
          
          .btn-icon {
            font-size: 13px;
          }
          
          .nav-buttons {
            gap: 8px;
          }
        }
      `}</style>
    </nav>
  )
}