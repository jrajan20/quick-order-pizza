# Fast React Pizza Co.

A fast, minimal pizza ordering web app built with React. Browse the menu, add pizzas to your cart, place an order with optional priority delivery, and track your order by ID — no login required.

---

## Screenshots

### Home

![Home page — enter your name to start ordering](screenshots/home.png)

### Menu

![Pizza menu with availability indicators](screenshots/menu.png)

### Cart

![Cart page showing items, quantities, and totals](screenshots/cart.png)

### Order Status

![Order status page with delivery estimate and priority badge](screenshots/order-status.png)

---

## Features

- **Browse the menu** — fetched live from the restaurant API, with sold-out items clearly marked
- **Cart management** — add, remove, and adjust quantities directly from the menu or cart page
- **Place an order** — submit your name, address, and phone number; optionally mark as priority for a surcharge
- **GPS location** — auto-fill your address using the browser's Geolocation API (via reverse geocoding)
- **Order lookup** — search any order by its ID to view status and estimated delivery time
- **Mark as priority** — upgrade an existing order to priority after it has been placed

---

## Tech Stack

| Layer            | Technology                                                      |
| ---------------- | --------------------------------------------------------------- |
| UI               | [React 18](https://react.dev/)                                  |
| Routing          | [React Router v6](https://reactrouter.com/) (loaders & actions) |
| State management | [Redux Toolkit](https://redux-toolkit.js.org/)                  |
| Styling          | [Tailwind CSS v3](https://tailwindcss.com/)                     |
| Build tool       | [Vite](https://vitejs.dev/)                                     |
| API              | REST — `react-fast-pizza-api.jonas.io`                          |
| Geocoding        | `api.bigdatacloud.net` reverse-geocoding                        |

---

## Project Structure

```
src/
├── features/
│   ├── cart/        # Cart slice, cart page, item controls
│   ├── menu/        # Menu page and individual menu items
│   ├── order/       # Create order, order detail, order search, priority update
│   └── user/        # User name slice and display
├── services/        # API calls (restaurant + geocoding)
├── ui/              # Shared layout, header, buttons, loader, error
└── utils/           # Formatting helpers (currency, dates)
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build
```

The app runs at `http://localhost:5173` by default.
