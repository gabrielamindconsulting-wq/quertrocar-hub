import { Package, CheckCircle, AlertTriangle, DollarSign, Search, Eye, Edit, Power, Plus } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { Button } from "@/components/ui/button";

const products = [
  { sku: "ACC001", image: "🎸", name: "Encordoamento Elixir 010-046", category: "Cordas", price: "R$ 89", stock: 45, sold: 234, status: "Ativo" },
  { sku: "ACC002", image: "🎵", name: "Palheta Dunlop Jazz III - Pack 12", category: "Palhetas", price: "R$ 65", stock: 8, sold: 567, status: "Ativo" },
  { sku: "ACC003", image: "🔌", name: "Cabo Monster Rock 3m P10-P10", category: "Cabos", price: "R$ 189", stock: 23, sold: 156, status: "Ativo" },
  { sku: "ACC004", image: "💼", name: "Case Gator Guitarra Stratocaster", category: "Cases", price: "R$ 420", stock: 12, sold: 89, status: "Ativo" },
  { sku: "ACC005", image: "🎹", name: "Suporte Teclado Hercules KS120B", category: "Suportes", price: "R$ 350", stock: 0, sold: 45, status: "Sem Estoque" },
  { sku: "ACC006", image: "🥁", name: "Baqueta Vic Firth 5A American Classic", category: "Percussão", price: "R$ 75", stock: 67, sold: 312, status: "Ativo" },
  { sku: "ACC007", image: "🎤", name: "Pedal Boss DS-1 Distortion", category: "Pedais", price: "R$ 590", stock: 15, sold: 78, status: "Ativo" },
  { sku: "ACC008", image: "🎧", name: "Fone Audio-Technica ATH-M50x", category: "Áudio", price: "R$ 890", stock: 5, sold: 34, status: "Inativo" },
];

export default function Acessorios() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Acessórios</h1>
            <p className="text-muted-foreground">Catálogo e estoque da loja oficial</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Novo Produto
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Total de Produtos"
            value="156"
            icon={<Package className="w-6 h-6 text-primary" />}
            iconBgColor="bg-primary/10"
          />
          <MetricCard
            title="Produtos Ativos"
            value="142"
            icon={<CheckCircle className="w-6 h-6 text-success" />}
            iconBgColor="bg-success/10"
          />
          <MetricCard
            title="Estoque Baixo"
            value="8"
            icon={<AlertTriangle className="w-6 h-6 text-warning" />}
            iconBgColor="bg-warning/10"
          />
          <MetricCard
            title="Valor Total em Estoque"
            value="R$ 87.450"
            icon={<DollarSign className="w-6 h-6 text-success" />}
            iconBgColor="bg-success/10"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 p-4 bg-card rounded-xl border border-border/50">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input type="text" placeholder="Buscar por nome ou SKU" className="filter-input w-full pl-10" />
          </div>
          <select className="filter-input">
            <option value="">Categoria</option>
            <option value="cordas">Cordas</option>
            <option value="palhetas">Palhetas</option>
            <option value="cabos">Cabos</option>
            <option value="cases">Cases</option>
            <option value="suportes">Suportes</option>
            <option value="percussao">Percussão</option>
            <option value="pedais">Pedais</option>
            <option value="audio">Áudio</option>
          </select>
          <select className="filter-input">
            <option value="">Status</option>
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
            <option value="sem-estoque">Sem Estoque</option>
          </select>
          <input type="text" placeholder="Preço mínimo" className="filter-input w-28" />
          <input type="text" placeholder="Preço máximo" className="filter-input w-28" />
          <Button>Filtrar</Button>
        </div>

        {/* Table */}
        <div className="bg-card rounded-xl border border-border/50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>SKU</th>
                  <th>Imagem</th>
                  <th>Nome</th>
                  <th>Categoria</th>
                  <th>Preço</th>
                  <th>Estoque</th>
                  <th>Vendidos</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.sku}>
                    <td className="font-medium">{product.sku}</td>
                    <td className="text-2xl">{product.image}</td>
                    <td className="max-w-[200px]">{product.name}</td>
                    <td>{product.category}</td>
                    <td className="font-semibold">{product.price}</td>
                    <td className={`text-center font-medium ${product.stock < 10 ? "text-warning" : ""}`}>
                      {product.stock}
                    </td>
                    <td className="text-center">{product.sold}</td>
                    <td>
                      <span className={`status-badge ${
                        product.status === "Ativo" ? "status-badge-success" :
                        product.status === "Sem Estoque" ? "status-badge-warning" : "bg-muted text-muted-foreground"
                      }`}>
                        {product.status}
                      </span>
                    </td>
                    <td>
                      <div className="flex items-center gap-1">
                        <button className="p-1.5 hover:bg-muted rounded-lg" title="Ver"><Eye className="w-4 h-4 text-muted-foreground" /></button>
                        <button className="p-1.5 hover:bg-muted rounded-lg" title="Editar"><Edit className="w-4 h-4 text-muted-foreground" /></button>
                        <button className="p-1.5 hover:bg-muted rounded-lg" title="Ativar/Desativar"><Power className="w-4 h-4 text-muted-foreground" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 border-t border-border/50 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Mostrando 1-8 de 156 produtos</p>
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
