'use client';

import AdminNav from './AdminNav';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <AdminNav />
      <div className="flex flex-col flex-grow">
        <main className="flex-grow p-6">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
