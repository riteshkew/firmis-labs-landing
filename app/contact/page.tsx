'use client'

import { useState, FormEvent } from 'react'
import { Mail, Clock, Briefcase } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitStatus('success')

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    })

    // Clear success message after 5 seconds
    setTimeout(() => setSubmitStatus('idle'), 5000)
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <main className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        {/* Page Header */}
        <div className="mb-16 lg:mb-20">
          <h1
            className="text-6xl lg:text-7xl text-[#FAFAFA] mb-6 tracking-tight font-light"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Get in Touch
          </h1>
          <p className="text-xl text-[#AAAAAA] mb-8 font-light">
            We'd love to hear from you
          </p>
          {/* Gold gradient divider */}
          <div className="h-px w-32 bg-gradient-to-r from-[#C4A76A] to-transparent"></div>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* LEFT COLUMN - Contact Form */}
          <div className="relative">
            <div className="bg-[#1A1A1A] border border-[#1F1F1F] rounded-lg p-8 lg:p-10 relative overflow-hidden">
              {/* Gold accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C4A76A] via-[#D4B77A] to-transparent"></div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-[#AAAAAA] mb-2 font-medium"
                  >
                    Name <span className="text-[#C4A76A]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3.5 bg-[#0F0F0F] border border-[#1F1F1F] rounded-md
                             text-[#FAFAFA] placeholder-[#888888]
                             focus:outline-none focus:border-[#C4A76A] focus:ring-1 focus:ring-[#C4A76A]
                             transition-all duration-300"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-[#AAAAAA] mb-2 font-medium"
                  >
                    Email <span className="text-[#C4A76A]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3.5 bg-[#0F0F0F] border border-[#1F1F1F] rounded-md
                             text-[#FAFAFA] placeholder-[#888888]
                             focus:outline-none focus:border-[#C4A76A] focus:ring-1 focus:ring-[#C4A76A]
                             transition-all duration-300"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm text-[#AAAAAA] mb-2 font-medium"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What would you like to discuss?"
                    className="w-full px-4 py-3.5 bg-[#0F0F0F] border border-[#1F1F1F] rounded-md
                             text-[#FAFAFA] placeholder-[#888888]
                             focus:outline-none focus:border-[#C4A76A] focus:ring-1 focus:ring-[#C4A76A]
                             transition-all duration-300"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-[#AAAAAA] mb-2 font-medium"
                  >
                    Message <span className="text-[#C4A76A]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, timeline, and goals..."
                    className="w-full px-4 py-3.5 bg-[#0F0F0F] border border-[#1F1F1F] rounded-md
                             text-[#FAFAFA] placeholder-[#888888]
                             focus:outline-none focus:border-[#C4A76A] focus:ring-1 focus:ring-[#C4A76A]
                             transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-[#C4A76A] text-[#0A0A0A] font-semibold rounded-md
                           hover:bg-[#D4B77A] focus:outline-none focus:ring-2 focus:ring-[#C4A76A]
                           focus:ring-offset-2 focus:ring-offset-[#0A0A0A]
                           transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
                           transform hover:translate-y-[-2px] active:translate-y-0"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-[#0F0F0F] border border-[#C4A76A] rounded-md animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="text-sm text-[#C4A76A] font-medium">
                      Thank you. We'll be in touch soon.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* RIGHT COLUMN - Contact Info */}
          <div className="space-y-6">
            {/* Email Card */}
            <div className="bg-[#1A1A1A] border border-[#1F1F1F] rounded-lg p-8 hover:border-[#C4A76A] transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#0F0F0F] rounded-lg border border-[#1F1F1F] group-hover:border-[#C4A76A] transition-all duration-300">
                  <Mail className="w-6 h-6 text-[#C4A76A]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#FAFAFA] mb-2">Email</h3>
                  <a
                    href="mailto:hello@firmislabs.com"
                    className="text-[#AAAAAA] hover:text-[#C4A76A] transition-colors duration-300 text-sm"
                  >
                    hello@firmislabs.com
                  </a>
                </div>
              </div>
            </div>

            {/* Response Time Card */}
            <div className="bg-[#1A1A1A] border border-[#1F1F1F] rounded-lg p-8 hover:border-[#C4A76A] transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#0F0F0F] rounded-lg border border-[#1F1F1F] group-hover:border-[#C4A76A] transition-all duration-300">
                  <Clock className="w-6 h-6 text-[#C4A76A]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#FAFAFA] mb-2">Response Time</h3>
                  <p className="text-[#AAAAAA] text-sm leading-relaxed">
                    We typically respond within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Partnerships Card */}
            <div className="bg-[#1A1A1A] border border-[#1F1F1F] rounded-lg p-8 hover:border-[#C4A76A] transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#0F0F0F] rounded-lg border border-[#1F1F1F] group-hover:border-[#C4A76A] transition-all duration-300">
                  <Briefcase className="w-6 h-6 text-[#C4A76A]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#FAFAFA] mb-2">For Partnerships</h3>
                  <a
                    href="mailto:partnerships@firmislabs.com"
                    className="text-[#AAAAAA] hover:text-[#C4A76A] transition-colors duration-300 text-sm"
                  >
                    partnerships@firmislabs.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
