# Femi Lion Entertainment Website

**Premium Event Planning & Entertainment Curation**

A modern, responsive website for Femi Lion Entertainment, founded by Dosumu Oluwafemi Samuel.

## ✨ Features

### 🎨 Design & UX
- **Luxury Aesthetic**: Gold and dark theme for premium feel
- **Responsive Design**: Mobile-first approach, works on all devices
- **Modern Animations**: Smooth transitions and engaging effects
- **Accessibility**: WCAG compliant with ARIA labels and semantic HTML
- **Performance**: Optimized CSS and JavaScript

### 📱 Key Sections

1. **Header & Navigation**
   - Fixed header with smooth scrolling
   - Mobile-responsive hamburger menu
   - Quick navigation to all sections

2. **Hero Section**
   - Eye-catching banner with background image
   - Clear value proposition
   - Call-to-action button

3. **About Section**
   - Founder background
   - Three key features (Legal Precision, Creative Excellence, Flawless Delivery)
   - Enhanced visual hierarchy

4. **Services Section**
   - Event Planning
   - Entertainment Curation
   - Detailed feature lists for each service
   - Hover animations

5. **Contact Form**
   - Real-time field validation
   - Error handling and user feedback
   - Success/error messages
   - Accessible form controls

6. **Footer**
   - Social media links
   - Copyright information
   - Responsive layout

## 🛠️ Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Variables, Grid, and Flexbox
- **JavaScript (Vanilla)**: No dependencies
- **Responsive**: Mobile, tablet, and desktop optimized

## 📁 Project Structure

```
femi-lion-entertainment/
├── index.html          # Main HTML file
├── styles.css          # Complete styling
├── script.js           # Form validation and interactivity
└── README.md           # This file
```

## 🚀 Getting Started

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/femilion001/femi-lion-entertainment.git
   cd femi-lion-entertainment
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
   ```bash
   python -m http.server 8000
   # or with Node.js
   npx http-server
   ```

3. **View in browser**
   - Navigate to `http://localhost:8000` (or `http://localhost:3000` for npx)

## 📝 Form Validation

The contact form includes client-side validation for:

- **Name**: Required, 2+ characters, letters and spaces only
- **Email**: Required, valid email format
- **Event Type**: Optional, for context
- **Message**: Required, minimum 10 characters

### Features:
- Real-time validation on blur
- Error messages for invalid fields
- Success feedback after submission
- Visual indicators (borders and colors)
- Accessible form controls with ARIA labels

## ♿ Accessibility Features

✓ Semantic HTML structure  
✓ ARIA labels on form inputs  
✓ Role attributes for status messages  
✓ Keyboard navigation support  
✓ Color contrast compliance  
✓ Focus indicators  
✓ Prefers-reduced-motion support  
✓ Alt text on images  
✓ Proper heading hierarchy  

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 769px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🎨 Color Scheme

- **Gold (Primary)**: `#D4AF37`
- **Dark (Background)**: `#111111`
- **Grey (Sections)**: `#222222`
- **Light (Text)**: `#f4f4f4`
- **Error**: `#ff6b6b`
- **Success**: `#51cf66`

## 🔧 Customization

### Update Contact Information
Edit the social links in the footer section of `index.html`:
```html
<a href="https://instagram.com/yourprofile" target="_blank">Instagram</a>
```

### Change Colors
Modify CSS variables in `styles.css`:
```css
:root {
    --gold: #D4AF37;
    --dark: #111111;
    /* ... */
}
```

### Update Content
Edit text directly in the HTML sections:
- Hero headline and description
- About section text
- Service descriptions
- Footer information

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### GitHub Pages
1. Push to GitHub
2. Go to repository Settings
3. Enable GitHub Pages from the `main` branch
4. Your site will be live at `https://femilion001.github.io/femi-lion-entertainment`

### Other Hosting Options
- Netlify (drag and drop)
- Vercel
- Firebase Hosting
- Any web server supporting static files

## 📧 Form Submission Integration

Currently, the form logs data to the console. To enable actual email delivery:

1. **Option 1: Formspree**
   - Update form action: `action="https://formspree.io/f/YOUR_FORM_ID"`
   - Remove `novalidate` attribute if using Formspree validation

2. **Option 2: EmailJS**
   - Install via CDN
   - Update script.js with your EmailJS credentials

3. **Option 3: Custom Backend**
   - Create API endpoint on your server
   - Update fetch call in script.js

## 📄 License

All Rights Reserved © 2026 Femi Lion Entertainment

## 👤 Contact

Managed by: Dosumu Oluwafemi Samuel

---

**Last Updated**: July 2026  
**Version**: 1.0.0
