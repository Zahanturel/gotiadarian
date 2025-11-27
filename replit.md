# Goti Adarian - Parsi-Zoroastrian Cultural Website

## Overview
This is a complete static HTML/CSS/JavaScript website for the Goti Adarian fire temple, a sacred space for the Parsi-Zoroastrian community in Surat, Gujarat, India. The website preserves and showcases the ancient wisdom, traditions, and cultural heritage of the Parsi-Zoroastrian faith.

## Project Type
- **Frontend**: Static HTML/CSS/JavaScript website
- **Backend**: None (static site served via Python HTTP server)
- **Database**: None
- **Framework**: Pure vanilla JavaScript, no build system required

## Current State
✅ Fully functional and ready to use
- Website is live and accessible on port 5000
- All pages load correctly with proper navigation
- Bilingual support (English/Gujarati) working
- Mobile-responsive design implemented
- Forms and interactive elements functional

## Architecture

### Pages Structure
```
/                          - Home page with hero slider
/pages/about.html          - Comprehensive History section, heritage timeline, and Varasiaji
/pages/community.html      - Events calendar and programs
/pages/zoroastrianism.html - Core beliefs and teachings
/pages/rituals.html        - Sacred ceremonies and day-to-day rituals
/pages/trustees.html       - Board of Trustees profiles and Panthaky
/pages/donate.html         - Razorpay-integrated donation page (red theme, Rupee currency)
/pages/contact.html        - Contact information and forms
/pages/education.html      - Learning resources (not in navigation)
/pages/news.html           - Community updates (not in navigation)
```

### Tech Stack
- **HTML5**: Semantic markup
- **CSS3**: Custom styling with CSS variables for theming
- **Vanilla JavaScript**: No frameworks or dependencies
- **Python 3.12**: Simple HTTP server for serving static files
- **Fonts**: Google Fonts (Playfair Display, Open Sans)
- **Icons**: Font Awesome 6.4.0
- **Payment Gateway**: Razorpay Checkout (client-side integration)

### Key Features
1. **Multi-page Navigation**: Separate HTML pages for each section
2. **Bilingual Support**: English and Gujarati language toggle
3. **Responsive Design**: Mobile-first approach
4. **Interactive Elements**:
   - Mobile hamburger menu
   - Hero image slider (home page)
   - Razorpay payment integration with UPI, cards, net banking, wallets
   - Contact form with validation
   - Smooth scrolling navigation
5. **Cultural Elements**:
   - Faravahar symbols throughout
   - Traditional color scheme (gold #c8860d, dark blue #2d4a5a)
   - Festival calendar with authentic dates
   - Sacred ceremony information
   - Comprehensive 600-700 year temple history with three origin theories

### Color Scheme
- Primary: `#c8860d` (Golden yellow)
- Secondary: `#2d4a5a` (Dark blue-gray)
- Accent: `#8b0000` (Dark red for donate page)
- Background: `#f6f5f0` (Light cream)

## Recent Changes
- **2025-11-27**: Comprehensive Content Updates
  - Updated trustee designations (Tehmuras Modi as President, Zawareh Wadia as Managing Trustee)
  - Fixed Panthaky section: removed "(Head Priest)" text, updated 8-generation Turel lineage
  - Moved Varasiaji section from Trustees to About page (after history section)
  - Fixed Khojeste Mistry designation to "Religious Scholar" on home page
  - Enhanced Donate page: added PAN field with validation (mandatory for donations >₹10,000)
  - Added bank account details placeholder section on Donate page
  - Updated Rituals page with comprehensive Day-to-Day Rituals section (Machi, Afargan, Farokshi, Jashan, Fareshta, Yazashne, Vandidad, Boi)
  - Updated prayer schedule timings (Ushahin Gah to 5:30am)
  - Fixed temple address across all pages: added "7/1381", changed "Variyadi" to "Variali"
  - Updated all Google Maps links with correct address
- **2025-11-25**: Trustees Page Updates and Photos
  - Added Ryan Modi as a new trustee (6 trustees total now)
  - Updated all trustee photos:
    - Ryan Modi (new photo added)
    - Dr. Sarosh Bhacca (photo added)
    - Gul Palia (photo added)
    - Yasmin Dotiwala (photo added)
  - Updated Varasiaji section with actual photo of Vaspaan (sacred cow)
  - All photos optimized and displaying correctly in circular frames
- **2025-11-25**: Replit Environment Setup (GitHub Import)
  - Successfully configured Python 3.12 HTTP server on port 5000
  - Set up workflow "Start application" with webview output type
  - Configured static deployment targeting current directory
  - Verified all pages load correctly (home, about, donate, trustees, etc.)
  - Confirmed cache-control headers working properly
  - Website fully functional with bilingual support and responsive design
- **2025-11-12**: Major content restructuring and payment integration
  - Removed Education and News from navigation across all pages
  - Added "Our Trustees" link to main navigation
  - Restructured About page: added comprehensive "History of Shri Pak Goti Adariyan Saheb" section before timeline
  - Removed Temple Features section from About page
  - Created new Trustees page with 5 trustee profiles (2 with photos: Tehmuras Modi, Zawareh Wadia)
  - Added Panthaky section (Er. Meherzad Turel) and Varasiaji section (Meet Vaspaan) to Trustees page
  - Integrated Razorpay Checkout payment gateway on Donate page
  - Payment gateway supports UPI, cards, net banking, and wallets (requires Razorpay API Key ID)
- **2025-10-17**: Initial Replit setup
  - Created Python HTTP server with cache control headers
  - Set up workflow to serve website on port 5000
  - Added .gitignore for Replit environment
  - Verified all pages load correctly

## Setup Instructions

### Development
The website is automatically served by the Python HTTP server configured in the workflow.
- Server runs on: `http://0.0.0.0:5000`
- No build process required
- Changes to HTML/CSS/JS are immediately visible after browser refresh

### File Structure
```
/
├── index.html              # Home page
├── server.py              # Python HTTP server
├── assets/
│   ├── faravahar.png      # Faravahar symbol
│   ├── goti.png          # Temple image
│   └── images/           # Trustee photos
│       ├── tehmuras-modi.png
│       └── zawareh-wadia.png
├── css/
│   └── styles.css        # All styles
├── js/
│   └── main.js          # All JavaScript
├── pages/
│   ├── about.html        # History section and timeline
│   ├── community.html    # Events and programs
│   ├── zoroastrianism.html # Core beliefs
│   ├── rituals.html      # Sacred ceremonies
│   ├── trustees.html     # NEW: Trustees profiles
│   ├── donate.html       # Razorpay payment integration
│   ├── contact.html      # Contact information
│   ├── education.html    # (Not in navigation)
│   └── news.html         # (Not in navigation)
└── replit.md            # This file
```

## Contact Information
- **Temple Address**: 7/1381, 6R4C+MGF, Variyavi Bhagol, Variali Bazar, Dhastipura, Surat, Gujarat 395003, India
- **Phone**: +91 7573013336
- **Alternative**: +91 9727760344 / +91 7573013330
- **Email**: turelzahan10@gmail.com (for contact form)
- **Hours**: Open 24/7, 365 days a year

## User Preferences
None specified yet.

## Notes
- This is a static website with no backend processing
- Razorpay integration uses secure client-side Checkout (requires API Key ID to be configured)
- Contact form currently shows confirmation dialog (can be integrated with backend later)
- All content is authentic and specific to Goti Adarian temple
- Website uses external CDN resources (Google Fonts, Font Awesome, Razorpay Checkout)
- Education and News pages still exist in codebase but are removed from navigation
