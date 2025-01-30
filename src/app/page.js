export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-5xl font-bold text-cyan-400 drop-shadow-lg mb-6">
        Welcome to Adapt22
      </h1>
      <p className="text-lg text-gray-300 max-w-2xl">
        Adapt22 brings AI automation to service-based businesses. 
        Our goal is to simplify your workflow, save you time, and increase efficiency.
      </p>
      <div className="mt-10">
        <a href="/solutions" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
          See Our Solutions
        </a>
      </div>
    </div>
  );
}
