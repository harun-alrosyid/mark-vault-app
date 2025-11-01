# MarkVault - Professional Image Protection Tool

MarkVault is a professional image protection application that helps photographers, content creators, and businesses safeguard their visual assets with intelligent watermarking and image processing capabilities.

## 🌟 Features

- **Permanent Watermark Protection** - Watermarks are permanently embedded in images and cannot be removed
- **Black & White Conversion** - Convert images to stunning black and white with professional quality
- **Custom Watermark Patterns** - Create diagonal watermark patterns with full customization options
- **Client-Side Processing** - All processing happens on your device; images never leave your computer
- **Lightning Fast** - Instant image processing with optimized technology
- **Multi-Language Support** - Available in 8 languages: English, Indonesian, Japanese, Chinese, Spanish, French, Korean, and Vietnamese
- **100% Secure** - No data is stored on servers; complete privacy guaranteed

## 🚀 Live Demo

Visit the live application: [MarkVault Production](https://markvault.harunalrosyid.com)

## 📋 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/markvault.git
   cd markvault
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎯 How to Use

### Basic Workflow

1. **Upload Image** - Click the upload area or drag and drop your image (JPG, PNG, GIF, WebP, SVG)
2. **Configure Watermark** - Enter watermark text and customize appearance (font size, color, opacity)
3. **Adjust Pattern** - Set gap spacing, rotation angle, and position offsets
4. **Apply Effects** - Optionally convert to black and white
5. **Download** - Download your protected image with permanently embedded watermarks

### Watermark Customization

- **Text**: Enter your copyright symbol, name, website URL, or company name
- **Font Size**: 12px - 72px (recommended: 32px)
- **Color**: Choose any color; white works best on most images
- **Opacity**: 20-40% recommended for visible protection without obscuring content
- **Gap**: 50-300px spacing between watermarks
- **Rotation**: -90° to 90° (classic diagonal: -45°)
- **Offset**: Fine-tune X and Y positioning

## 🛠️ Technology Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Image Processing**: HTML5 Canvas API
- **Internationalization**: Custom i18n system with 8 languages

## 📁 Project Structure

```
markvault/
├── app/
│ ├── layout.tsx # Root layout with theme and language providers
│ ├── page.tsx # Main application page
│ └── globals.css # Global styles and design tokens
├── components/
│ ├── image-editor.tsx # Image editing with watermark and B&W conversion
│ ├── image-uploader.tsx # Image upload component
│ ├── landing-page.tsx # Landing page with features and contact form
│ ├── learn-more.tsx # Tutorial and documentation page
│ ├── language-provider.tsx # Multi-language support
│ ├── theme-provider.tsx # Dark/light theme support
│ └── ui/ # shadcn/ui components
├── hooks/
│ ├── use-mobile.tsx # Mobile detection hook
│ └── use-toast.ts # Toast notifications hook
├── lib/
│ └── utils.ts # Utility functions
└── public/ # Static assets
```

## 🎨 Design System

### Color Palette

- **Primary**: Blue (#3e3e3e in dark mode)
- **Accent**: Purple/Pink/Red gradients
- **Background**: Dark (#0a0a0a) / Light (#f8f8f8)
- **Text**: White / Dark gray

### Typography

- **Headings**: Geist Sans (bold)
- **Body**: Geist Sans (regular)
- **Monospace**: Geist Mono

## 🌍 Supported Languages

1. English (en)
2. Bahasa Indonesia (id)
3. 日本語 (ja)
4. 中文 (zh)
5. Español (es)
6. Français (fr)
7. 한국어 (ko)
8. Tiếng Việt (vi)

## 📚 Best Practices

### For Photographers

- Use your name or copyright symbol as watermark text
- Set opacity to 30% for professional appearance
- Use -45° rotation for classic diagonal pattern
- Adjust gap based on image size (100-150px for standard photos)

### For Content Creators

- Include your website URL or social media handle
- Use 40px font size for visibility
- Set gap to 100px for balanced coverage
- Convert to black and white for artistic effect

### For Businesses

- Use company name or logo text
- Set opacity to 25% for subtle branding
- Use custom colors matching brand guidelines
- Adjust spacing for consistent brand presence

## 🔒 Security & Privacy

- **No Server Storage**: All image processing happens in your browser
- **No Data Collection**: We don't collect or store any user data
- **Permanent Watermarks**: Watermarks are embedded at the pixel level and cannot be removed
- **Offline Capable**: Works completely offline after initial load

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Your app will be live at `https://your-project.vercel.app`

### Environment Variables

No environment variables are required for basic functionality. All processing is client-side.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For questions, feedback, or support, please contact us through the contact form on the landing page or email hello@harunalrosyid.com

---

**MarkVault** - Professional Image Protection for Everyone © 2025
