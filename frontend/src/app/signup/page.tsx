"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

export default function SignUp() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
      setError(null);

      // Validate input
      if (!name || !username || !password || !cnfPassword) {
        setError("Please fill in all required fields.");
        setIsLoading(false);
        return;
      }

      if (password !== cnfPassword) {
        setError("Passwords do not match!");
        setIsLoading(false);
        return;
      }

      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            username,
            password,
            confirm_password: cnfPassword,
          }),
        });

        const text = await res.text();
        console.log("Response Text:", text);

        let data;
        try {
          data = JSON.parse(text);
        } catch (err) {
          data = { message: "Failed to parse server response" };
        }

        if (!res.ok) {
          setError(data.detail || data.message || "Failed to sign up.");
          toast.error(data.message || "Failed to sign up.");
          return;
        }

        toast.success("Sign Up Successful!");

        // Optional: Store token if returned
        if (data.token) {
          localStorage.setItem("authToken", data.token);
        }

        setName("");
        setUsername("");
        setPassword("");
        setCnfPassword("");
        router.push("/login");
      } catch (error: any) {
        setError(error.message || "An error occurred.");
        toast.error(error.message || "An error occurred.");
      } finally {
        setIsLoading(false);
      }
    },
    [name, username, password, cnfPassword, router]
  );

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
            boxShadow:
              "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
          }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Sign Up
          </h2>

          <div className="mb-4">
            <button className="bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold py-2 px-4 rounded-full shadow-sm w-full flex items-center justify-center">
              <FcGoogle className="mr-2 text-xl" />
              Sign up with Google
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-bold mb-2">
                Name:
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="border rounded-full w-full py-2 px-4 text-gray-700 focus:outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-bold mb-2"
              >
                Username (Email):
              </label>
              <input
                type="email"
                id="username"
                placeholder="Enter your email"
                className="border rounded-full w-full py-2 px-4 text-gray-700 focus:outline-none"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-bold mb-2"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                placeholder="Create your password"
                className="border rounded-full w-full py-2 px-4 text-gray-700 focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="cnfPassword"
                className="block text-sm font-bold mb-2"
              >
                Confirm Password:
              </label>
              <input
                type="password"
                id="cnfPassword"
                placeholder="Confirm your password"
                className="border rounded-full w-full py-2 px-4 text-gray-700 focus:outline-none"
                value={cnfPassword}
                onChange={(e) => setCnfPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full w-full transition duration-300 ${
                isLoading ? "animate-pulse cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? (
                <div className="animate-spin h-5 w-5 mx-auto border-t-2 border-b-2 border-white rounded-full"></div>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>

          {error && <p className="text-red-500 text-sm mt-4">{error}</p>}

          <p className="text-center text-gray-600 text-sm mt-4">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-500 hover:underline transition duration-200"
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
