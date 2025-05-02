"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

export default function Login() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!username || !password) {
      setError("Please fill all fields.");
      setIsLoading(false);
      return;
    }

    try{
      const res = await fetch("http://localhost:5000/login",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),

      });
      const data = await res.json();
      if(res.ok){
        localStorage.setItem("authToken", data.token);
        toast.success("Login Successful!");
        router.push("/");
      }else{
        setError(data.message || "Invalid credentials.");
      }
    }
    catch(err){
      setError("An error occurred while trying to login.");
    }finally{
      setIsLoading(false);
    }
  }

  return (
    <>
    <Navbar />
    <div
      className="min-h-[585px] flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-200 to-blue-300 "
      style={{
        backgroundImage: "url('/images/bg_image.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="bg-transparent p-8 rounded-lg shadow-xl w-96 animate__animated animate__fadeIn"
        style={{
          WebkitBackdropFilter: "blur(10px)",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          // boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
        }}
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 animate__animated animate__slideInDown">
          Login
        </h2>
        <div className="mb-4 animate__animated animate__slideInLeft animate__delay-1s">
          <button className="bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold py-2 px-4 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out flex items-center justify-center w-full">
            <FcGoogle className="mr-2 text-xl" />
            Sign in with Google
          </button>
        </div>
        <form
          onSubmit={handleLogin}
          className="space-y-4 animate__animated animate__slideInRight animate__delay-1s"
        >
          <div>
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline animate__animated animate__pulse"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline animate__animated animate__pulse animate__delay-100ms"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-600 text-sm animate__animated animate__fadeIn animate__delay-2s">
              Forgot your password?{" "}
              <a
                href="/forgot-password"
                className="text-blue-500 hover:underline transition duration-200 ease-in-out"
              >
                Reset Password
              </a>
            </p>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full transition duration-300 ease-in-out ${
              isLoading ? "animate-pulse cursor-not-allowed" : "animate-jump-in"
            }`}
          >
            {isLoading ? (
              <div className="animate-spin h-5 w-5 mx-auto border-t-2 border-b-2 border-white rounded-full"></div>
            ) : (
              "Login"
            )}
          </button>
        </form>
        {error && (
          <p className="text-red-500 text-sm mt-4 animate__animated animate__shakeX">
            {error}
          </p>
        )}
        <p className="text-center text-gray-600 text-sm mt-4 animate__animated animate__fadeIn animate__delay-2s">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-green-500 hover:underline transition duration-200 ease-in-out"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
    <Footer />
    </>
  );
}
