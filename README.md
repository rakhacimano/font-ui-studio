# Font Scale Generator

A modern, interactive tool for generating beautiful type scales and font hierarchies. Built with Next.js, Tailwind CSS v4, and Three.js.

## 🌟 Features

-   **Type Scale Generation**: Easily calculate font sizes based on modular scales (music intervals, golden ratio, etc.).
-   **Interactive Playground**: Visualize your type scales in real-time.
-   **Modern UI/UX**:
    -   **Pixel Snow Background**: A dynamic, interactive background effect using Three.js.
    -   **Shiny Text Effects**: Eye-catching typography animations.
    -   **Glassmorphism & Gradients**: Sleek, modern design aesthetic.
-   **Component Library**: Reusable components built with Tailwind CSS and Framer Motion.

## 🛠️ Tech Stack

-   **Framework**: [Next.js 15](https://nextjs.org/) (App Directory)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **Animation**: [Framer Motion](https://www.framer.com/motion/)
-   **3D Graphics**: [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
-   **Icons**: [React Iconly](https://github.com/jrgarciadev/react-iconly)
-   **Utils**: `clsx`, `tailwind-merge`

## 🚀 Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/font-scale.git
    cd font-scale
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

4.  **Open [http://localhost:3000](http://localhost:3000)** in your browser to see the app.

## 📂 Project Structure

-   `src/app`: App router pages and layouts.
-   `src/components`: Reusable UI components.
    -   `playground`: Components specific to the interactive playground.
    -   `type-scale`: Components for the font scale logic.
-   `src/hooks`: Custom React hooks (e.g., `useTypeScale`).
-   `src/lib`: Utility functions.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
