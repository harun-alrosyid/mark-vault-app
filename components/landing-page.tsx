"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Mail, Shield, Zap, Lock, ImageIcon, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LandingPageProps {
  onGetStarted: () => void
  onLearnMore: () => void
}

export default function LandingPage({ onGetStarted, onLearnMore }: LandingPageProps) {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`MarkVault Contact: ${formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    window.location.href = `mailto:support@markvault.app?subject=${subject}&body=${body}`
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10 blur-3xl -z-10" />

        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-sm font-medium">
              {t("landing.badge")}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
            {t("landing.hero.title")}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            {t("landing.hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              onClick={onGetStarted}
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              {t("landing.hero.cta")}
            </Button>
            <Button
              onClick={onLearnMore}
              variant="outline"
              className="px-8 py-6 text-lg font-semibold rounded-full border-2 bg-[#3e3e3e] hover:bg-[#4a4a4a] text-white border-[#3e3e3e] transition-all"
            >
              {t("landing.hero.learn")}
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-card/50 border-y border-border">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
            {t("landing.features.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-background rounded-xl p-6 border border-border hover:border-purple-500/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                <Shield size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{t("landing.features.protection")}</h3>
              <p className="text-muted-foreground">{t("landing.features.protectionDesc")}</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-background rounded-xl p-6 border border-border hover:border-purple-500/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center mb-4">
                <Zap size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{t("landing.features.fast")}</h3>
              <p className="text-muted-foreground">{t("landing.features.fastDesc")}</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-background rounded-xl p-6 border border-border hover:border-purple-500/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mb-4">
                <Lock size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{t("landing.features.secure")}</h3>
              <p className="text-muted-foreground">{t("landing.features.secureDesc")}</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-background rounded-xl p-6 border border-border hover:border-purple-500/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-4">
                <ImageIcon size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{t("landing.features.watermark")}</h3>
              <p className="text-muted-foreground">{t("landing.features.watermarkDesc")}</p>
            </div>

            {/* Feature 5 */}
            <div className="bg-background rounded-xl p-6 border border-border hover:border-purple-500/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                <Palette size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{t("landing.features.bw")}</h3>
              <p className="text-muted-foreground">{t("landing.features.bwDesc")}</p>
            </div>

            {/* Feature 6 */}
            <div className="bg-background rounded-xl p-6 border border-border hover:border-purple-500/50 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center mb-4">
                <Mail size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{t("landing.features.multilang")}</h3>
              <p className="text-muted-foreground">{t("landing.features.multilangDesc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* App Details Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{t("landing.details.title")}</h2>
              <p className="text-lg text-muted-foreground mb-6">{t("landing.details.description")}</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                  </div>
                  <span className="text-foreground">{t("landing.details.feature1")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                  </div>
                  <span className="text-foreground">{t("landing.details.feature2")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                  </div>
                  <span className="text-foreground">{t("landing.details.feature3")}</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-red-500/10 rounded-2xl p-8 border border-purple-500/20">
              <div className="space-y-4">
                <div className="bg-background rounded-lg p-4 border border-border">
                  <p className="text-sm text-muted-foreground mb-1">{t("landing.details.version")}</p>
                  <p className="text-2xl font-bold text-foreground">v1.0.0</p>
                </div>
                <div className="bg-background rounded-lg p-4 border border-border">
                  <p className="text-sm text-muted-foreground mb-1">{t("landing.details.released")}</p>
                  <p className="text-lg font-semibold text-foreground">October 2025</p>
                </div>
                <div className="bg-background rounded-lg p-4 border border-border">
                  <p className="text-sm text-muted-foreground mb-1">{t("landing.details.status")}</p>
                  <p className="text-lg font-semibold text-green-600 dark:text-green-400">Active & Maintained</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-card/50 border-t border-border">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("landing.contact.title")}</h2>
            <p className="text-lg text-muted-foreground">{t("landing.contact.subtitle")}</p>
          </div>

          <form onSubmit={handleContactSubmit} className="bg-background rounded-2xl p-8 border border-border shadow-lg">
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-2">{t("landing.contact.name")}</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                placeholder={t("landing.contact.namePlaceholder")}
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-2">{t("landing.contact.email")}</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                placeholder={t("landing.contact.emailPlaceholder")}
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-2">{t("landing.contact.message")}</label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all resize-none"
                placeholder={t("landing.contact.messagePlaceholder")}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white py-3 text-lg font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              {t("landing.contact.send")}
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>{t("landing.footer")}</p>
        </div>
      </footer>
    </div>
  )
}
