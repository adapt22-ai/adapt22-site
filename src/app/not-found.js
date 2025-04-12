// src/app/not-found.js

export default function NotFound() {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-white text-gray-900">
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-lg text-center max-w-xl">
          Sorry, we couldn’t find what you were looking for. Please check the URL or return to the homepage.
        </p>
      </div>
    );
  }