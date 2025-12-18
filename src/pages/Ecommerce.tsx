import { DollarSign, Package, Receipt, AlertTriangle, Search, Eye, Truck, Plus } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { Button } from "@/components/ui/button";

const orders = [
  { id: "#EC001", client: "João Silva", products: "Encordoamento Elixir x2, Palheta Dunlop x5", total: "R$ 245", shipping: "R$ 15", payment: "Cartão", status: "Entregue", date: "15/12/2024" },
  { id: "#EC002", client: "Maria Santos", products: "Cabo Monster Rock 3m", total: "R$ 189", shipping: "R$ 12", payment: "PIX", status: "Enviado", date: "14/12/2024" },
  { id: "#EC003", client: "Pedro Costa", products: "Case Gator Guitarra", total: "R$ 420", shipping: "R$ 25", payment: "Cartão", status: "Pago", date: "14/12/2024" },
  { id: "#EC004", client: "Ana Lima", products: "Correia Levy's, Afinador Korg", total: "R$ 178", shipping: "Grátis", payment: "Boleto", status: "Aguardando Pagamento", date: "13/12/2024" },
  { id: "#EC005", client: "Carlos Oliveira", products: "Pedal Boss DS-1", total: "R$ 590", shipping: "R$ 18", payment: "PIX", status: "Entregue", date: "12/12/2024" },
  { id: "#EC006", client: "Fernanda Souza", products: "Encordoamento D'Addario x3", total: "R$ 147", shipping: "R$ 10", payment: "Cartão", status: "Cancelado", date: "11/12/2024" },
];

const lowStockProducts = [
  { name: "Encordoamento Elixir 010", stock: 5, minStock: 10 },
  { name: "Palheta Dunlop Jazz III", stock: 8, minStock: 20 },
  { name: "Cabo Monster Rock 3m", stock: 3, minStock: 5 },
];

export default function Ecommerce() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">E-commerce</h1>
            <p className="text-muted-foreground">Gestão da loja oficial de acessórios da Quertrocar</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Novo Produto
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Faturamento Total"
            value="R$ 45.280"
            icon={<DollarSign className="w-6 h-6 text-success" />}
            iconBgColor="bg-success/10"
            trend={{ value: "↑ 8.3%", isPositive: true }}
          />
          <MetricCard
            title="Pedidos do Mês"
            value="234"
            icon={<Package className="w-6 h-6 text-primary" />}
            iconBgColor="bg-primary/10"
            trend={{ value: "↑ 15.2%", isPositive: true }}
          />
          <MetricCard
            title="Ticket Médio"
            value="R$ 193"
            icon={<Receipt className="w-6 h-6 text-primary" />}
            iconBgColor="bg-primary/10"
            trend={{ value: "↓ 2.1%", isPositive: false }}
          />
          <MetricCard
            title="Produtos Estoque Baixo"
            value="3"
            icon={<AlertTriangle className="w-6 h-6 text-warning" />}
            iconBgColor="bg-warning/10"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 p-4 bg-card rounded-xl border border-border/50">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input type="text" placeholder="Buscar por produto ou cliente" className="filter-input w-full pl-10" />
          </div>
          <input type="date" className="filter-input" />
          <input type="date" className="filter-input" />
          <select className="filter-input">
            <option value="">Status do pedido</option>
            <option value="pago">Pago</option>
            <option value="aguardando">Aguardando Pagamento</option>
            <option value="enviado">Enviado</option>
            <option value="entregue">Entregue</option>
            <option value="cancelado">Cancelado</option>
          </select>
          <select className="filter-input">
            <option value="">Pagamento</option>
            <option value="cartao">Cartão</option>
            <option value="pix">PIX</option>
            <option value="boleto">Boleto</option>
          </select>
          <Button>Filtrar</Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Orders Table */}
          <div className="lg:col-span-2 bg-card rounded-xl border border-border/50 overflow-hidden">
            <div className="px-6 py-4 border-b border-border/50">
              <h2 className="text-lg font-semibold">Pedidos Recentes</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Nº Pedido</th>
                    <th>Cliente</th>
                    <th>Produtos</th>
                    <th>Total</th>
                    <th>Frete</th>
                    <th>Pagamento</th>
                    <th>Status</th>
                    <th>Data</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td className="font-medium">{order.id}</td>
                      <td>{order.client}</td>
                      <td className="max-w-[180px] truncate text-muted-foreground">{order.products}</td>
                      <td className="font-semibold">{order.total}</td>
                      <td className="text-muted-foreground">{order.shipping}</td>
                      <td>{order.payment}</td>
                      <td>
                        <span className={`status-badge ${
                          order.status === "Entregue" ? "status-badge-success" :
                          order.status === "Enviado" ? "status-badge-primary" :
                          order.status === "Pago" ? "status-badge-primary" :
                          order.status === "Aguardando Pagamento" ? "status-badge-warning" : "status-badge-destructive"
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="text-muted-foreground">{order.date}</td>
                      <td>
                        <div className="flex items-center gap-1">
                          <button className="p-1.5 hover:bg-muted rounded-lg"><Eye className="w-4 h-4 text-muted-foreground" /></button>
                          <button className="p-1.5 hover:bg-muted rounded-lg"><Truck className="w-4 h-4 text-muted-foreground" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Low Stock Panel */}
          <div className="bg-card rounded-xl border border-border/50 overflow-hidden">
            <div className="px-6 py-4 border-b border-border/50 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Estoque Crítico</h2>
              <AlertTriangle className="w-5 h-5 text-warning" />
            </div>
            <div className="p-4 space-y-3">
              {lowStockProducts.map((product, idx) => (
                <div key={idx} className="p-3 bg-warning/5 border border-warning/20 rounded-lg">
                  <p className="font-medium text-sm">{product.name}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-muted-foreground">Estoque: {product.stock} un</span>
                    <span className="text-xs text-warning">Mín: {product.minStock} un</span>
                  </div>
                  <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-warning rounded-full" 
                      style={{ width: `${(product.stock / product.minStock) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-2">
                Ver Todo Estoque
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
