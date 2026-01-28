import RecentActivities, {
  CustomerItem,
} from "@/components/dashboard/RecentActivities";
import { Search } from "lucide-react";
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
export default function Customers() {
  return (
    <div className=" gap-1  grid grid-cols-1 ">
      {/* search input  */}
      <div className="bg-gray-200 rounded-md p-2 mt-4 mx-4 flex items-center">
        <Search color="gray" className="bg-gray-200" />
        <input
          type="text"
          placeholder="Search Customers"
          className="bg-transparent outline-none ml-2 w-full"
        />
      </div>
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
    </div>
  );
}
