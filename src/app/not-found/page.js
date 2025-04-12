// src/app/not-found.js

export default function NotFound() {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-white text-gray-900">
        <h1 className="text-5xl font-extrabold text-primary mb-6">404 — Page Not Found</h1>
        <p className="text-lg max-w-xl">
          Sorry, we couldn’t find what you were looking for. Double-check the URL or go back to the homepage.
        </p>
      </div>
    );
  }