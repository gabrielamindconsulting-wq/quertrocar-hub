import { Flag, CheckCircle, Clock, UserX, Search, Eye, UserCheck, Archive, AlertTriangle } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { Button } from "@/components/ui/button";

const reports = [
  { id: "DEN001", reporter: "João Silva", reported: "Pedro Costa", type: "Golpe", description: "Vendedor não enviou o produto após pagamento", priority: "Alta", status: "Pendente", date: "15/12/2024" },
  { id: "DEN002", reporter: "Maria Santos", reported: "Carlos Oliveira", type: "Anúncio Falso", description: "Fotos do produto não correspondem ao real", priority: "Média", status: "Em Análise", date: "14/12/2024" },
  { id: "DEN003", reporter: "Ana Lima", reported: "Music Pro Store", type: "Comportamento Inadequado", description: "Mensagens agressivas durante negociação", priority: "Média", status: "Pendente", date: "14/12/2024" },
  { id: "DEN004", reporter: "Roberto Alves", reported: "Diego Martins", type: "Produto Proibido", description: "Venda de equipamento falsificado", priority: "Alta", status: "Resolvida", date: "13/12/2024" },
  { id: "DEN005", reporter: "Fernanda Souza", reported: "Juliana Costa", type: "Golpe", description: "Produto com defeito não informado no anúncio", priority: "Alta", status: "Pendente", date: "12/12/2024" },
  { id: "DEN006", reporter: "Thiago Mendes", reported: "Amanda Rocha", type: "Outro", description: "Desistência da troca após acordo", priority: "Baixa", status: "Arquivada", date: "10/12/2024" },
];

export default function Denuncias() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Denúncias</h1>
          <p className="text-muted-foreground">Central de moderação e segurança</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Denúncias Pendentes"
            value="8"
            icon={<Flag className="w-6 h-6 text-warning" />}
            iconBgColor="bg-warning/10"
          />
          <MetricCard
            title="Resolvidas (7 dias)"
            value="23"
            icon={<CheckCircle className="w-6 h-6 text-success" />}
            iconBgColor="bg-success/10"
          />
          <MetricCard
            title="Tempo Médio de Resolução"
            value="1.8 dias"
            icon={<Clock className="w-6 h-6 text-primary" />}
            iconBgColor="bg-primary/10"
            trend={{ value: "↓ 0.3 dia", isPositive: true }}
          />
          <MetricCard
            title="Usuários Banidos (Mês)"
            value="5"
            icon={<UserX className="w-6 h-6 text-destructive" />}
            iconBgColor="bg-destructive/10"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 p-4 bg-card rounded-xl border border-border/50">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input type="text" placeholder="Buscar por usuário" className="filter-input w-full pl-10" />
          </div>
          <select className="filter-input">
            <option value="">Status</option>
            <option value="pendente">Pendente</option>
            <option value="analise">Em Análise</option>
            <option value="resolvida">Resolvida</option>
            <option value="arquivada">Arquivada</option>
          </select>
          <select className="filter-input">
            <option value="">Tipo</option>
            <option value="golpe">Golpe</option>
            <option value="anuncio-falso">Anúncio Falso</option>
            <option value="comportamento">Comportamento Inadequado</option>
            <option value="produto-proibido">Produto Proibido</option>
            <option value="outro">Outro</option>
          </select>
          <select className="filter-input">
            <option value="">Prioridade</option>
            <option value="alta">Alta</option>
            <option value="media">Média</option>
            <option value="baixa">Baixa</option>
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
                  <th>Denunciante</th>
                  <th>Denunciado</th>
                  <th>Tipo</th>
                  <th>Descrição</th>
                  <th>Prioridade</th>
                  <th>Status</th>
                  <th>Data</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report) => (
                  <tr key={report.id}>
                    <td className="font-medium">{report.id}</td>
                    <td>{report.reporter}</td>
                    <td className="font-medium text-destructive">{report.reported}</td>
                    <td>{report.type}</td>
                    <td className="max-w-[200px] truncate text-muted-foreground">{report.description}</td>
                    <td>
                      <span className={`status-badge ${
                        report.priority === "Alta" ? "status-badge-destructive" :
                        report.priority === "Média" ? "status-badge-warning" : "bg-muted text-muted-foreground"
                      }`}>
                        {report.priority}
                      </span>
                    </td>
                    <td>
                      <span className={`status-badge ${
                        report.status === "Resolvida" ? "status-badge-success" :
                        report.status === "Em Análise" ? "status-badge-primary" :
                        report.status === "Pendente" ? "status-badge-warning" : "bg-muted text-muted-foreground"
                      }`}>
                        {report.status}
                      </span>
                    </td>
                    <td className="text-muted-foreground">{report.date}</td>
                    <td>
                      <div className="flex items-center gap-1">
                        <button className="p-1.5 hover:bg-muted rounded-lg" title="Ver detalhes"><Eye className="w-4 h-4 text-muted-foreground" /></button>
                        <button className="p-1.5 hover:bg-muted rounded-lg" title="Atribuir"><UserCheck className="w-4 h-4 text-muted-foreground" /></button>
                        <button className="p-1.5 hover:bg-muted rounded-lg" title="Resolver"><AlertTriangle className="w-4 h-4 text-warning" /></button>
                        <button className="p-1.5 hover:bg-muted rounded-lg" title="Arquivar"><Archive className="w-4 h-4 text-muted-foreground" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 border-t border-border/50 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Mostrando 1-6 de 31 denúncias</p>
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
