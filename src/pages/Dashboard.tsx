import { Store, ShoppingCart, ArrowLeftRight, Users, Star, Flag, Ban, DollarSign } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { FilterBar } from "@/components/dashboard/FilterBar";
import { TransactionsTable } from "@/components/dashboard/TransactionsTable";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Visão geral da plataforma Quertrocar</p>
        </div>

        {/* Filters */}
        <FilterBar />

        {/* Metrics Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Total de Vendas Marketplace"
            value="R$ 124.500"
            icon={<Store className="w-6 h-6 text-success" />}
            iconBgColor="bg-success/10"
            trend={{ value: "↑ 12.5%", isPositive: true }}
          />
          <MetricCard
            title="Total de Vendas E-commerce"
            value="R$ 45.280"
            icon={<ShoppingCart className="w-6 h-6 text-primary" />}
            iconBgColor="bg-primary/10"
            trend={{ value: "↑ 8.3%", isPositive: true }}
          />
          <MetricCard
            title="Total de Trocas (Matches)"
            value="87"
            icon={<ArrowLeftRight className="w-6 h-6 text-success" />}
            iconBgColor="bg-success/10"
            trend={{ value: "↑ 15.2%", isPositive: true }}
          />
          <MetricCard
            title="Clientes com Assinatura Ativa"
            value="342"
            icon={<Users className="w-6 h-6 text-primary" />}
            iconBgColor="bg-primary/10"
            trend={{ value: "↑ 5.1%", isPositive: true }}
          />
        </div>

        {/* Metrics Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Produtos em Destaque"
            value="24"
            icon={<Star className="w-6 h-6 text-warning" />}
            iconBgColor="bg-warning/10"
          />
          <MetricCard
            title="Denúncias Pendentes"
            value="8"
            icon={<Flag className="w-6 h-6 text-warning" />}
            iconBgColor="bg-warning/10"
          />
          <MetricCard
            title="Anúncios Bloqueados"
            value="12"
            icon={<Ban className="w-6 h-6 text-destructive" />}
            iconBgColor="bg-destructive/10"
          />
          <MetricCard
            title="Ticket Médio Marketplace"
            value="R$ 3.845"
            icon={<DollarSign className="w-6 h-6 text-success" />}
            iconBgColor="bg-success/10"
          />
        </div>

        {/* Transactions Table */}
        <TransactionsTable />
      </div>
    </DashboardLayout>
  );
}
