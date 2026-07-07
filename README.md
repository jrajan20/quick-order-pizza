# Quick React Pizza Co.

A fast, minimal pizza ordering web app built with React. Browse the menu, add pizzas to your cart, place an order with optional priority delivery, and track your order by ID — no login required.

---

## Screenshots

### Home

![Home page — enter your name to start ordering]

<img width="1293" height="652" alt="Screenshot From 2026-07-07 06-25-52" src="https://github.com/user-attachments/assets/953b2871-4d68-4354-9698-60dd342fceee" />



### Menu

![Pizza menu with availability indicators]

<img width="1295" height="652" alt="Screenshot From 2026-07-07 06-26-22" src="https://github.com/user-attachments/assets/4f563a8d-7334-4609-8d1e-1dd8759df916" />




### Cart

![Cart page showing items, quantities, and totals]

<img width="1295" height="652" alt="Screenshot From 2026-07-07 06-27-03" src="https://github.com/user-attachments/assets/cad5f6e3-04ea-4f82-b3ba-398ae1743a93" />

### Order Status
![Order page where you enter Delivery details with Geolocate functionality for your address]

<img width="1295" height="652" alt="Screenshot From 2026-07-07 06-58-02" src="https://github.com/user-attachments/assets/af41db1f-16f8-417c-af92-df6b74a54fe8" />



### Order Status

![Order status page with delivery estimate and priority badge]

<img width="1295" height="652" alt="Screenshot From 2026-07-07 06-29-17" src="https://github.com/user-attachments/assets/e7b1a137-be8a-4d78-944d-33fe64749cad" />



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
