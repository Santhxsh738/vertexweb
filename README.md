# 🚀 VERTEXWEB - Enterprise Web Development & Digital Solutions

VertexWeb is a next-generation, high-performance web agency platform engineered to deliver robust digital solutions, multi-language experiences, and seamless business workflows.

---

## ✨ Key Features

* **Multi-Language Support**: Fully integrated dictionary system supporting **English, Tamil (தமிழ்), Hindi (हिन्दी), Spanish (Español), French (Français), and German (Deutsch)** with instant UI updates across all pages.
* **Synchronized Dark/Light Theme**: Seamless theme toggling with preference persistence (`localStorage`) synchronized across the entire site.
* **Cinematic Welcome Banner**: Embedded video preview with interactive sound toggle controls (`Mute/Unmute`).
* **Secure Admin Dashboard**: Restricted admin panel protected with secure login credentials (`Sandy` / `Sandy@2006`) and session management.
* **Live Enquiries Sync**: Real-time synchronization between the client `contact.html` form and the admin dashboard using browser `localStorage`.
* **Dynamic Management Tools**: Admin capabilities to monitor enquiries, manage deployed projects, and publish/delete blogs live.
* **Interactive Features**: Instant keyword search modal, PWA simulation button, and smooth scroll-to-top integrations.

---

## 🛠️ Tech Stack

* **Frontend**: HTML5, Modern CSS3 (CSS Variables, Flexbox, Grid), JavaScript (ES6+).
* **Design System**: Custom typography via Google Fonts (*Plus Jakarta Sans* & *Poppins*), responsive components, and fluid dark-mode styling.
* **State & Storage**: Browser `localStorage` and `sessionStorage` for handling authentication states, theme preferences, selected languages, and contact submissions.

---

## 📂 Project Structure

```text
vertex/
│
├── index.html          # Main landing page & agency overview
├── contact.html        # Client contact & project quote form
├── admin.html          # Secure admin dashboard for enquiries & management
├── script.js           # Core JavaScript logic (Multi-language, theme, modals)
├── vertexlogo.png      # Brand circular logo asset
└── welcomevideo.mp4    # Cinematic background video for the welcome banner
