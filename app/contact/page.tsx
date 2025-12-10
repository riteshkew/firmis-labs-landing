'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import { ArrowRight, Mail, Clock, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: '', email: '', subject: '', message: '' })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-12 pb-20 md:pt-16 md:pb-28 bg-[#fafaf9]">
        <div className="mx-auto max-w-6xl px-8 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 mb-8">
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-950 mb-8 max-w-4xl">
            Start a conversation
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
            Have a question about our products? Want to discuss a collaboration?
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-20">
            {/* Contact Form - 2/3 width */}
            <div className="lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 mb-5">
                Send a Message
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-950 mb-10">
                How can we help?
              </h2>

              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-950 placeholder:text-slate-400 focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 transition-all"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-950 placeholder:text-slate-400 focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 transition-all"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-950 placeholder:text-slate-400 focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 transition-all"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700"
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
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-950 placeholder:text-slate-400 focus:outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 transition-all resize-none"
                  />
                </div>

                {/* Privacy Notice - Mobile */}
                <p className="text-xs text-slate-500 lg:hidden">
                  By submitting this form, you agree to our privacy policy.
                </p>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm bg-slate-950 text-white hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 group"
                >
                  {isSubmitting ? (
                    <>
                      Sending...
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>

                {/* Success Message */}
                {isSubmitted && (
                  <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg">
                    <p className="text-sm text-slate-950 font-medium">
                      Thank you for reaching out! We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info Sidebar - 1/3 width */}
            <div className="space-y-8">
              {/* Email Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200">
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-5">
                  <Mail className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-base font-semibold text-slate-950 mb-3">
                  Email
                </h3>
                <a
                  href="mailto:support@firmislabs.com"
                  className="text-slate-600 hover:text-teal-600 transition-colors text-sm"
                >
                  support@firmislabs.com
                </a>
              </div>

              {/* Response Time Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200">
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-5">
                  <Clock className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-base font-semibold text-slate-950 mb-3">
                  Response Time
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  We typically respond within 24 hours during business days.
                </p>
              </div>

              {/* Privacy Notice - Desktop */}
              <p className="text-xs text-slate-500 pt-3 hidden lg:block">
                By submitting this form, you agree to our privacy policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-[#fafaf9] border-t border-slate-200">
        <div className="mx-auto max-w-3xl px-8 lg:px-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 mb-5">
            Explore More
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-950 mb-8">
            Want to see our work?
          </h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed">
            Check out the tools we&apos;ve built for practitioners like you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium text-sm bg-slate-950 text-white hover:bg-slate-800 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md group"
            >
              View Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium text-sm text-slate-950 border border-slate-200 hover:border-slate-300 bg-white transition-all duration-200 hover:-translate-y-0.5"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
