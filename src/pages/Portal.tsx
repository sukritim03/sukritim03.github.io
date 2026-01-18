import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Download, 
  Package, 
  Clock, 
  CheckCircle, 
  Truck,
  Calendar,
  ChevronRight,
  FileSpreadsheet,
  ArrowUpRight
} from "lucide-react";

// Mock order data
const orders = [
  {
    id: "ORD-2025-0147",
    date: "2025-01-15",
    items: 12,
    total: 45600,
    status: "delivered",
  },
  {
    id: "ORD-2025-0142",
    date: "2025-01-10",
    items: 8,
    total: 28900,
    status: "in_transit",
  },
  {
    id: "ORD-2025-0138",
    date: "2025-01-05",
    items: 15,
    total: 67200,
    status: "processing",
  },
  {
    id: "ORD-2024-0956",
    date: "2024-12-20",
    items: 22,
    total: 89500,
    status: "delivered",
  },
  {
    id: "ORD-2024-0912",
    date: "2024-12-15",
    items: 6,
    total: 15800,
    status: "delivered",
  },
];

// Mock invoice data
const invoices = [
  { id: "INV-2025-01", month: "January 2025", amount: 74500, dueDate: "2025-02-15" },
  { id: "INV-2024-12", month: "December 2024", amount: 105300, dueDate: "2025-01-15" },
  { id: "INV-2024-11", month: "November 2024", amount: 68900, dueDate: "2024-12-15" },
];

const getStatusConfig = (status: string) => {
  switch (status) {
    case "delivered":
      return { label: "Delivered", color: "bg-accent/10 text-accent", icon: CheckCircle };
    case "in_transit":
      return { label: "In Transit", color: "bg-primary/10 text-primary", icon: Truck };
    case "processing":
      return { label: "Processing", color: "bg-muted text-muted-foreground", icon: Clock };
    default:
      return { label: "Unknown", color: "bg-muted text-muted-foreground", icon: Package };
  }
};

export default function Portal() {
  const [activeTab, setActiveTab] = useState<"orders" | "invoices">("orders");

  return (
    <Layout>
      <div className="pt-24 pb-16 min-h-screen bg-muted/30">
        <div className="klenzo-container">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Customer Portal
            </h1>
            <p className="text-lg text-muted-foreground">
              View your order history and download consolidated invoices
            </p>
          </motion.div>

          {/* Stats Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          >
            <div className="klenzo-card p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Orders</p>
                  <p className="text-2xl font-bold text-foreground">24</p>
                </div>
              </div>
            </div>
            <div className="klenzo-card p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Delivered</p>
                  <p className="text-2xl font-bold text-foreground">21</p>
                </div>
              </div>
            </div>
            <div className="klenzo-card p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">This Month Spend</p>
                  <p className="text-2xl font-bold text-foreground">₹74,500</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex gap-2 mb-6"
          >
            <button
              onClick={() => setActiveTab("orders")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === "orders"
                  ? "bg-primary text-primary-foreground shadow-klenzo"
                  : "bg-card text-muted-foreground hover:bg-secondary"
              }`}
            >
              <Package className="h-4 w-4" />
              Order History
            </button>
            <button
              onClick={() => setActiveTab("invoices")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === "invoices"
                  ? "bg-primary text-primary-foreground shadow-klenzo"
                  : "bg-card text-muted-foreground hover:bg-secondary"
              }`}
            >
              <FileSpreadsheet className="h-4 w-4" />
              Monthly Invoices
            </button>
          </motion.div>

          {/* Orders Tab */}
          {activeTab === "orders" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              {orders.map((order, index) => {
                const statusConfig = getStatusConfig(order.status);
                const StatusIcon = statusConfig.icon;
                
                return (
                  <motion.div
                    key={order.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="klenzo-card p-6"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                          <Package className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{order.id}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {new Date(order.date).toLocaleDateString("en-IN", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })}
                            </span>
                            <span>{order.items} items</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 lg:gap-8">
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Order Total</p>
                          <p className="font-bold text-lg text-foreground">
                            ₹{order.total.toLocaleString("en-IN")}
                          </p>
                        </div>
                        <Badge className={`${statusConfig.color} gap-1`}>
                          <StatusIcon className="h-3 w-3" />
                          {statusConfig.label}
                        </Badge>
                        <Button variant="ghost" size="icon">
                          <ChevronRight className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {/* Invoices Tab */}
          {activeTab === "invoices" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              {invoices.map((invoice, index) => (
                <motion.div
                  key={invoice.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="klenzo-card p-6"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                        <FileSpreadsheet className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{invoice.month}</h3>
                        <p className="text-sm text-muted-foreground">{invoice.id}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 lg:gap-8">
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Amount</p>
                        <p className="font-bold text-lg text-foreground">
                          ₹{invoice.amount.toLocaleString("en-IN")}
                        </p>
                      </div>
                      <Button variant="cta" size="sm" className="gap-2">
                        <Download className="h-4 w-4" />
                        Download PDF
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* MOU Request Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12"
          >
            <div className="bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                    Enterprise Client?
                  </h3>
                  <p className="text-primary-foreground/80 max-w-lg">
                    Request a custom MOU with preferential rate cards. Perfect for large-scale facility management companies.
                  </p>
                </div>
                <Button variant="hero" size="xl" className="whitespace-nowrap gap-2">
                  Request Custom Rate Card
                  <ArrowUpRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
