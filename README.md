# 🍕 Fast React Pizza Co

A modern, responsive pizza restaurant menu application built with React. This project showcases component-based architecture with dynamic pizza listings, real-time operational status, and an intuitive ordering interface.

<hr/>

🌐**Demo (Live Preview):** <a href="https://ahmed-maher77.github.io/pizza-menu__react-app/" target="_blank" title="Live Demo of Fast React Pizza Co">ahmed-maher77.github.io/pizza-menu\_\_react-app</a>

<hr/>

💻 **Used Technologies:** <br>

- **Frontend:** React 18, JavaScript (ES6+), CSS3
- **Development Tools:** npm, Webpack (via Create React App)
- **Styling:** CSS3 with responsive design
- **Version Control:** Git
- **Other:** React Hooks, Component-based architecture

<hr/>

## 👀 Website Preview:

<a href="https://ahmed-maher77.github.io/pizza-menu__react-app/" target="_blank" title="Live Demo of Fast React Pizza Co">
<img src="https://github.com/user-attachments/assets/d16b4019-dd3b-4246-90b3-0c527e92ba2b" alt="website preview - Demo - UI Mockup" width="400">
</a>

<hr/>

## ✨ Key Features:

- <b>Component-Based Architecture:</b> Modular design with separated, reusable components for Header, Menu, Pizza, Footer, and Order sections.
- <b>Responsive Design:</b> Seamlessly accessible across all devices (mobile, tablet, desktop).
- <b>Dynamic Pizza Listing:</b> Real-time pizza menu display with conditional rendering based on availability.
- <b>Operational Status:</b> Automatic detection of restaurant opening hours with dynamic messaging.
- <b>Order Management:</b> Interactive ordering interface with contextual availability checks.
- <b>Sold-Out Indicators:</b> Clear visual feedback for items that are currently unavailable.
- <b>Clean UI/UX:</b> Professional styling with high contrast colors, clear typography, and smooth interactions.
- <b>Optimized Performance:</b> Efficient rendering and lazy loading techniques for fast load times.
- <b>Accessibility:</b> Semantic HTML and ARIA-compatible structure for screen readers.
- <b>Simple & Elegant Design:</b> Minimalist interface focusing on user experience and navigation.

<hr/>

## 📁 Project Structure:

```
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
│   └── pizzas/
│       ├── focaccia.jpg
│       ├── margherita.jpg
│       ├── spinaci.jpg
│       ├── funghi.jpg
│       ├── salamino.jpg
│       └── prosciutto.jpg
├── src/
│   ├── components/
│   │   ├── Header.js        # Restaurant branding
│   │   ├── Menu.js          # Pizza menu display & data
│   │   ├── Pizza.js         # Individual pizza card component
│   │   ├── Footer.js        # Operating hours & order section
│   │   └── Order.js         # Order call-to-action
│   ├── index.js             # Main app entry point
│   ├── index.css            # Global styles & layout
├── package.json
└── README.md
```

<hr/>

### 📥 Installation Instructions:

To download and run this project locally:

**1. Clone the Repository:**

```bash
git clone https://github.com/Ahmed-Maher77/pizza-menu__react-app.git
cd pizza-menu__react-app
```

**2. Install Dependencies:**

```bash
npm install
```

**3. Start the Development Server:**

```bash
npm start
```

The app will open automatically at `http://localhost:3000`

**4. Build for Production:**

```bash
npm run build
```

<hr/>

## 🎨 Component Overview:

| Component  | Purpose                                                |
| ---------- | ------------------------------------------------------ |
| **App**    | Main container component                               |
| **Header** | Displays restaurant name and branding                  |
| **Menu**   | Renders pizza list with conditional messaging          |
| **Pizza**  | Individual pizza card with image, details, and pricing |
| **Footer** | Shows operating hours and order status                 |
| **Order**  | Call-to-action button when restaurant is open          |

<hr/>

## 🔧 Customization:

- **Update Pizza Data:** Modify the `pizzaData` array in [src/components/Menu.js](src/components/Menu.js)
- **Change Operating Hours:** Edit `openHour` and `closeHour` in [src/components/Footer.js](src/components/Footer.js)
- **Customize Styling:** Update [src/index.css](src/index.css) for colors, fonts, and layouts

<hr/>

## 📬 Contact & Contribution

- 🧑‍💻 **Portfolio:** [https://ahmedmaher-portfolio.vercel.app/](https://ahmedmaher-portfolio.vercel.app/)
- 🔗 **LinkedIn:** [https://www.linkedin.com/in/ahmed-maher-algohary](https://www.linkedin.com/in/ahmed-maher-algohary)
- 📧 **Email:** ahmedmaher.dev1@gmail.com

<hr/>

## ⭐ Support

If you found this project helpful or inspiring, please consider giving it a ⭐. Your support helps us grow and share more projects like this!
