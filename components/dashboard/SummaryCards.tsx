import { Card, CardContent } from "@/components/ui/card";
import { UsersRound } from "lucide-react";

export default function SummaryCards() {
  return (
    <div className="px-4 pt-6 space-y-4">
      {/* Total Customers */}
      <Card>
        <CardContent className="p-5 space-y-2">
          <div className="flex justify-between">
            <p className="text-sm uppercase tracking-wider text-muted-foreground">
              Total Customers
            </p>
            <span className="material-symbols-outlined text-primary">
              <UsersRound />
            </span>
          </div>

          <div className="flex items-baseline gap-2">
            <p className="text-3xl font-extrabold">124</p>
            <span className="text-green-600 text-sm font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">
                trending_up
              </span>
              +5%
            </span>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        {/* Outstanding */}
        <Card className="bg-primary text-white flex-1">
          <CardContent className="p-5 space-y-1">
            <p className="text-xs uppercase opacity-80">Outstanding</p>
            <p className="text-xl font-extrabold">$45,200</p>
            <p className="text-xs opacity-90">+12% from last month</p>
          </CardContent>
        </Card>

        {/* Collection */}
        <Card className="flex-1">
          <CardContent className="p-5 space-y-1">
            <p className="text-xs uppercase text-muted-foreground">
              Collection
            </p>
            <p className="text-xl font-extrabold">$12,850</p>
            <span className="text-red-500 text-xs font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">
                trending_down
              </span>
              -3%
            </span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
