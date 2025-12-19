import { Users, UserPlus, UserCheck, TrendingUp, Search, Eye, Edit, Ban, MessageSquare, History } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { Button } from "@/components/ui/button";

const clients = [
  { id: "CLI001", name: "João Silva", email: "joao@email.com", phone: "(11) 99999-0001", type: "Pessoa Física", ads: 5, trades: 3, date: "10/01/2024", status: "Ativo" },
  { id: "CLI002", name: "Music Pro Store", email: "contato@musicpro.com", phone: "(21) 98888-0002", type: "Loja", ads: 42, trades: 18, date: "15/02/2024", status: "Ativo" },
  { id: "CLI003", name: "Maria Santos", email: "maria@email.com", phone: "(31) 97777-0003", type: "Pessoa Física", ads: 2, trades: 1, date: "20/03/2024", status: "Ativo" },
  { id: "CLI004", name: "Pedro Costa", email: "pedro@email.com", phone: "(41) 96666-0004", type: "Pessoa Física", ads: 0, trades: 0, date: "05/04/2024", status: "Inativo" },
  { id: "CLI005", name: "Som & Cia Instrumentos", email: "vendas@somcia.com", phone: "(51) 95555-0005", type: "Loja", ads: 28, trades: 12, date: "12/05/2024", status: "Ativo" },
  { id: "CLI006", name: "Ana Lima", email: "ana@email.com", phone: "(61) 94444-0006", type: "Pessoa Física", ads: 8, trades: 5, date: "18/06/2024", status: "Bloqueado" },
];

export default function Clientes() {
  return (
    <DashboardLayout>
      <div className="p-4 md:p-6 space-y-4 md:space-y-6">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-foreground">Clientes</h1>
          <p className="text-sm md:text-base text-muted-foreground">Gestão completa de usuários da plataforma</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          <MetricCard
            title="Total de Clientes Cadastrados"
            value="2.847"
            icon={<Users className="w-5 h-5 md:w-6 md:h-6 text-primary" />}
            iconBgColor="bg-primary/10"
          />
          <MetricCard
            title="Novos Clientes (30 dias)"
            value="156"
            icon={<UserPlus className="w-5 h-5 md:w-6 md:h-6 text-success" />}
            iconBgColor="bg-success/10"
            trend={{ value: "↑ 23.4%", isPositive: true }}
          />
          <MetricCard
            title="Clientes Ativos"
            value="1.892"
            icon={<UserCheck className="w-5 h-5 md:w-6 md:h-6 text-success" />}
            iconBgColor="bg-success/10"
          />
          <MetricCard
            title="Taxa de Conversão"
            value="4.8%"
            icon={<TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-primary" />}
            iconBgColor="bg-primary/10"
            trend={{ value: "↑ 0.5%", isPositive: true }}
          />
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2 sm:gap-3 p-3 md:p-4 bg-card rounded-xl border border-border/50">
          <div className="relative flex-1 min-w-0 sm:min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input type="text" placeholder="Buscar por nome, email ou ID" className="filter-input w-full pl-10" />
          </div>
          <div className="grid grid-cols-2 sm:flex gap-2 sm:gap-3">
            <select className="filter-input">
              <option value="">Status</option>
              <option value="ativo">Ativo</option>
              <option value="inativo">Inativo</option>
              <option value="bloqueado">Bloqueado</option>
            </select>
            <select className="filter-input">
              <option value="">Tipo</option>
              <option value="pf">Pessoa Física</option>
              <option value="loja">Loja</option>
            </select>
            <input type="date" className="filter-input" />
            <input type="text" placeholder="Cidade/Estado" className="filter-input" />
          </div>
          <Button className="w-full sm:w-auto">Filtrar</Button>
        </div>

        {/* Table */}
        <div className="bg-card rounded-xl border border-border/50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th className="hidden sm:table-cell">ID</th>
                  <th>Nome</th>
                  <th className="hidden md:table-cell">Email</th>
                  <th className="hidden lg:table-cell">Telefone</th>
                  <th className="hidden sm:table-cell">Tipo</th>
                  <th className="hidden lg:table-cell">Anúncios</th>
                  <th className="hidden lg:table-cell">Trocas</th>
                  <th className="hidden md:table-cell">Data</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client) => (
                  <tr key={client.id}>
                    <td className="hidden sm:table-cell font-medium">{client.id}</td>
                    <td>
                      <div>
                        <span className="block">{client.name}</span>
                        <span className="block sm:hidden text-xs text-muted-foreground">{client.email}</span>
                      </div>
                    </td>
                    <td className="hidden md:table-cell text-muted-foreground">{client.email}</td>
                    <td className="hidden lg:table-cell text-muted-foreground">{client.phone}</td>
                    <td className="hidden sm:table-cell">
                      <span className={`status-badge ${client.type === "Loja" ? "status-badge-primary" : "bg-muted text-muted-foreground"}`}>
                        {client.type}
                      </span>
                    </td>
                    <td className="hidden lg:table-cell text-center">{client.ads}</td>
                    <td className="hidden lg:table-cell text-center">{client.trades}</td>
                    <td className="hidden md:table-cell text-muted-foreground">{client.date}</td>
                    <td>
                      <span className={`status-badge text-xs ${
                        client.status === "Ativo" ? "status-badge-success" :
                        client.status === "Bloqueado" ? "status-badge-destructive" : "status-badge-warning"
                      }`}>
                        {client.status}
                      </span>
                    </td>
                    <td>
                      <div className="flex items-center gap-0.5 md:gap-1">
                        <button className="p-1 md:p-1.5 hover:bg-muted rounded-lg" title="Ver perfil"><Eye className="w-4 h-4 text-muted-foreground" /></button>
                        <button className="p-1 md:p-1.5 hover:bg-muted rounded-lg hidden sm:block" title="Editar"><Edit className="w-4 h-4 text-muted-foreground" /></button>
                        <button className="p-1 md:p-1.5 hover:bg-muted rounded-lg hidden sm:block" title="Bloquear"><Ban className="w-4 h-4 text-muted-foreground" /></button>
                        <button className="p-1 md:p-1.5 hover:bg-muted rounded-lg hidden md:block" title="Histórico"><History className="w-4 h-4 text-muted-foreground" /></button>
                        <button className="p-1 md:p-1.5 hover:bg-muted rounded-lg hidden md:block" title="Mensagem"><MessageSquare className="w-4 h-4 text-muted-foreground" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-4 md:px-6 py-3 md:py-4 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs sm:text-sm text-muted-foreground">Mostrando 1-6 de 2.847 clientes</p>
            <div className="flex items-center gap-1 md:gap-2">
              <button className="px-2 md:px-3 py-1 md:py-1.5 text-xs md:text-sm border border-border rounded-lg hover:bg-muted">Anterior</button>
              <button className="px-2 md:px-3 py-1 md:py-1.5 text-xs md:text-sm bg-primary text-primary-foreground rounded-lg">1</button>
              <button className="px-2 md:px-3 py-1 md:py-1.5 text-xs md:text-sm border border-border rounded-lg hover:bg-muted">2</button>
              <button className="px-2 md:px-3 py-1 md:py-1.5 text-xs md:text-sm border border-border rounded-lg hover:bg-muted hidden sm:block">3</button>
              <button className="px-2 md:px-3 py-1 md:py-1.5 text-xs md:text-sm border border-border rounded-lg hover:bg-muted">Próximo</button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
