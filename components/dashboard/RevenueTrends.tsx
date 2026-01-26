import AppBarChart from "@/components/AppBarChart";

const bars = [65, 40, 55, 85, 70, 100];
const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"];

export default function RevenueTrends() {
  return (
    <section className="mt-6">
      <div className="flex justify-between px-4">
        <h2 className="text-xl font-bold">Revenue Trends</h2>
        <button className="text-primary text-sm font-bold">Details</button>
      </div>

      <div className="px-4 py-4">
        <AppBarChart />
      </div>
    </section>
  );
}
