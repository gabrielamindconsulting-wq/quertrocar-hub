import { DollarSign, ShoppingBag, Receipt, CheckCircle, Search, Eye, AlertTriangle, RefreshCw } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { Button } from "@/components/ui/button";

const transactions = [
  { id: "MKT001", seller: "João Silva", buyer: "Maria Santos", product: "Fender Stratocaster 2019", category: "Guitarra", value: "R$ 4.500", fee: "R$ 450", status: "Concluído", date: "15/12/2024" },
  { id: "MKT002", seller: "Music Pro Store", buyer: "Pedro Costa", product: "Marshall JCM800 100W", category: "Amplificador", value: "R$ 8.900", fee: "R$ 890", status: "Concluído", date: "14/12/2024" },
  { id: "MKT003", seller: "Carlos Oliveira", buyer: "Ana Lima", product: "Gibson Les Paul Standard", category: "Guitarra", value: "R$ 12.500", fee: "R$ 1.250", status: "Pendente", date: "14/12/2024" },
  { id: "MKT004", seller: "Som & Cia", buyer: "Roberto Alves", product: "Pearl Export Series 5pc", category: "Bateria", value: "R$ 6.200", fee: "R$ 620", status: "Em Disputa", date: "13/12/2024" },
  { id: "MKT005", seller: "Lucia Ferreira", buyer: "Thiago Mendes", product: "Baixo Fender Precision", category: "Baixo", value: "R$ 3.800", fee: "R$ 380", status: "Concluído", date: "12/12/2024" },
  { id: "MKT006", seller: "Amanda Rocha", buyer: "Felipe Santos", product: "Yamaha Clavinova CLP-735", category: "Teclado", value: "R$ 15.000", fee: "R$ 1.500", status: "Cancelado", date: "11/12/2024" },
];

export default function Marketplace() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Marketplace</h1>
          <p className="text-muted-foreground">Visão geral das transações de compra/venda entre usuários</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Total de Vendas"
            value="R$ 124.500"
            icon={<DollarSign className="w-6 h-6 text-success" />}
            iconBgColor="bg-success/10"
            trend={{ value: "↑ 18.2%", isPositive: true }}
          />
          <MetricCard
            title="Quantidade de Transações"
            value="342"
            icon={<ShoppingBag className="w-6 h-6 text-primary" />}
            iconBgColor="bg-primary/10"
            trend={{ value: "↑ 12.5%", isPositive: true }}
          />
          <MetricCard
            title="Ticket Médio"
            value="R$ 3.645"
            icon={<Receipt className="w-6 h-6 text-primary" />}
            iconBgColor="bg-primary/10"
            trend={{ value: "↑ 5.1%", isPositive: true }}
          />
          <MetricCard
            title="Taxa de Conclusão"
            value="87.3%"
            icon={<CheckCircle className="w-6 h-6 text-success" />}
            iconBgColor="bg-success/10"
            trend={{ value: "↑ 2.4%", isPositive: true }}
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 p-4 bg-card rounded-xl border border-border/50">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input type="text" placeholder="Buscar por ID, vendedor ou comprador" className="filter-input w-full pl-10" />
          </div>
          <input type="date" className="filter-input" placeholder="Data início" />
          <input type="date" className="filter-input" placeholder="Data fim" />
          <select className="filter-input">
            <option value="">Status</option>
            <option value="concluido">Concluído</option>
            <option value="pendente">Pendente</option>
            <option value="cancelado">Cancelado</option>
            <option value="disputa">Em Disputa</option>
          </select>
          <select className="filter-input">
            <option value="">Categoria</option>
            <option value="guitarra">Guitarra</option>
            <option value="baixo">Baixo</option>
            <option value="bateria">Bateria</option>
            <option value="teclado">Teclado</option>
            <option value="amplificador">Amplificador</option>
          </select>
          <Button>Filtrar</Button>
        </div>

        {/* Table */}
        <div className="bg-card rounded-xl border border-border/50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Vendedor</th>
                  <th>Comprador</th>
                  <th>Produto</th>
                  <th>Categoria</th>
                  <th>Valor</th>
                  <th>Taxa Plataforma</th>
                  <th>Status</th>
                  <th>Data</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx) => (
                  <tr key={tx.id}>
                    <td className="font-medium">{tx.id}</td>
                    <td>{tx.seller}</td>
                    <td>{tx.buyer}</td>
                    <td className="max-w-[180px] truncate">{tx.product}</td>
                    <td>{tx.category}</td>
                    <td className="font-semibold">{tx.value}</td>
                    <td className="text-success font-medium">{tx.fee}</td>
                    <td>
                      <span className={`status-badge ${
                        tx.status === "Concluído" ? "status-badge-success" :
                        tx.status === "Pendente" ? "status-badge-warning" :
                        tx.status === "Em Disputa" ? "status-badge-primary" : "status-badge-destructive"
                      }`}>
                        {tx.status}
                      </span>
                    </td>
                    <td className="text-muted-foreground">{tx.date}</td>
                    <td>
                      <div className="flex items-center gap-1">
                        <button className="p-1.5 hover:bg-muted rounded-lg" title="Ver detalhes"><Eye className="w-4 h-4 text-muted-foreground" /></button>
                        <button className="p-1.5 hover:bg-muted rounded-lg" title="Abrir disputa"><AlertTriangle className="w-4 h-4 text-muted-foreground" /></button>
                        <button className="p-1.5 hover:bg-muted rounded-lg" title="Reembolsar"><RefreshCw className="w-4 h-4 text-muted-foreground" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 border-t border-border/50 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Mostrando 1-6 de 342 transações</p>
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
