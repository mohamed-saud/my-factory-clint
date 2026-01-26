import { Card, CardContent } from "@/components/ui/card";

export default function RecentActivities() {
  return (
    <section className="mt-4">
      <div className="flex justify-between px-4 pb-2">
        <h2 className="text-xl font-bold">Recent Activities</h2>
        <button className="text-primary text-sm font-bold">See all</button>
      </div>

      <div className="px-4 space-y-3">
        <Activity
          icon="payments"
          title="Luxe Apparel Co."
          time="Today, 2:45 PM"
          amount="+$4,200"
          status="Received"
          color="green"
        />
        <Activity
          icon="receipt_long"
          title="Urban Stitch"
          time="Yesterday"
          amount="$1,150"
          status="Invoice"
          color="blue"
        />
        <Activity
          icon="pending_actions"
          title="Cotton Mill Ltd."
          time="July 22, 2023"
          amount="$2,800"
          status="Overdue"
          color="orange"
        />
      </div>
    </section>
  );
}

function Activity({ icon, title, time, amount, status }: any) {
  return (
    <Card>
      <CardContent className="p-3 flex gap-4 items-center">
        <span className="material-symbols-outlined">{icon}</span>

        <div className="flex-1">
          <p className="font-bold">{title}</p>
          <p className="text-xs text-muted-foreground">{time}</p>
        </div>

        <div className="text-right">
          <p className="font-extrabold">{amount}</p>
          <p className="text-[10px] uppercase font-bold">{status}</p>
        </div>
      </CardContent>
    </Card>
  );
}
