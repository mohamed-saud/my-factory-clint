import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CircleDollarSign } from "lucide-react";
import Link from "next/link";

interface RecentActivitiesProps {
  title: string;
  children?: React.ReactNode;
}
export default function RecentActivities({
  title,
  children,
}: RecentActivitiesProps) {
  return (
    <section className="mt-4">
      <div className="flex justify-between px-4 pb-2">
        <h2 className="text-xl font-bold">{title}</h2>
        <button className="text-primary text-sm font-bold">See all</button>
      </div>

      <div className="px-4 space-y-3">{children}</div>
    </section>
  );
}

interface ActivityItemProps {
  title: string;
  time: string;
  amount: string;
  status: string;
}

export const CustomerItem: React.FC<ActivityItemProps> = ({
  title,
  time,
  amount,
  status,
}) => {
  return (
    <Link href={`/customers/${title}`} className="block">
      <Card className="bg-transparent relative p-2 border border-gray-200 dark:border-gray-800">
        <CardContent className="px-3 py-1 flex gap-4 items-center">
          <p
            className={cn(
              "text-[10px] uppercase font-bold items-center flex flex-col justify-center",
              {
                "text-green-600": status === "Received",
                "text-orange-600": status === "Overdue",
              },
            )}
          >
            <span className="material-symbols-outlined text-primary sr-only">
              {status}
            </span>

            <CircleDollarSign />
          </p>

          <div className="flex-1">
            <p className="font-bold">{title}</p>
            <p className="text-xs text-muted-foreground">{time}</p>
          </div>

          <div className="text-right">
            <p className="font-extrabold">{amount}</p>
            <p
              className={cn("text-[10px] uppercase font-bold", {
                "text-green-600": status === "Received",
                "text-orange-600": status === "Overdue",
              })}
            >
              {status}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
