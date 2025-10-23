"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Upload, AlertCircle } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

interface ImageUploaderProps {
  onImageSelect: (image: string) => void
}

export default function ImageUploader({ onImageSelect }: ImageUploaderProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { t } = useLanguage()

  const handleFile = (file: File) => {
    setError(null)

    // Validate file type
    const validImageTypes = ["image/jpeg", "image/png", "image/gif", "image/webp", "image/svg+xml"]
    if (!validImageTypes.includes(file.type)) {
      setError(t("upload.error.invalidType") || "Please select a valid image file (JPG, PNG, GIF, WebP, SVG)")
      return
    }

    // Validate file size (max 10MB)
    const maxSize = 10 * 1024 * 1024
    if (file.size > maxSize) {
      setError(t("upload.error.fileTooLarge") || "File size must be less than 10MB")
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      const result = e.target?.result as string
      onImageSelect(result)
    }
    reader.onerror = () => {
      setError(t("upload.error.readFailed") || "Failed to read file")
    }
    reader.readAsDataURL(file)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file) handleFile(file)
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) handleFile(file)
  }

  return (
    <div className="flex flex-col gap-4">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`border-2 border-dashed rounded-lg p-8 md:p-12 text-center cursor-pointer transition-all duration-200 ${
          isDragging
            ? "border-blue-500 bg-blue-500/10 scale-105"
            : "border-border hover:border-blue-400 bg-background/50 hover:bg-background/80"
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png,image/gif,image/webp,image/svg+xml"
          onChange={handleFileSelect}
          className="hidden"
        />
        <Upload
          className={`mx-auto mb-3 transition-colors ${isDragging ? "text-blue-500" : "text-muted-foreground"}`}
          size={40}
        />
        <p className="text-foreground font-semibold text-base md:text-lg">{t("upload.drag")}</p>
        <p className="text-muted-foreground text-sm mt-2">{t("upload.click")}</p>
      </div>

      {error && (
        <div className="flex items-center gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/30">
          <AlertCircle size={20} className="text-red-500 flex-shrink-0" />
          <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
        </div>
      )}
    </div>
  )
}
