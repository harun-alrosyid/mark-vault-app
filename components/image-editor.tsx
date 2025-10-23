"use client"

import { useState, useRef, useEffect } from "react"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/components/language-provider"

interface ImageEditorProps {
  image: string
  onProcessed: (image: string) => void
}

export default function ImageEditor({ image, onProcessed }: ImageEditorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isBlackWhite, setIsBlackWhite] = useState(false)
  const [watermarkText, setWatermarkText] = useState("© 2025")
  const [watermarkOpacity, setWatermarkOpacity] = useState(0.3)
  const [watermarkSize, setWatermarkSize] = useState(32)
  const [watermarkColor, setWatermarkColor] = useState("#ffffff")
  const [watermarkGap, setWatermarkGap] = useState(100)
  const [watermarkRotation, setWatermarkRotation] = useState(-45)
  const [watermarkOffsetX, setWatermarkOffsetX] = useState(0)
  const [watermarkOffsetY, setWatermarkOffsetY] = useState(0)
  const [showWatermark, setShowWatermark] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    processImage()
  }, [
    isBlackWhite,
    watermarkText,
    watermarkOpacity,
    watermarkSize,
    watermarkColor,
    watermarkGap,
    watermarkRotation,
    watermarkOffsetX,
    watermarkOffsetY,
    showWatermark,
  ])

  const processImage = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const img = new Image()
    img.crossOrigin = "anonymous"
    img.onload = () => {
      canvas.width = img.width
      canvas.height = img.height

      ctx.drawImage(img, 0, 0)

      if (isBlackWhite) {
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
        const data = imageData.data

        for (let i = 0; i < data.length; i += 4) {
          const gray = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114
          data[i] = gray
          data[i + 1] = gray
          data[i + 2] = gray
        }

        ctx.putImageData(imageData, 0, 0)
      }

      if (showWatermark && watermarkText) {
        ctx.save()
        ctx.globalAlpha = watermarkOpacity
        ctx.font = `bold ${watermarkSize}px Arial`
        ctx.fillStyle = watermarkColor
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"

        ctx.shadowColor = "rgba(0, 0, 0, 0.5)"
        ctx.shadowBlur = 4
        ctx.shadowOffsetX = 2
        ctx.shadowOffsetY = 2

        ctx.translate(canvas.width / 2 + watermarkOffsetX, canvas.height / 2 + watermarkOffsetY)
        ctx.rotate((watermarkRotation * Math.PI) / 180)
        ctx.translate(-canvas.width / 2 - watermarkOffsetX, -canvas.height / 2 - watermarkOffsetY)

        const diagonal = Math.sqrt(canvas.width ** 2 + canvas.height ** 2)

        for (let x = -diagonal; x < diagonal; x += watermarkGap) {
          for (let y = -diagonal; y < diagonal; y += watermarkGap) {
            ctx.fillText(watermarkText, x, y)
          }
        }

        ctx.restore()
      }

      const processedImage = canvas.toDataURL("image/png")
      onProcessed(processedImage)
    }
    img.src = image
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="bw" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-background border border-border rounded-lg p-1">
          <TabsTrigger
            value="bw"
            className="rounded-md data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white transition-all"
          >
            {t("tab.bw")}
          </TabsTrigger>
          <TabsTrigger
            value="watermark"
            className="rounded-md data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white transition-all"
          >
            {t("tab.watermark")}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="bw" className="space-y-4 mt-4">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={isBlackWhite}
              onChange={(e) => setIsBlackWhite(e.target.checked)}
              className="w-5 h-5 rounded cursor-pointer accent-blue-500"
            />
            <span className="text-foreground font-medium group-hover:text-blue-500 transition-colors">
              {t("bw.label")}
            </span>
          </label>
        </TabsContent>

        <TabsContent value="watermark" className="space-y-4 mt-4">
          <label className="flex items-center gap-3 cursor-pointer group mb-4">
            <input
              type="checkbox"
              checked={showWatermark}
              onChange={(e) => setShowWatermark(e.target.checked)}
              className="w-5 h-5 rounded cursor-pointer accent-blue-500"
            />
            <span className="text-foreground font-medium group-hover:text-blue-500 transition-colors">
              {t("watermark.label")}
            </span>
          </label>

          {showWatermark && (
            <div className="space-y-5 bg-background/50 rounded-lg p-4 border border-border">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t("watermark.text")}</label>
                <input
                  type="text"
                  value={watermarkText}
                  onChange={(e) => setWatermarkText(e.target.value)}
                  className="w-full bg-background border border-border rounded-lg px-3 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="© 2025"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  {t("watermark.fontSize")}: <span className="text-blue-500 font-semibold">{watermarkSize}px</span>
                </label>
                <Slider
                  value={[watermarkSize]}
                  onValueChange={(value) => setWatermarkSize(value[0])}
                  min={12}
                  max={72}
                  step={1}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-3">{t("watermark.color")}</label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={watermarkColor}
                    onChange={(e) => setWatermarkColor(e.target.value)}
                    className="w-12 h-10 rounded-lg cursor-pointer border-2 border-border hover:border-blue-500 transition-colors"
                  />
                  <span className="text-foreground text-sm font-mono">{watermarkColor}</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  {t("watermark.opacity")}:{" "}
                  <span className="text-blue-500 font-semibold">{Math.round(watermarkOpacity * 100)}%</span>
                </label>
                <Slider
                  value={[watermarkOpacity]}
                  onValueChange={(value) => setWatermarkOpacity(value[0])}
                  min={0}
                  max={1}
                  step={0.1}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  {t("watermark.gap")}: <span className="text-blue-500 font-semibold">{watermarkGap}px</span>
                </label>
                <Slider
                  value={[watermarkGap]}
                  onValueChange={(value) => setWatermarkGap(value[0])}
                  min={50}
                  max={300}
                  step={10}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  {t("watermark.rotation")}: <span className="text-blue-500 font-semibold">{watermarkRotation}°</span>
                </label>
                <Slider
                  value={[watermarkRotation]}
                  onValueChange={(value) => setWatermarkRotation(value[0])}
                  min={-90}
                  max={90}
                  step={1}
                  className="w-full"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    {t("watermark.offsetX")}: <span className="text-blue-500 font-semibold">{watermarkOffsetX}px</span>
                  </label>
                  <Slider
                    value={[watermarkOffsetX]}
                    onValueChange={(value) => setWatermarkOffsetX(value[0])}
                    min={-200}
                    max={200}
                    step={10}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    {t("watermark.offsetY")}: <span className="text-blue-500 font-semibold">{watermarkOffsetY}px</span>
                  </label>
                  <Slider
                    value={[watermarkOffsetY]}
                    onValueChange={(value) => setWatermarkOffsetY(value[0])}
                    min={-200}
                    max={200}
                    step={10}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 mt-4">
                <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">💡 {t("watermark.note")}</p>
              </div>
            </div>
          )}
        </TabsContent>
      </Tabs>

      <canvas ref={canvasRef} className="hidden" />
    </div>
  )
}
