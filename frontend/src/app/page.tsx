"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Landing from "./landing/page";

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen flex flex-col max-w-screen">
      <Navbar />
      <section>
        <Landing />
      </section>
      <Footer />
    </main>
  );
}