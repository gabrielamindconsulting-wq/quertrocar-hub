import { Star, DollarSign, TrendingUp, Calendar, Search, Eye, XCircle, RefreshCw } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { Button } from "@/components/ui/button";

const highlights = [
  { id: "DST001", ad: "Fender Stratocaster American Pro II", seller: "João Silva", category: "Guitarra", start: "10/12/2024", end: "17/12/2024", value: "R$ 49", views: 892, status: "Ativo" },
  { id: "DST002", ad: "Marshall JCM800 100W Head", seller: "Music Pro Store", category: "Amplificador", start: "08/12/2024", end: "15/12/2024", value: "R$ 49", views: 756, status: "Ativo" },
  { id: "DST003", ad: "Gibson Les Paul Standard 50s", seller: "Pedro Costa", category: "Guitarra", start: "05/12/2024", end: "12/12/2024", value: "R$ 49", views: 1.245, status: "Expirado" },
  { id: "DST004", ad: "Pearl Export 5pc Kit", seller: "Carlos Oliveira", category: "Bateria", start: "12/12/2024", end: "19/12/2024", value: "R$ 49", views: 423, status: "Ativo" },
  { id: "DST005", ad: "Baixo Fender Jazz Bass", seller: "Ana Lima", category: "Baixo", start: "14/12/2024", end: "21/12/2024", value: "R$ 49", views: 234, status: "Aguardando Pagamento" },
  { id: "DST006", ad: "Yamaha Montage 8", seller: "Fernanda Souza", category: "Teclado", start: "01/12/2024", end: "08/12/2024", value: "R$ 49", views: 567, status: "Expirado" },
];

export default function Destaques() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Produtos em Destaque</h1>
          <p className="text-muted-foreground">Gestão do programa de anúncios destacados</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Destaques Ativos"
            value="24"
            icon={<Star className="w-6 h-6 text-warning" />}
            iconBgColor="bg-warning/10"
          />
          <MetricCard
            title="Receita de Destaques (Mês)"
            value="R$ 2.940"
            icon={<DollarSign className="w-6 h-6 text-success" />}
            iconBgColor="bg-success/10"
            trend={{ value: "↑ 15.3%", isPositive: true }}
          />
          <MetricCard
            title="Taxa de Conversão"
            value="34.2%"
            icon={<TrendingUp className="w-6 h-6 text-success" />}
            iconBgColor="bg-success/10"
            trend={{ value: "↑ 5.8%", isPositive: true }}
          />
          <MetricCard
            title="Média de Dias em Destaque"
            value="5.2 dias"
            icon={<Calendar className="w-6 h-6 text-primary" />}
            iconBgColor="bg-primary/10"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 p-4 bg-card rounded-xl border border-border/50">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input type="text" placeholder="Buscar por anúncio ou vendedor" className="filter-input w-full pl-10" />
          </div>
          <select className="filter-input">
            <option value="">Status</option>
            <option value="ativo">Ativo</option>
            <option value="expirado">Expirado</option>
            <option value="aguardando">Aguardando Pagamento</option>
          </select>
          <select className="filter-input">
            <option value="">Categoria</option>
            <option value="guitarra">Guitarra</option>
            <option value="baixo">Baixo</option>
            <option value="bateria">Bateria</option>
            <option value="teclado">Teclado</option>
          </select>
          <input type="date" className="filter-input" />
          <input type="date" className="filter-input" />
          <Button>Filtrar</Button>
        </div>

        {/* Table */}
        <div className="bg-card rounded-xl border border-border/50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Anúncio</th>
                  <th>Vendedor</th>
                  <th>Categoria</th>
                  <th>Início</th>
                  <th>Término</th>
                  <th>Valor Pago</th>
                  <th>Visualizações</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {highlights.map((h) => (
                  <tr key={h.id}>
                    <td className="font-medium">{h.id}</td>
                    <td className="max-w-[200px] truncate">{h.ad}</td>
                    <td>{h.seller}</td>
                    <td>{h.category}</td>
                    <td className="text-muted-foreground">{h.start}</td>
                    <td className="text-muted-foreground">{h.end}</td>
                    <td className="font-medium text-success">{h.value}</td>
                    <td className="text-center">{h.views}</td>
                    <td>
                      <span className={`status-badge ${
                        h.status === "Ativo" ? "status-badge-success" :
                        h.status === "Aguardando Pagamento" ? "status-badge-warning" : "bg-muted text-muted-foreground"
                      }`}>
                        {h.status}
                      </span>
                    </td>
                    <td>
                      <div className="flex items-center gap-1">
                        <button className="p-1.5 hover:bg-muted rounded-lg"><Eye className="w-4 h-4 text-muted-foreground" /></button>
                        <button className="p-1.5 hover:bg-muted rounded-lg"><RefreshCw className="w-4 h-4 text-muted-foreground" /></button>
                        <button className="p-1.5 hover:bg-muted rounded-lg"><XCircle className="w-4 h-4 text-muted-foreground" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 border-t border-border/50 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Mostrando 1-6 de 24 destaques</p>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 text-sm border border-border rounded-lg hover:bg-muted">Anterior</button>
              <button className="px-3 py-1.5 text-sm bg-primary text-primary-foreground rounded-lg">1</button>
              <button className="px-3 py-1.5 text-sm border border-border rounded-lg hover:bg-muted">2</button>
              <button className="px-3 py-1.5 text-sm border border-border rounded-lg hover:bg-muted">Próximo</button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
