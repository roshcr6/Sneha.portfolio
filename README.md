# Portfolio - Modern Interactive 3D Website

A cutting-edge developer portfolio featuring 3D graphics, smooth animations, and a retro-futuristic aesthetic.

## 🚀 Features

- **3D Interactive Background**: Three.js powered animated 3D elements
- **Smooth Animations**: Framer Motion for fluid transitions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Stack**: Next.js 14, TypeScript, React
- **Performance Optimized**: Static export, lazy loading, optimized assets
- **Retro-Gaming Theme**: Neon colors, glassmorphism, dynamic effects

## 📋 Sections

- **Hero**: Animated introduction with social links and CV download
- **Projects**: Featured work with GitHub and live demo links
- **Skills**: Technical expertise with proficiency indicators
- **Experience**: Professional timeline and education
- **Contact**: Interactive form and social connections

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📦 Installation

```powershell
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section**: Edit `components/Hero.tsx`
   - Update name, role, and tagline
   - Change social media links
   - Update email address

2. **Projects**: Edit `data/projects.ts`
   - Add/remove projects
   - Update GitHub and demo links
   - Modify tech stacks

3. **Skills**: Edit `data/skills.ts`
   - Update skill categories
   - Adjust proficiency levels
   - Add new technologies

4. **Experience**: Edit `data/experience.ts`
   - Update work history
   - Modify education details
   - Add achievements

5. **Contact**: Edit `components/Contact.tsx`
   - Update email and social links
   - Customize contact form

### Styling

- **Colors**: Edit `tailwind.config.ts` to change color scheme
- **Animations**: Modify `app/globals.css` for custom animations
- **3D Elements**: Edit `components/ThreeBackground.tsx`

## 🌐 Deployment

### Vercel (Recommended)

```powershell
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `out`

### GitHub Pages

```powershell
# Build static export
npm run build

# Deploy the `out` folder
```

## 📝 To-Do Before Launch

- [ ] Add your professional photo
- [ ] Update GitHub URL (currently: `https://github.com/yourusername`)
- [ ] Update LinkedIn URL (currently: `https://linkedin.com/in/yourusername`)
- [ ] Update email address (currently: `your.email@example.com`)
- [ ] Add project screenshots to `/public/projects/`
- [ ] Place your CV in `/public/CV.pdf`
- [ ] Test contact form integration
- [ ] Add Google Analytics (optional)

## 📄 License

MIT License - feel free to use this template for your portfolio.

---

**Built with ❤️ using Next.js, Three.js, and Tailwind CSS**
