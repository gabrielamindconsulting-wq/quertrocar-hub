import { ArrowLeftRight, CheckCircle, TrendingUp, Clock, Search, Eye, Bell, X } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { Button } from "@/components/ui/button";

const matches = [
  { 
    id: "MT001", 
    userA: "João Silva", instrumentA: "Fender Stratocaster 2019",
    userB: "Pedro Costa", instrumentB: "Gibson Les Paul Standard",
    status: "Aceito", suggestedDate: "10/12/2024", responseDate: "12/12/2024"
  },
  { 
    id: "MT002", 
    userA: "Maria Santos", instrumentA: "Marshall JCM800 Head",
    userB: "Ana Lima", instrumentB: "Fender Twin Reverb",
    status: "Concluído", suggestedDate: "08/12/2024", responseDate: "09/12/2024"
  },
  { 
    id: "MT003", 
    userA: "Carlos Oliveira", instrumentA: "Pearl Export 5pc",
    userB: "Roberto Alves", instrumentB: "Mapex Saturn V",
    status: "Sugerido", suggestedDate: "14/12/2024", responseDate: "-"
  },
  { 
    id: "MT004", 
    userA: "Fernanda Souza", instrumentA: "Baixo Fender Jazz",
    userB: "Thiago Mendes", instrumentB: "Baixo Music Man StingRay",
    status: "Visualizado", suggestedDate: "13/12/2024", responseDate: "-"
  },
  { 
    id: "MT005", 
    userA: "Diego Martins", instrumentA: "Violão Taylor 114ce",
    userB: "Juliana Costa", instrumentB: "Violão Martin D-28",
    status: "Recusado", suggestedDate: "05/12/2024", responseDate: "07/12/2024"
  },
  { 
    id: "MT006", 
    userA: "Amanda Rocha", instrumentA: "Teclado Nord Stage 3",
    userB: "Felipe Santos", instrumentB: "Yamaha Montage 8",
    status: "Aceito", suggestedDate: "11/12/2024", responseDate: "13/12/2024"
  },
];

export default function Trocas() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Trocas (Matches)</h1>
          <p className="text-muted-foreground">Monitorar o sistema inteligente de matching - o diferencial da plataforma</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Total de Matches Gerados"
            value="456"
            icon={<ArrowLeftRight className="w-6 h-6 text-primary" />}
            iconBgColor="bg-primary/10"
            trend={{ value: "↑ 22.3%", isPositive: true }}
          />
          <MetricCard
            title="Matches Aceitos"
            value="87"
            icon={<CheckCircle className="w-6 h-6 text-success" />}
            iconBgColor="bg-success/10"
            trend={{ value: "↑ 15.2%", isPositive: true }}
          />
          <MetricCard
            title="Taxa de Conversão"
            value="19.1%"
            icon={<TrendingUp className="w-6 h-6 text-success" />}
            iconBgColor="bg-success/10"
            trend={{ value: "↑ 3.4%", isPositive: true }}
          />
          <MetricCard
            title="Tempo Médio de Resposta"
            value="2.4 dias"
            icon={<Clock className="w-6 h-6 text-primary" />}
            iconBgColor="bg-primary/10"
            trend={{ value: "↓ 0.5 dia", isPositive: true }}
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 p-4 bg-card rounded-xl border border-border/50">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input type="text" placeholder="Buscar por usuário" className="filter-input w-full pl-10" />
          </div>
          <select className="filter-input">
            <option value="">Status do match</option>
            <option value="sugerido">Sugerido</option>
            <option value="visualizado">Visualizado</option>
            <option value="aceito">Aceito</option>
            <option value="recusado">Recusado</option>
            <option value="concluido">Concluído</option>
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
                  <th>ID Match</th>
                  <th>Usuário A</th>
                  <th>Instrumento A</th>
                  <th>Usuário B</th>
                  <th>Instrumento B</th>
                  <th>Status</th>
                  <th>Data Sugestão</th>
                  <th>Data Resposta</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {matches.map((match) => (
                  <tr key={match.id}>
                    <td className="font-medium">{match.id}</td>
                    <td>{match.userA}</td>
                    <td className="max-w-[150px] truncate text-muted-foreground">{match.instrumentA}</td>
                    <td>{match.userB}</td>
                    <td className="max-w-[150px] truncate text-muted-foreground">{match.instrumentB}</td>
                    <td>
                      <span className={`status-badge ${
                        match.status === "Concluído" ? "status-badge-success" :
                        match.status === "Aceito" ? "status-badge-primary" :
                        match.status === "Visualizado" ? "status-badge-warning" :
                        match.status === "Sugerido" ? "bg-muted text-muted-foreground" : "status-badge-destructive"
                      }`}>
                        {match.status}
                      </span>
                    </td>
                    <td className="text-muted-foreground">{match.suggestedDate}</td>
                    <td className="text-muted-foreground">{match.responseDate}</td>
                    <td>
                      <div className="flex items-center gap-1">
                        <button className="p-1.5 hover:bg-muted rounded-lg" title="Ver detalhes"><Eye className="w-4 h-4 text-muted-foreground" /></button>
                        <button className="p-1.5 hover:bg-muted rounded-lg" title="Enviar lembrete"><Bell className="w-4 h-4 text-muted-foreground" /></button>
                        <button className="p-1.5 hover:bg-muted rounded-lg" title="Cancelar match"><X className="w-4 h-4 text-muted-foreground" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 border-t border-border/50 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Mostrando 1-6 de 456 matches</p>
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
