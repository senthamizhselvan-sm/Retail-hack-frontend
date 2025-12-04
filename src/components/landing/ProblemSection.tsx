'use client'

import { motion } from 'framer-motion'
import { XCircle, DollarSign, Clock, AlertTriangle, Users } from 'lucide-react'

const problems = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "SMBs Struggle with Professional Creatives",
    description: "Lack of design expertise leads to poor quality ads that don't convert"
  },
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    title: "Every Platform Has Different Rules",
    description: "Amazon, Flipkart, Meta all have unique size & guideline requirements"
  },
  {
    icon: <XCircle className="w-6 h-6" />,
    title: "Strict Rules → Frequent Rejections",
    description: "Ads get rejected due to guideline violations, delaying campaigns"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Agencies Are Costly + Slow",
    description: "Professional services are expensive with long turnaround times"
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Rejected Creatives = Wasted Budget",
    description: "Every rejected ad means wasted time and advertising spend"
  }
]

export default function ProblemSection() {
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
            The <span className="text-red-600">Problem</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Retailers face multiple challenges in creating effective ad creatives
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div className="relative">
            <div className="w-64 h-64 bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">😫</div>
                <div className="text-gray-700 font-semibold">Frustrated Seller</div>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl mb-1">❌</div>
                <div className="text-sm text-gray-700">Rejected Ad</div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl mb-1">💸</div>
                <div className="text-sm text-gray-700">Wasted Budget</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}