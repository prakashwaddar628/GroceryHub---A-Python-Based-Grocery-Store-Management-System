import ImageCards from "@/components/ImageCards";
import StatsCards from "@/components/StatsCards";

<StatsCards />
export default function DashboardPage() {
    return (
      <main className="max-w-7xl mx-auto px-4 py-8">
        <StatsCards />
        <ImageCards />
      </main>
    );
  }