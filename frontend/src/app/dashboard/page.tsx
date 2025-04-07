import Footer from "@/components/Footer";
import ImageCards from "@/components/ImageCards";
import Navbar from "@/components/Navbar";
import RecentActivity from "@/components/RecentActivity";
import StatsCards from "@/components/StatsCards";

<StatsCards />;
export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 overflow-y-hidden">
        <StatsCards />
        <ImageCards />
        <RecentActivity />
      </main>
      <Footer />
    </>
  );
}
