'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Play } from 'lucide-react'
import Link from 'next/link'
import TypewriterText from './TypewriterText'
import { useState } from 'react'

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50/50 to-blue-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold mb-8 shadow-lg"
          >
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered Creative Suite</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="block text-gray-900">Create Retail-Perfect</span>
            <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              Ad Creatives in Seconds
            </span>
          </motion.h1>

          {/* Animated Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10"
          >
            Generate, validate, and auto-correct{' '}
            <TypewriterText texts={['Amazon', 'Flipkart', 'YouTube', 'Meta', 'Instagram']} />
            {' '}creatives with zero design skills.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link
              href="/login"
              className="group inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Start Creating Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button 
              onClick={() => setShowVideo(true)}
              className="group inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-semibold text-gray-700 bg-white rounded-xl hover:shadow-xl border-2 border-gray-200 hover:border-purple-300 transition-all duration-300"
            >
              <Play className="w-5 h-5 mr-2 group-hover:text-purple-600" />
              Watch Demo
            </button>
          </motion.div>

          {/* Hero Illustration - Laptop Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="relative mx-auto border-[14px] border-gray-800 rounded-[40px] h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] w-full max-w-3xl shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-purple-900 via-gray-900 to-gray-800 rounded-[26px] overflow-hidden">
                {/* Mockup Content */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="space-y-3">
                      <div className="h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                      <div className="h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-3/4"></div>
                    </div>
                    <div className="relative">
                      <div className="absolute -top-4 -right-4 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
                      <div className="h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-6 -left-6 bg-white p-3 rounded-xl shadow-2xl border border-gray-100"
            >
              <div className="text-sm font-semibold gradient-text">AI Assistant</div>
              <div className="text-xs text-gray-500">"Make it pop!"</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 1 }}
              className="absolute -bottom-6 -right-6 bg-white p-3 rounded-xl shadow-2xl border border-gray-100"
            >
              <div className="flex gap-2">
                {['1080x1080', '1200x1200', '1920x1080'].map((size) => (
                  <div key={size} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">
                    {size}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setShowVideo(false)}>
          <div className="bg-white rounded-2xl p-2 max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-white mb-4">Demo video would play here</div>
                <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg">
                  Upload Your Demo Video
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}