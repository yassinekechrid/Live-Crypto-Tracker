# 🪙 Next-Gen 3D Crypto Market Tracker

A premium, high-fidelity cryptocurrency tracking dashboard built with modern JavaScript and advanced Spatial UI design patterns. This application connects to live market infrastructure to stream real-time asset pricing, utilizing client-side state management to dynamically analyze and visualize market fluctuations.

![Dashboard Preview](screenshot.png)

---

## 🚀 Key Features

* **Real-Time Data Syncing:** Architecture built on asynchronous JavaScript (`async/await`) fetching live token data from external market APIs.
* **Persistent State Management:** Automatically tracks and remembers historical price metrics across sessions using browser `localStorage` optimization.
* **Spatial UI & 3D Parallax:** An immersive user experience featuring a floating glassmorphic container operating on a simulated 3D camera lens (`perspective: 1000px`).
* **Automated Data Pooling:** Integrated background polling interval that silently refreshes asset valuations without causing client-side layout flashing.
* **Dynamic Delta Styling:** Advanced conditional logic that tracks price movements down to the decimal and transforms the interface theme (Growth vs. Correction) instantly.

---

## 🛠️ Tech Stack & Architecture

* **Frontend Structure:** Semantic HTML5
* **Styling & Physics:** Advanced CSS3 (Glassmorphic variables, Custom `@keyframes` timelines, CSS 3D Transforms)
* **Logic Engine:** Vanilla JavaScript (ES6+, Asynchronous Fetch API, State Cache, Interval Timers)
* **Data Provider:** CoinGecko Core Market API

---

## 📦 Local Installation & Setup

**Clone the Repository:**
   ```bash
   git clone [https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git](https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git)
