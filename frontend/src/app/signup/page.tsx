"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function SignUp() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (password !== cnfPassword) {
      setError("Passwords do not match!");
      setIsLoading(false);
      return;
    }

    if (!name || !username || !password || !cnfPassword) {
      setError("Please fill in all required fields.");
      setIsLoading(false);
      return;
    }

    const validPassword = () => {
      const regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return regex.test(password);
    };

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Sign Up Data:", { name, username, password, cnfPassword });
    alert("Sign Up Successful! (Simulated)");
    setIsLoading(false);
    router.push("/login");
    // In a real app, you'd likely redirect the user
  };

  return (
    <>
      <Navbar />
      <div
        className="min-h-[580px] flex items-center justify-center bg-gradient-to-br from-green-100 via-teal-200 to-green-300"
        style={{
          backgroundImage: "url('/images/bg_image.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="bg-white p-4 rounded-lg shadow-2xl w-96 animate__animated animate__fadeIn"
          style={{
            WebkitBackdropFilter: "blur(10px)",
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
          }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 animate__animated animate__slideInDown text-center">
            Sign Up
          </h2>
          <div className="mb-4 animate__animated animate__slideInLeft animate__delay-1s">
            <button className="bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold py-2 px-4 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out flex items-center justify-center w-full">
              <FcGoogle className="mr-2 text-xl" />
              Sign up with Google
            </button>
          </div>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 animate__animated animate__slideInRight animate__delay-1s"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                placeholder="enter your name"
                className="shadow appearance-none border rounded-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline animate__animated animate__pulse"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="username"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Username (email):
              </label>
              <input
                type="text"
                id="username"
                placeholder="enter your username"
                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline animate__animated animate__pulse animate__delay-100ms"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
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
                placeholder="create your password"
                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline animate__animated animate__pulse animate__delay-200ms"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="cnfPassword"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Confirm Password:
              </label>
              <input
                type="password"
                id="cnfPassword"
                placeholder="confirm your password"
                className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline animate__animated animate__pulse animate__delay-300ms"
                value={cnfPassword}
                onChange={(e) => setCnfPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full transition duration-300 ease-in-out ${
                isLoading
                  ? "animate-pulse cursor-not-allowed"
                  : "animate-jump-in"
              }`}
            >
              {isLoading ? (
                <div className="animate-spin h-5 w-5 mx-auto border-t-2 border-b-2 border-white rounded-full"></div>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>
          {error && (
            <p className="text-red-500 text-sm mt-4 animate__animated animate__shakeX">
              {error}
            </p>
          )}
          <p className="text-center text-gray-600 text-sm mt-4 animate__animated animate__fadeIn animate__delay-2s">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-500 hover:underline transition duration-200 ease-in-out"
            >
              Log In
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
