import {
  ArrowLeft,
  MoreHorizontal,
  Phone,
  FileText,
  Filter,
  MinusIcon,
  Plus,
  PlusIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
export default function CustomerLedger() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Bar */}
      {/* <div className="sticky top-0 z-50 border-b bg-background">
        <div className="mx-auto flex max-w-md items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <ArrowLeft className="h-5 w-5 cursor-pointer" />
            <h2 className="text-lg font-bold tracking-tight">
              Customer Ledger
            </h2>
          </div>
          <Button size="icon" variant="ghost">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </div> */}

      <main className="mx-auto max-w-md space-y-6 pb-24">
        {/* Profile */}
        <div className="flex items-center gap-4 p-4">
          <div
            className="h-20 w-20 rounded-full bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBF68R8paL5sNlm1QbZOgJ0YKyaj2dZ-DdEyxtyhTCTD025jngSAPwMylw3QMJj6nmmvjvbqlc-_0QsAdgAkuqcE-jCM5p9HhohrcqCvcnH53aHAG3yZ2b5sYruXoKTAJr0rk3J4rED82ZPiTScmgbxMN_p-UCSL23NGh2ikOOtuOrW-5hiEgF2Oxc7OYBWUrYyIqi4cbSSswLHkzP6g8kwPF-qMWRygr9DbVjfMJOXLsdG8FzRYTq0ZHla-4hKylild3TUgW4j2pw")',
            }}
          />
          <div>
            <h1 className="text-2xl font-extrabold">John Doe Boutique</h1>
            <p className="text-sm text-muted-foreground">Factory ID: #88291</p>
            <p className="text-xs text-muted-foreground mt-1">
              📍 New York, USA
            </p>
          </div>
        </div>

        {/* Balance Card */}
        <Card className="mx-4">
          <CardHeader className="pb-2">
            <p className="text-xs font-semibold uppercase text-muted-foreground">
              Total Balance Owed
            </p>
            <p className="text-4xl font-extrabold text-primary">$12,450.00</p>
          </CardHeader>
          <CardContent>
            <Separator className="mb-4 " />
            <h1 className="text-sm font-bold mb-4 ">Actions</h1>
            <div className="flex items-center justify-between">
              <Button
                className=" cursor-pointer"
                variant="destructive"
                size="lg"
              >
                <MinusIcon />
                Add Debt
              </Button>
              <Button className=" cursor-pointer" variant="success" size="lg">
                <PlusIcon />
                Add Payment
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="flex gap-3 px-4">
          <Button variant="outline" className="flex-1 gap-2">
            <Phone className="h-4 w-4" />
            Call
          </Button>

          <Button className="flex-[1.5] gap-2">
            <FileText className="h-4 w-4" />
            Send Statement
          </Button>
        </div>

        {/* Transactions Header */}
        <div className="flex items-center justify-between px-4">
          <h2 className="text-xl font-bold">Transaction History</h2>
          <Button variant="ghost" size="sm" className="gap-1">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>

        {/* Ledger */}
        <div className="space-y-3 px-4">
          <LedgerItem
            date="Oct 24, 2023"
            title="Bulk Denim Order #5521"
            type="order"
            amount="+ $3,200.00"
            balance="$12,450.00"
            meta="240 items"
          />
          <LedgerItem
            date="Oct 12, 2023"
            title="Bank Transfer Payment"
            type="payment"
            amount="- $5,000.00"
            balance="$9,250.00"
            meta="Ref: TXN99281"
          />
        </div>
      </main>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 border-t bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-md justify-between px-6 py-4">
          {["Dashboard", "Customers", "Orders", "Settings"].map((item, i) => (
            <div
              key={item}
              className={`flex flex-col items-center text-xs ${
                i === 1 ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <span>●</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
function LedgerItem({
  date,
  title,
  type,
  amount,
  balance,
  meta,
}: {
  date: string;
  title: string;
  type: "order" | "payment";
  amount: string;
  balance: string;
  meta: string;
}) {
  const isPayment = type === "payment";

  return (
    <Card>
      <CardContent className="flex justify-between p-4">
        <div className="space-y-1">
          <span className="text-xs font-bold text-muted-foreground">
            {date}
          </span>
          <p className="font-bold">{title}</p>
          <div className="flex items-center gap-2">
            <Badge variant={isPayment ? "success" : "destructive"}>
              {isPayment ? "Payment" : "Order"}
            </Badge>
            <span className="text-xs text-muted-foreground">{meta}</span>
          </div>
        </div>

        <div className="text-right">
          <p
            className={`text-lg font-bold ${
              isPayment ? "text-green-600" : "text-red-500"
            }`}
          >
            {amount}
          </p>
          <p className="text-xs text-muted-foreground">Bal: {balance}</p>
        </div>
      </CardContent>
    </Card>
  );
}
