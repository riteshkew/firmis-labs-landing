'use client'

import { useState, FormEvent } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setFormData({ name: '', email: '', message: '' })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen bg-[#0C0C0C] px-6 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-4xl lg:text-5xl text-[#FAFAF9] mb-4 font-light tracking-tight">
            Get in touch
          </h1>
          <p className="text-lg text-[#A3A3A3]">
            We'd love to hear from you
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left Column - Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-[#A3A3A3] mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-[#141414] border border-[#262626] rounded-lg
                           text-[#FAFAF9] placeholder-[#525252]
                           focus:outline-none focus:border-[#D97757] focus:ring-1 focus:ring-[#D97757]/20
                           transition-all duration-200"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-[#A3A3A3] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-[#141414] border border-[#262626] rounded-lg
                           text-[#FAFAF9] placeholder-[#525252]
                           focus:outline-none focus:border-[#D97757] focus:ring-1 focus:ring-[#D97757]/20
                           transition-all duration-200"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-[#A3A3A3] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what you're working on..."
                  className="w-full px-4 py-3 bg-[#141414] border border-[#262626] rounded-lg
                           text-[#FAFAF9] placeholder-[#525252]
                           focus:outline-none focus:border-[#D97757] focus:ring-1 focus:ring-[#D97757]/20
                           transition-all duration-200 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-[#D97757] text-white font-medium rounded-lg
                         hover:bg-[#E08B6D]
                         focus:outline-none focus:ring-2 focus:ring-[#D97757] focus:ring-offset-2 focus:ring-offset-[#0C0C0C]
                         transition-all duration-200"
              >
                Send message
              </button>

              {/* Success Message */}
              {isSubmitted && (
                <div className="p-4 bg-[#141414] border border-[#D97757]/30 rounded-lg">
                  <p className="text-sm text-[#FAFAF9]">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-8">
            {/* Email */}
            <div>
              <h3 className="text-sm text-[#A3A3A3] mb-2">Email</h3>
              <a
                href="mailto:hello@firmislabs.com"
                className="text-[#FAFAF9] hover:text-[#D97757] transition-colors duration-200"
              >
                hello@firmislabs.com
              </a>
            </div>

            {/* Response Time */}
            <div>
              <h3 className="text-sm text-[#A3A3A3] mb-2">Response time</h3>
              <p className="text-[#737373] text-sm leading-relaxed">
                We typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
