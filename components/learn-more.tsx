"use client"

import { useLanguage } from "@/components/language-provider"
import { BookOpen, Zap, Shield, HelpCircle } from "lucide-react"

interface LearnMoreProps {
  onClose: () => void
}

export default function LearnMore({ onClose }: LearnMoreProps) {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12">
          <button
            onClick={onClose}
            className="mb-6 px-4 py-2 rounded-lg bg-card border border-border hover:bg-card/80 transition-colors"
          >
            ← Back
          </button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("learn.title")}</h1>
          <p className="text-xl text-muted-foreground">{t("learn.subtitle")}</p>
        </div>

        {/* Getting Started Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-8 h-8 text-accent" />
            <h2 className="text-3xl font-bold">{t("learn.gettingStarted")}</h2>
          </div>
          <p className="text-lg text-muted-foreground mb-8">{t("learn.gettingStartedDesc")}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4, 5].map((step) => (
              <div key={step} className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-accent text-background flex items-center justify-center font-bold">
                    {step}
                  </div>
                  <h3 className="font-semibold">{t(`learn.step${step}`)}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{t(`learn.step${step}Desc`)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Watermark Guide Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-8 h-8 text-accent" />
            <h2 className="text-3xl font-bold">{t("learn.watermarkGuide")}</h2>
          </div>
          <p className="text-lg text-muted-foreground mb-8">{t("learn.watermarkGuideDesc")}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((tip) => (
              <div key={tip} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-accent">{t(`learn.watermarkTip${tip}`)}</h3>
                <p className="text-muted-foreground text-sm">{t(`learn.watermarkTip${tip}Desc`)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* B&W Conversion Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Zap className="w-8 h-8 text-accent" />
            <h2 className="text-3xl font-bold">{t("learn.bwConversion")}</h2>
          </div>
          <p className="text-lg text-muted-foreground mb-8">{t("learn.bwConversionDesc")}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((tip) => (
              <div key={tip} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-3 text-accent">{t(`learn.bwTip${tip}`)}</h3>
                <p className="text-muted-foreground text-sm">{t(`learn.bwTip${tip}Desc`)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="w-8 h-8 text-accent" />
            <h2 className="text-3xl font-bold">{t("learn.faq")}</h2>
          </div>
          <p className="text-lg text-muted-foreground mb-8">{t("learn.faqDesc")}</p>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((faq) => (
              <details key={faq} className="bg-card border border-border rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-lg flex items-center justify-between">
                  {t(`learn.faq${faq}Q`)}
                  <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">{t(`learn.faq${faq}A`)}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
