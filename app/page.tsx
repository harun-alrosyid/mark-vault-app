"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import ImageUploader from "@/components/image-uploader"
import ImageEditor from "@/components/image-editor"
import LandingPage from "@/components/landing-page"
import LearnMore from "@/components/learn-more"
import { Button } from "@/components/ui/button"
import { Download, Moon, Sun, RotateCcw, BookOpen } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function Home() {
  const [image, setImage] = useState<string | null>(null)
  const [processedImage, setProcessedImage] = useState<string | null>(null)
  const [showLanding, setShowLanding] = useState(true)
  const [showLearnMore, setShowLearnMore] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  const handleDownload = () => {
    if (!processedImage) return

    const link = document.createElement("a")
    link.href = processedImage
    link.download = "markvault-protected.png"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleReset = () => {
    setImage(null)
    setProcessedImage(null)
  }

  if (showLearnMore) {
    return <LearnMore onClose={() => setShowLearnMore(false)} />
  }

  if (showLanding && !image) {
    return (
      <main className="min-h-screen bg-background dark:bg-background transition-colors duration-300">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-md bg-background/80 dark:bg-background/80">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shadow-lg">
                <span className="text-background font-bold text-lg">🔐</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-bold text-accent">{t("app.title")}</h1>
                <p className="text-xs text-muted-foreground">Image Protection</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as any)}
                className="px-3 py-2 rounded-lg bg-card border border-border text-foreground text-sm font-medium hover:bg-card/80 transition-colors cursor-pointer"
              >
                <option value="en">English</option>
                <option value="id">Bahasa Indonesia</option>
                <option value="ja">日本語</option>
                <option value="zh">中文</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="ko">한국어</option>
                <option value="vi">Tiếng Việt</option>
              </select>

              <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-lg"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </Button>
            </div>
          </div>
        </header>

        <LandingPage onGetStarted={() => setShowLanding(false)} onLearnMore={() => setShowLearnMore(true)} />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background dark:bg-background transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-md bg-background/80 dark:bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setShowLanding(true)
                setImage(null)
                setProcessedImage(null)
              }}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shadow-lg">
                <span className="text-background font-bold text-lg">🔐</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-bold text-accent">{t("app.title")}</h1>
                <p className="text-xs text-muted-foreground">Image Protection</p>
              </div>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => setShowLearnMore(true)} className="gap-2 rounded-lg">
              <BookOpen size={16} />
              {t("learn.title")}
            </Button>

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as any)}
              className="px-3 py-2 rounded-lg bg-card border border-border text-foreground text-sm font-medium hover:bg-card/80 transition-colors cursor-pointer"
            >
              <option value="en">English</option>
              <option value="id">Bahasa Indonesia</option>
              <option value="ja">日本語</option>
              <option value="zh">中文</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="ko">한국어</option>
              <option value="vi">Tiếng Việt</option>
            </select>

            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-lg"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 text-balance">
            {t("app.title")}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">{t("app.subtitle")}</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Upload Section */}
          <div className="flex flex-col gap-6">
            <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="text-2xl">📤</span>
                {t("upload.title")}
              </h2>
              <ImageUploader onImageSelect={setImage} />
            </div>
          </div>

          {/* Editor Section */}
          {image && (
            <div className="flex flex-col gap-6">
              <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg md:text-xl font-semibold text-foreground flex items-center gap-2">
                    <span className="text-2xl">✏️</span>
                    {t("edit.title")}
                  </h2>
                  <Button onClick={handleReset} variant="outline" size="sm" className="gap-2 rounded-lg bg-transparent">
                    <RotateCcw size={16} />
                    {t("common.reset")}
                  </Button>
                </div>
                <ImageEditor image={image} onProcessed={setProcessedImage} />
              </div>
            </div>
          )}
        </div>

        {/* Preview Section */}
        {processedImage && (
          <div className="mt-8 md:mt-12">
            <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
                <h2 className="text-lg md:text-xl font-semibold text-foreground flex items-center gap-2">
                  <span className="text-2xl">👁️</span>
                  {t("preview.title")}
                </h2>
                <Button
                  onClick={handleDownload}
                  className="w-full md:w-auto bg-accent hover:bg-accent/90 text-background gap-2 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
                >
                  <Download size={18} />
                  {t("preview.download")}
                </Button>
              </div>
              <div className="bg-background rounded-lg p-4 flex items-center justify-center max-h-96 md:max-h-[500px] overflow-auto border border-border">
                <img
                  src={processedImage || "/placeholder.svg"}
                  alt="Processed"
                  className="max-w-full max-h-full rounded-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
