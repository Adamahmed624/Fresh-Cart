<div align="center">

# 🛒 FreshCart

**A responsive e-commerce storefront built with Next.js 16, React 19, and TypeScript — browse by category and brand, save favorites, manage a cart, and sign in securely.**

[**🌐 Live Demo**](https://fresh-cart-eight-alpha.vercel.app/) · [Report Bug](https://github.com/Adamahmed624/Fresh-Cart/issues) · [Request Feature](https://github.com/Adamahmed624/Fresh-Cart/issues)

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&logoColor=white)

</div>

---

## 📸 Preview

<!-- TODO: add a real screenshot / GIF, e.g. ./docs/preview.png -->
![FreshCart Preview](./docs/preview.png)

---

## ✨ Overview

FreshCart is a front-end shopping experience covering fashion, electronics, beauty, home, books, and more. Users can browse products by category and brand, view ratings and discounts, keep a wishlist and cart, and manage their account and saved addresses. Prices are shown in **EGP**.

Product, category, and brand data come from the **Route Academy E-commerce REST API** (`ecommerce.routemisr.com`).

---

## 🚀 Features

- 🏠 **Home** — animated hero slider, category grid, promotional banners, featured products
- 🛍️ **Product catalog** — browse and filter by category
- 🔎 **Product details** — images, price, old price, discount badge, rating
- 🗂️ **Categories & Brands** pages
- ❤️ **Wishlist** and 🧺 **Cart**
- 🔐 **Authentication** with NextAuth (JWT-based sessions)
- 👤 **Profile area** — saved addresses, order history, and account settings
- ✅ **Validated forms** (React Hook Form resolvers + Zod)
- 🔔 Toast and modal feedback (React Toastify, SweetAlert2)
- 📱 Fully responsive layout

---

## 🧱 Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| UI | React 19, Tailwind CSS 4, shadcn/ui, Base UI, Lucide icons |
| Language | TypeScript |
| Data fetching | TanStack React Query |
| Auth | NextAuth v4, jwt-decode |
| Forms & validation | Zod, @hookform/resolvers |
| Animation & sliders | GSAP, Swiper, tw-animate-css |
| Feedback | React Toastify, SweetAlert2 |
| Backend (external) | Route Academy E-commerce API |
| Hosting | Vercel |

---

## 📂 Project Structure

```bash
Fresh-Cart/
├── public/              # Static assets
├── src/                 # Application source (routes, components, services)
├── components.json      # shadcn/ui config
├── next.config.ts       # Image domains + redirects
├── eslint.config.mjs
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

<!-- TODO: expand src/ (app, components, hooks, services, types...) once you confirm the layout -->

---

## ⚙️ Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
git clone https://github.com/Adamahmed624/Fresh-Cart.git
cd Fresh-Cart
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

Create `.env.local` in the project root:

```env
# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-random-secret

# TODO: add the API base URL variable your code actually reads
# e.g. NEXT_PUBLIC_API_URL=https://ecommerce.routemisr.com/api/v1
```

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Create a production build |
| `npm start` | Run the production build |
| `npm run lint` | Lint with ESLint |

---

## 🌍 Deployment

Deployed on **Vercel**. To deploy your own copy, import the repo at [vercel.com/new](https://vercel.com/new) and add the environment variables above (set `NEXTAUTH_URL` to your production domain).

---

## 🗺️ Roadmap

- [ ] Checkout and payment flow
- [ ] Order tracking
- [ ] Search with suggestions
- [ ] Arabic / English with RTL support
- [ ] Unit and end-to-end tests

---

## 🤝 Contributing

1. Fork the repo
2. `git checkout -b feature/your-feature`
3. Commit your changes
4. Push and open a Pull Request

---

## 📄 License

Add a `LICENSE` file (MIT is a common choice) and reference it here.

---

## 👤 Author

**Adam Ahmed** — [@Adamahmed624](https://github.com/Adamahmed624)

---

<div align="center">⭐ If you found this useful, consider giving it a star.</div>