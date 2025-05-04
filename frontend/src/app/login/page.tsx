"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!username.trim() || !password.trim()) {
      setError("Please fill all fields.");
      setIsLoading(false);
      return;
    }


    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.role === "admin") {
        router.push("/admin");
      }
      
      if (res.ok) {
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("role", data.role);
        toast.success("Login Successful!");
        setUsername("");
        setPassword("");
        router.push("/");
      } else {
        setError(data.message || "Invalid credentials.");
      }
    } catch {
      setError("An error occurred while trying to login.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="min-h-[585px] flex items-center justify-center bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: "url('/images/bg_image.jpg')" }}
      >
        <div className="w-full max-w-md bg-white/70 backdrop-blur-md border border-white/40 rounded-xl shadow-lg p-8 animate__animated animate__fadeIn">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Login
          </h2>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-full px-4 py-2 hover:bg-gray-100 transition"
          >
            <FcGoogle className="text-xl" />
            Sign in with Google
          </button>

          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <div>
              <label htmlFor="username" className="text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 w-full rounded-full border border-gray-300 px-3 py-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
              />
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type={showPassword? "text": "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full rounded-full border border-gray-300 px-3 py-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
              />
              <button type="button" onClick={()=>setShowPassword(!showPassword)} className="text-sm">
                {showPassword?"Hide":"Show"}
              </button>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="flex justify-between items-center text-sm text-gray-600">
              <a href="/forgot-password" className="hover:underline text-blue-600">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2 px-4 rounded-full font-semibold text-white transition ${
                isLoading
                  ? "bg-blue-400 cursor-not-allowed animate-pulse"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="mt-4 text-sm text-center text-gray-600">
            Don't have an account?{" "}
            <a href="/signup" className="text-green-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
