import MobileContainer from "@/components/layout/MobileContainer";
import SummaryCards from "@/components/dashboard/SummaryCards";
import RevenueTrends from "@/components/dashboard/RevenueTrends";
import RecentActivities, {
  CustomerItem,
} from "@/components/dashboard/RecentActivities";
const customer = [
  {
    id: "1",
    name: "John Doe",
    title: "Cotton Mill Ltd.",
    time: "July 22, 2023",
    amount: "$2,800",
    status: "Overdue",
  },
  {
    id: "2",
    name: "Jane Smith",
    title: "Luxe Apparel Co.",
    time: "July 20, 2023",
    amount: "+$4,200",
    status: "Received",
  },
  {
    id: "3",
    name: "Alice Johnson",
    title: "Tech Innovations Inc.",
    time: "July 18, 2023",
    amount: "$1,500",
    status: "Overdue",
  },
];
export default function Page() {
  return (
    <MobileContainer>
      <main className="pb-24 grid grid-cols-1 gap-4">
        <SummaryCards />
        <RevenueTrends />
        {/* customers list  */}
        <RecentActivities title="All Customers">
          {customer.map((cust) => (
            <CustomerItem
              key={cust.id}
              title={cust.title}
              time={cust.time}
              amount={cust.amount}
              status={cust.status}
            />
          ))}
        </RecentActivities>
      </main>
    </MobileContainer>
  );
}
