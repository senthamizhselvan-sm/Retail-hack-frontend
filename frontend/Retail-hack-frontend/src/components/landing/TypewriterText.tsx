'use client'

import { useState, useEffect } from 'react'

interface TypewriterTextProps {
  texts: string[]
  speed?: number
  delay?: number
}

export default function TypewriterText({ texts, speed = 100, delay = 2000 }: TypewriterTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex]
      
      if (isDeleting) {
        if (currentText === fullText.substring(0, 3)) {
          setIsDeleting(false)
          setIsPaused(true)
          setTimeout(() => setIsPaused(false), 500)
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        } else {
          setCurrentText(fullText.substring(0, currentText.length - 1))
        }
      } else {
        if (currentText === fullText) {
          setIsPaused(true)
          setTimeout(() => {
            setIsPaused(false)
            setIsDeleting(true)
          }, delay)
        } else {
          setCurrentText(fullText.substring(0, currentText.length + 1))
        }
      }
    }, isDeleting ? speed / 2 : speed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, isPaused, currentTextIndex, texts, speed, delay])

  return (
    <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">
      {currentText}
      <span className="inline-block w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 ml-1 animate-pulse"></span>
    </span>
  )
}