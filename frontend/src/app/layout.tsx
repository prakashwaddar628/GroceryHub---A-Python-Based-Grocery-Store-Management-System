import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "Grocery hub",
  description:
    "A simple and efficient grocery store management system built with Python. Includes features like product inventory, billing, customer management, and sales tracking — perfect for learning object-oriented programming, file handling, and real-world application design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
