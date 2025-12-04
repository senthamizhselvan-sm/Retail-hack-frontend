'use client'

import { motion } from 'framer-motion'
import { Shield, LayoutGrid, Smartphone, MessageSquare, Image, Palette } from 'lucide-react'

const features = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "AI Guideline Validator",
    description: "Automatically checks safe zones, padding, SKU visibility, and text ratios",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <LayoutGrid className="w-8 h-8" />,
    title: "Auto Layout Correction",
    description: "Smart placement of product, logo, and text blocks for optimal visibility",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Multi-Platform Resizer",
    description: "One-click resize for Amazon, Flipkart, Facebook, Instagram, Google",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "AI Creative Assistant",
    description: "Generates compelling headlines, captions, and CTAs instantly",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Image className="w-8 h-8" />,
    title: "Background Cleanup",
    description: "Professional-grade background removal like Remove.bg",
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Brand DNA",
    description: "Autofill brand colors, fonts, and styles across all creatives",
    color: "from-pink-500 to-rose-500"
  }
]

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Core <span className="gradient-text">Features</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to create professional retail creatives
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow p-8 border border-gray-100">
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className={`relative w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                
                <div className="mt-6">
                  <div className={`h-1 w-16 bg-gradient-to-r ${feature.color} rounded-full group-hover:w-24 transition-all duration-300`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "10x", label: "Faster Creation" },
            { value: "99%", label: "Approval Rate" },
            { value: "50+", label: "Platform Sizes" },
            { value: "0", label: "Design Skills Needed" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}