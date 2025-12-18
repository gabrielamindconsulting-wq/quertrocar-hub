import { Megaphone, Clock, XCircle, TrendingUp, Search, Eye, Check, X, Star, Ban, Trash2 } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { Button } from "@/components/ui/button";

const ads = [
  { id: "AN001", title: "Fender Stratocaster American Professional II", seller: "João Silva", category: "Guitarra", type: "Venda", price: "R$ 12.500", views: 342, interested: 8, status: "Ativo", date: "10/12/2024" },
  { id: "AN002", title: "Marshall JCM800 100W Head", seller: "Music Pro Store", category: "Amplificador", type: "Venda", price: "R$ 8.900", views: 256, interested: 5, status: "Ativo", date: "08/12/2024" },
  { id: "AN003", title: "Gibson Les Paul Standard 50s", seller: "Pedro Costa", category: "Guitarra", type: "Troca", price: "-", views: 189, interested: 12, status: "Pendente", date: "14/12/2024" },
  { id: "AN004", title: "Pearl Export 5pc Kit", seller: "Carlos Oliveira", category: "Bateria", type: "Ambos", price: "R$ 4.200", views: 421, interested: 15, status: "Ativo", date: "05/12/2024" },
  { id: "AN005", title: "Baixo Fender Jazz Bass MIM", seller: "Ana Lima", category: "Baixo", type: "Venda", price: "R$ 3.800", views: 98, interested: 2, status: "Bloqueado", date: "12/12/2024" },
  { id: "AN006", title: "Yamaha PSR-E373 61 Teclas", seller: "Fernanda Souza", category: "Teclado", type: "Venda", price: "R$ 1.890", views: 45, interested: 0, status: "Expirado", date: "01/11/2024" },
  { id: "AN007", title: "Boss Katana 100 MkII Combo", seller: "Roberto Alves", category: "Amplificador", type: "Venda", price: "R$ 3.200", views: 178, interested: 4, status: "Vendido", date: "28/11/2024" },
];

export default function Anuncios() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Anúncios</h1>
          <p className="text-muted-foreground">Moderação e gestão de todos os anúncios da plataforma</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Total de Anúncios Ativos"
            value="1.247"
            icon={<Megaphone className="w-6 h-6 text-primary" />}
            iconBgColor="bg-primary/10"
          />
          <MetricCard
            title="Aguardando Aprovação"
            value="23"
            icon={<Clock className="w-6 h-6 text-warning" />}
            iconBgColor="bg-warning/10"
          />
          <MetricCard
            title="Expirados (7 dias)"
            value="45"
            icon={<XCircle className="w-6 h-6 text-muted-foreground" />}
            iconBgColor="bg-muted"
          />
          <MetricCard
            title="Média Tempo até Venda"
            value="12 dias"
            icon={<TrendingUp className="w-6 h-6 text-success" />}
            iconBgColor="bg-success/10"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 p-4 bg-card rounded-xl border border-border/50">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input type="text" placeholder="Buscar por título ou ID" className="filter-input w-full pl-10" />
          </div>
          <select className="filter-input">
            <option value="">Status</option>
            <option value="ativo">Ativo</option>
            <option value="pendente">Pendente</option>
            <option value="expirado">Expirado</option>
            <option value="bloqueado">Bloqueado</option>
            <option value="vendido">Vendido</option>
          </select>
          <select className="filter-input">
            <option value="">Categoria</option>
            <option value="guitarra">Guitarra</option>
            <option value="baixo">Baixo</option>
            <option value="bateria">Bateria</option>
            <option value="teclado">Teclado</option>
            <option value="amplificador">Amplificador</option>
          </select>
          <select className="filter-input">
            <option value="">Tipo</option>
            <option value="venda">Venda</option>
            <option value="troca">Troca</option>
            <option value="ambos">Ambos</option>
          </select>
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
                  <th>Título</th>
                  <th>Vendedor</th>
                  <th>Categoria</th>
                  <th>Tipo</th>
                  <th>Preço</th>
                  <th>Views</th>
                  <th>Interessados</th>
                  <th>Status</th>
                  <th>Data</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {ads.map((ad) => (
                  <tr key={ad.id}>
                    <td className="font-medium">{ad.id}</td>
                    <td className="max-w-[200px] truncate">{ad.title}</td>
                    <td>{ad.seller}</td>
                    <td>{ad.category}</td>
                    <td>
                      <span className={`status-badge ${
                        ad.type === "Venda" ? "status-badge-success" :
                        ad.type === "Troca" ? "status-badge-primary" : "bg-purple-100 text-purple-700"
                      }`}>
                        {ad.type}
                      </span>
                    </td>
                    <td className="font-semibold">{ad.price}</td>
                    <td className="text-center">{ad.views}</td>
                    <td className="text-center">{ad.interested}</td>
                    <td>
                      <span className={`status-badge ${
                        ad.status === "Ativo" ? "status-badge-success" :
                        ad.status === "Pendente" ? "status-badge-warning" :
                        ad.status === "Bloqueado" ? "status-badge-destructive" :
                        ad.status === "Vendido" ? "status-badge-primary" : "bg-muted text-muted-foreground"
                      }`}>
                        {ad.status}
                      </span>
                    </td>
                    <td className="text-muted-foreground">{ad.date}</td>
                    <td>
                      <div className="flex items-center gap-1">
                        <button className="p-1.5 hover:bg-muted rounded-lg" title="Ver"><Eye className="w-4 h-4 text-muted-foreground" /></button>
                        <button className="p-1.5 hover:bg-muted rounded-lg" title="Aprovar"><Check className="w-4 h-4 text-success" /></button>
                        <button className="p-1.5 hover:bg-muted rounded-lg" title="Reprovar"><X className="w-4 h-4 text-destructive" /></button>
                        <button className="p-1.5 hover:bg-muted rounded-lg" title="Destacar"><Star className="w-4 h-4 text-warning" /></button>
                        <button className="p-1.5 hover:bg-muted rounded-lg" title="Bloquear"><Ban className="w-4 h-4 text-muted-foreground" /></button>
                        <button className="p-1.5 hover:bg-muted rounded-lg" title="Deletar"><Trash2 className="w-4 h-4 text-muted-foreground" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 border-t border-border/50 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Mostrando 1-7 de 1.247 anúncios</p>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 text-sm border border-border rounded-lg hover:bg-muted">Anterior</button>
              <button className="px-3 py-1.5 text-sm bg-primary text-primary-foreground rounded-lg">1</button>
              <button className="px-3 py-1.5 text-sm border border-border rounded-lg hover:bg-muted">2</button>
              <button className="px-3 py-1.5 text-sm border border-border rounded-lg hover:bg-muted">3</button>
              <button className="px-3 py-1.5 text-sm border border-border rounded-lg hover:bg-muted">Próximo</button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
