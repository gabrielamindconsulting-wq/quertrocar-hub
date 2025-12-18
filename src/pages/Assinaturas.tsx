import { CreditCard, DollarSign, TrendingDown, UserPlus, Search, Eye, Edit, XCircle, Plus } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { Button } from "@/components/ui/button";

const subscriptions = [
  { id: "SUB001", client: "Music Pro Store", plan: "Loja", value: "R$ 199/mês", start: "01/06/2024", nextBilling: "01/01/2025", status: "Ativo" },
  { id: "SUB002", client: "João Silva", plan: "Pro", value: "R$ 49/mês", start: "15/08/2024", nextBilling: "15/01/2025", status: "Ativo" },
  { id: "SUB003", client: "Som & Cia Instrumentos", plan: "Loja", value: "R$ 199/mês", start: "10/03/2024", nextBilling: "10/01/2025", status: "Ativo" },
  { id: "SUB004", client: "Pedro Costa", plan: "Básico", value: "R$ 19/mês", start: "20/09/2024", nextBilling: "20/01/2025", status: "Inadimplente" },
  { id: "SUB005", client: "Maria Santos", plan: "Pro", value: "R$ 49/mês", start: "05/07/2024", nextBilling: "-", status: "Cancelado" },
  { id: "SUB006", client: "Carlos Oliveira", plan: "Pro", value: "R$ 49/mês", start: "12/12/2024", nextBilling: "12/01/2025", status: "Trial" },
];

const plans = [
  { name: "Básico", price: "R$ 19/mês", benefits: ["5 anúncios ativos", "Matches ilimitados", "Suporte por email"] },
  { name: "Pro", price: "R$ 49/mês", benefits: ["20 anúncios ativos", "Matches ilimitados", "3 destaques/mês", "Suporte prioritário"] },
  { name: "Loja", price: "R$ 199/mês", benefits: ["Anúncios ilimitados", "10 destaques/mês", "API de integração", "Gerente de conta"] },
];

export default function Assinaturas() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Assinaturas</h1>
            <p className="text-muted-foreground">Gestão de planos e assinantes</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Novo Plano
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Total de Assinantes Ativos"
            value="342"
            icon={<CreditCard className="w-6 h-6 text-primary" />}
            iconBgColor="bg-primary/10"
            trend={{ value: "↑ 5.1%", isPositive: true }}
          />
          <MetricCard
            title="MRR (Receita Recorrente)"
            value="R$ 28.450"
            icon={<DollarSign className="w-6 h-6 text-success" />}
            iconBgColor="bg-success/10"
            trend={{ value: "↑ 8.7%", isPositive: true }}
          />
          <MetricCard
            title="Churn Rate"
            value="3.2%"
            icon={<TrendingDown className="w-6 h-6 text-warning" />}
            iconBgColor="bg-warning/10"
            trend={{ value: "↓ 0.5%", isPositive: true }}
          />
          <MetricCard
            title="Novas Assinaturas (Mês)"
            value="48"
            icon={<UserPlus className="w-6 h-6 text-success" />}
            iconBgColor="bg-success/10"
            trend={{ value: "↑ 12.3%", isPositive: true }}
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 p-4 bg-card rounded-xl border border-border/50">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input type="text" placeholder="Buscar por cliente" className="filter-input w-full pl-10" />
          </div>
          <select className="filter-input">
            <option value="">Plano</option>
            <option value="basico">Básico</option>
            <option value="pro">Pro</option>
            <option value="loja">Loja</option>
          </select>
          <select className="filter-input">
            <option value="">Status</option>
            <option value="ativo">Ativo</option>
            <option value="cancelado">Cancelado</option>
            <option value="inadimplente">Inadimplente</option>
            <option value="trial">Trial</option>
          </select>
          <input type="date" className="filter-input" />
          <Button>Filtrar</Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Subscriptions Table */}
          <div className="lg:col-span-2 bg-card rounded-xl border border-border/50 overflow-hidden">
            <div className="px-6 py-4 border-b border-border/50">
              <h2 className="text-lg font-semibold">Assinaturas</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Cliente</th>
                    <th>Plano</th>
                    <th>Valor</th>
                    <th>Início</th>
                    <th>Próx. Cobrança</th>
                    <th>Status</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {subscriptions.map((sub) => (
                    <tr key={sub.id}>
                      <td className="font-medium">{sub.id}</td>
                      <td>{sub.client}</td>
                      <td>
                        <span className={`status-badge ${
                          sub.plan === "Loja" ? "status-badge-primary" :
                          sub.plan === "Pro" ? "bg-purple-100 text-purple-700" : "bg-muted text-muted-foreground"
                        }`}>
                          {sub.plan}
                        </span>
                      </td>
                      <td className="font-medium">{sub.value}</td>
                      <td className="text-muted-foreground">{sub.start}</td>
                      <td className="text-muted-foreground">{sub.nextBilling}</td>
                      <td>
                        <span className={`status-badge ${
                          sub.status === "Ativo" ? "status-badge-success" :
                          sub.status === "Trial" ? "status-badge-primary" :
                          sub.status === "Inadimplente" ? "status-badge-warning" : "status-badge-destructive"
                        }`}>
                          {sub.status}
                        </span>
                      </td>
                      <td>
                        <div className="flex items-center gap-1">
                          <button className="p-1.5 hover:bg-muted rounded-lg"><Eye className="w-4 h-4 text-muted-foreground" /></button>
                          <button className="p-1.5 hover:bg-muted rounded-lg"><Edit className="w-4 h-4 text-muted-foreground" /></button>
                          <button className="p-1.5 hover:bg-muted rounded-lg"><XCircle className="w-4 h-4 text-muted-foreground" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Plans Panel */}
          <div className="bg-card rounded-xl border border-border/50 overflow-hidden">
            <div className="px-6 py-4 border-b border-border/50 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Planos Disponíveis</h2>
              <Button variant="outline" size="sm">Editar</Button>
            </div>
            <div className="p-4 space-y-4">
              {plans.map((plan, idx) => (
                <div key={idx} className="p-4 border border-border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{plan.name}</h3>
                    <span className="text-primary font-bold">{plan.price}</span>
                  </div>
                  <ul className="space-y-1">
                    {plan.benefits.map((benefit, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-success" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
