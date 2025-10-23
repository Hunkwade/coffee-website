# ☕ Brew Haven - Artisan Coffee Shop Website

A beautiful, modern, and fully responsive coffee shop website built with HTML, CSS, and JavaScript. This project features stunning animations, smooth transitions, and an intuitive user experience.

![Coffee Website](https://img.shields.io/badge/Status-Complete-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

### 🎨 Design & UI

- **Modern & Clean Design** - Professional coffee shop aesthetic with warm color palette
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Eye-catching transitions and scroll-based animations
- **Interactive Elements** - Hover effects, dynamic notifications, and smooth scrolling

### 📱 Sections

1. **Hero Section**

   - Eye-catching hero with call-to-action buttons
   - Parallax scrolling effect
   - Scroll indicator animation

2. **Features Section**

   - 4 key features with animated icons
   - Bouncing icon animations
   - Shimmer effect on hover

3. **About Section**

   - Company story and mission
   - Animated statistics counter
   - Rotating coffee cup illustration

4. **Special Offers**

   - Featured seasonal drinks
   - Limited-time promotions with badges
   - Interactive order buttons with notifications

5. **Menu Section**

   - 9 coffee beverages with ratings
   - Category filtering (All, Hot, Cold, Specialty)
   - Smooth filter animations
   - Pricing and star ratings

6. **Gallery Section**

   - 6 beautiful coffee-themed images
   - Hover overlay effects
   - Zoom animations

7. **Testimonials Section**

   - Customer reviews slider
   - Auto-advancing carousel
   - Manual navigation controls

8. **Newsletter Section**

   - Email subscription form
   - Success notifications
   - Gradient background

9. **Contact Section**

   - Contact information
   - Working contact form
   - Location, hours, and contact details

10. **Footer**
    - Quick links navigation
    - Social media links
    - Company information

### 🚀 Interactive Features

- **Mobile Menu** - Hamburger navigation for mobile devices
- **Menu Filtering** - Filter drinks by category with smooth animations
- **Testimonial Slider** - Auto-advancing carousel with manual controls
- **Order Notifications** - Toast notifications when adding items to order
- **Newsletter Signup** - Email subscription with success feedback
- **Smooth Scrolling** - Seamless navigation between sections
- **Scroll Animations** - Elements fade and slide in on scroll
- **Counter Animations** - Statistics count up when scrolled into view
- **Active Nav Links** - Navigation highlights based on scroll position

## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with:
  - CSS Grid & Flexbox
  - CSS Animations & Transitions
  - CSS Variables for theming
  - Media Queries for responsiveness
- **JavaScript (Vanilla)** - Interactive functionality:
  - DOM manipulation
  - Event listeners
  - Intersection Observer API
  - Dynamic content updates

## 📁 Project Structure

```
loo/
│
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🎯 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required!

### Installation

1. Clone or download this repository
2. Navigate to the project folder
3. Open `index.html` in your web browser

```bash
# If using a local server (optional)
# With Python 3
python -m http.server 8000

# With Node.js (http-server)
npx http-server

# Then open http://localhost:8000
```

That's it! The website is pure HTML, CSS, and JavaScript with no dependencies.

## 🎨 Color Palette

```css
Primary Color:    #6f4e37 (Coffee Brown)
Secondary Color:  #c7a17a (Latte)
Accent Color:     #d4a574 (Caramel)
Dark Color:       #2c1810 (Dark Roast)
Light Color:      #f5f1ed (Cream)
```

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## ✅ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 🔧 Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
  --primary-color: #6f4e37;
  --secondary-color: #c7a17a;
  --accent-color: #d4a574;
  /* ... */
}
```

### Adding Menu Items

Add new items in `index.html` inside the `.menu-grid`:

```html
<div class="menu-item" data-category="hot">
  <div class="menu-icon">☕</div>
  <h3>Your Drink Name</h3>
  <p>Description here</p>
  <div class="menu-meta">
    <span class="price">$X.XX</span>
    <span class="rating">⭐ 5.0</span>
  </div>
</div>
```

### Modifying Animations

Adjust animation timing in `styles.css`:

```css
.menu-item {
  transition: all 0.3s ease; /* Change duration/timing */
}
```

## 📊 Performance

- **Lightweight** - No external dependencies
- **Fast Load** - Optimized CSS and JavaScript
- **Smooth Animations** - 60fps animations using CSS transforms
- **Efficient** - Intersection Observer for scroll animations

## 🎓 Learning Resources

This project demonstrates:

- Semantic HTML5 structure
- Modern CSS layouts (Grid & Flexbox)
- CSS animations and transitions
- JavaScript DOM manipulation
- Event handling
- Intersection Observer API
- Responsive design principles
- Mobile-first approach

## 📝 Future Enhancements

Potential improvements:

- [ ] Shopping cart functionality
- [ ] Online ordering system
- [ ] User authentication
- [ ] Backend integration
- [ ] Real image gallery
- [ ] Map integration for location
- [ ] Dark mode toggle
- [ ] Multi-language support

## 🤝 Contributing

Feel free to fork this project and customize it for your own needs! Some ideas:

- Add more menu items
- Create new sections
- Enhance animations
- Add more interactive features
- Improve accessibility

## 📄 License

This project is open source and available for personal and commercial use.

## 👏 Acknowledgments

- Google Fonts (Playfair Display & Poppins)
- Emoji icons for visual elements
- Modern web standards and best practices

## 📧 Contact

For questions or feedback about this project:

- Website: [Brew Haven Demo]
- Email: hello@brewhaven.com
- Phone: (555) 123-4567

---

**Built with ☕ and passion for great design**

_Last Updated: October 2025_
