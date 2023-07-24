This is a **Healthy web app** project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
# or
yarn install
yarn dev
# or
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter and Noto_Sans_JP , a custom Google Font.

## Development Environment

| Operation/ Build Environment | Version |
| ---------------------------- | ------- |
| Node.js                      | 18.16.0 |
| Yarn                         | 1.22.10 |
| NextJS                       | 13.4.10 |
| ReactJS                      | 18.2.0  |
| TailwindCss                  | 3.3.3   |
| Typescript                   | 5.1.6   |

## Authentication

Project uses localStorage to check if the user has logged in or not.

-   When the user has not logged in and tries to access pages that require login, the browser will redirect to the login page.
-   When the user submit login form, sample data will storage in localStorage, the browser will redirect to the '/' page
