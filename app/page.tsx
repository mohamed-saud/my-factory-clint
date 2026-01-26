import MobileContainer from "@/components/layout/MobileContainer";
import AppHeader from "@/components/layout/AppHeader";
import BottomNav from "@/components/layout/BottomNav";
import SummaryCards from "@/components/dashboard/SummaryCards";
import RevenueTrends from "@/components/dashboard/RevenueTrends";
import RecentActivities from "@/components/dashboard/RecentActivities";

export default function Page() {
  return (
    <MobileContainer>
      <main className="pb-24">
        <SummaryCards />
        <RevenueTrends />
        <RecentActivities />
      </main>
      <BottomNav />
    </MobileContainer>
  );
}
