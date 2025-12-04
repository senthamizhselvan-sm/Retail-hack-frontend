'use client'

import { motion } from 'framer-motion'
import { Zap, CheckCircle, Layout, Download, MessageSquare, Palette } from 'lucide-react'

const solutions = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "One-Click Design Assistant",
    description: "AI generates perfect creatives with a single click"
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Retail-Platform Rule Validation",
    description: "Automatically checks against Amazon, Flipkart, Meta guidelines"
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: "Auto-Correct Layout Engine",
    description: "Smart placement of product, logo, and text blocks"
  },
  {
    icon: <Download className="w-6 h-6" />,
    title: "Multi-Size Export",
    description: "One design, multiple sizes for all platforms"
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "AI Caption & Headline Generator",
    description: "Creates compelling copy that converts"
  }
]

export default function SolutionSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The <span className="gradient-text">Solution</span> — RetailGen AI Studio
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to create stunning retail creatives, powered by AI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white mb-6">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3D UI Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-gray-900 to-purple-900 rounded-3xl p-1 shadow-2xl">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8">
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl"></div>
                  <div className="h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl"></div>
                  <div className="h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Feature Cards */}
          {[
            { text: "AI Validator", className: "-top-6 -left-6 from-green-500 to-emerald-500" },
            { text: "Auto Layout", className: "-top-6 -right-6 from-blue-500 to-cyan-500" },
            { text: "Multi-Size", className: "-bottom-6 -left-6 from-orange-500 to-red-500" },
            { text: "AI Assistant", className: "-bottom-6 -right-6 from-purple-500 to-pink-500" }
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                opacity: { delay: 0.5 + index * 0.1 },
                scale: { delay: 0.5 + index * 0.1 },
                y: { repeat: Infinity, duration: 2, delay: index * 0.5 }
              }}
              className={`absolute ${card.className}`}
            >
              <div className={`bg-gradient-to-r ${card.className} text-white px-4 py-2 rounded-xl shadow-lg font-semibold ${card.text.includes('AI') ? 'animate-pulse' : ''}`}>
                {card.text}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}