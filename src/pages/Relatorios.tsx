import { FileText, Users, ArrowLeftRight, DollarSign, Download, Calendar } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, Legend, LineChart, Line } from "recharts";

const salesData = [
  { month: "Jul", marketplace: 45000, ecommerce: 18000 },
  { month: "Ago", marketplace: 52000, ecommerce: 22000 },
  { month: "Set", marketplace: 48000, ecommerce: 25000 },
  { month: "Out", marketplace: 61000, ecommerce: 28000 },
  { month: "Nov", marketplace: 55000, ecommerce: 32000 },
  { month: "Dez", marketplace: 124500, ecommerce: 45280 },
];

const categoryData = [
  { name: "Guitarra", value: 35, color: "#3b82f6" },
  { name: "Baixo", value: 20, color: "#22c55e" },
  { name: "Bateria", value: 15, color: "#f59e0b" },
  { name: "Teclado", value: 12, color: "#8b5cf6" },
  { name: "Amplificador", value: 10, color: "#ef4444" },
  { name: "Outros", value: 8, color: "#6b7280" },
];

const topProducts = [
  { name: "Fender Stratocaster", sales: 42 },
  { name: "Gibson Les Paul", sales: 38 },
  { name: "Marshall JCM800", sales: 31 },
  { name: "Pearl Export", sales: 28 },
  { name: "Fender Jazz Bass", sales: 25 },
  { name: "Yamaha PSR-E373", sales: 22 },
  { name: "Boss Katana 100", sales: 19 },
  { name: "Ibanez RG", sales: 17 },
  { name: "PRS Custom 24", sales: 15 },
  { name: "Roland JC-120", sales: 12 },
];

const matchesData = [
  { month: "Jul", matches: 32, trades: 18 },
  { month: "Ago", matches: 45, trades: 24 },
  { month: "Set", matches: 38, trades: 21 },
  { month: "Out", matches: 56, trades: 32 },
  { month: "Nov", matches: 62, trades: 38 },
  { month: "Dez", matches: 87, trades: 52 },
];

const reportCards = [
  { title: "Relatório de Vendas", icon: DollarSign, color: "text-success", bg: "bg-success/10" },
  { title: "Relatório de Usuários", icon: Users, color: "text-primary", bg: "bg-primary/10" },
  { title: "Relatório de Matches", icon: ArrowLeftRight, color: "text-warning", bg: "bg-warning/10" },
  { title: "Relatório Financeiro", icon: FileText, color: "text-purple-600", bg: "bg-purple-100" },
];

export default function Relatorios() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Relatórios</h1>
            <p className="text-muted-foreground">Geração de relatórios e analytics</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 bg-card border border-border rounded-lg">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <input type="date" className="bg-transparent text-sm focus:outline-none" defaultValue="2024-01-01" />
              <span className="text-muted-foreground">-</span>
              <input type="date" className="bg-transparent text-sm focus:outline-none" defaultValue="2024-12-31" />
            </div>
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Exportar
            </Button>
          </div>
        </div>

        {/* Quick Reports */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {reportCards.map((report, idx) => (
            <button
              key={idx}
              className="metric-card flex items-center gap-4 text-left hover:border-primary/50 transition-colors"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${report.bg}`}>
                <report.icon className={`w-6 h-6 ${report.color}`} />
              </div>
              <div>
                <p className="font-semibold text-foreground">{report.title}</p>
                <p className="text-sm text-muted-foreground">Clique para gerar</p>
              </div>
            </button>
          ))}
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sales Evolution */}
          <div className="bg-card rounded-xl border border-border/50 p-6">
            <h3 className="text-lg font-semibold mb-4">Evolução de Vendas</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={salesData}>
                <defs>
                  <linearGradient id="colorMarketplace" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorEcommerce" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" fontSize={12} />
                <YAxis stroke="#6b7280" fontSize={12} tickFormatter={(v) => `R$ ${v/1000}k`} />
                <Tooltip formatter={(value: number) => `R$ ${value.toLocaleString()}`} />
                <Area type="monotone" dataKey="marketplace" stroke="#3b82f6" fillOpacity={1} fill="url(#colorMarketplace)" name="Marketplace" />
                <Area type="monotone" dataKey="ecommerce" stroke="#22c55e" fillOpacity={1} fill="url(#colorEcommerce)" name="E-commerce" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Category Distribution */}
          <div className="bg-card rounded-xl border border-border/50 p-6">
            <h3 className="text-lg font-semibold mb-4">Distribuição por Categoria</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Products */}
          <div className="bg-card rounded-xl border border-border/50 p-6">
            <h3 className="text-lg font-semibold mb-4">Top 10 Produtos Mais Vendidos</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topProducts} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis type="number" stroke="#6b7280" fontSize={12} />
                <YAxis dataKey="name" type="category" stroke="#6b7280" fontSize={11} width={120} />
                <Tooltip />
                <Bar dataKey="sales" fill="#3b82f6" radius={[0, 4, 4, 0]} name="Vendas" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Matches Evolution */}
          <div className="bg-card rounded-xl border border-border/50 p-6">
            <h3 className="text-lg font-semibold mb-4">Evolução de Matches vs Trocas Concluídas</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={matchesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" fontSize={12} />
                <YAxis stroke="#6b7280" fontSize={12} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="matches" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} name="Matches Gerados" />
                <Line type="monotone" dataKey="trades" stroke="#22c55e" strokeWidth={2} dot={{ r: 4 }} name="Trocas Concluídas" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
