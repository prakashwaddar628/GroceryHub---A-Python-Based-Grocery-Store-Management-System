"use client";

export default function Footer() {
  return (
    <footer className="bg-white border-t shadow-sm mt-10 sticky bottom-0">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col items-center justify-between sm:flex-row">
        <div className="text-black font-semibold text-2xl flex items-center mb-4 sm:mb-0">
          <span className="text-green-500 font-bold">G</span>rocery
          <span className="text-fuchsia-800 font-bold">HUB</span>
        </div>
        <p className="text-gray-600 text-sm text-center sm:text-right">
          &copy; {new Date().getFullYear()} Grocery Hub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
