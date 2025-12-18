import { Settings, DollarSign, CreditCard, Bell, Plug, Users, Save, Upload } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";

const admins = [
  { name: "Admin Principal", email: "admin@quertrocar.com", role: "Super Admin", status: "Ativo" },
  { name: "João Moderador", email: "joao@quertrocar.com", role: "Moderador", status: "Ativo" },
  { name: "Maria Suporte", email: "maria@quertrocar.com", role: "Suporte", status: "Ativo" },
];

export default function Configuracoes() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Configurações</h1>
          <p className="text-muted-foreground">Ajustes gerais da plataforma</p>
        </div>

        <Tabs defaultValue="geral" className="space-y-6">
          <TabsList className="bg-muted/50 p-1">
            <TabsTrigger value="geral" className="gap-2"><Settings className="w-4 h-4" />Geral</TabsTrigger>
            <TabsTrigger value="taxas" className="gap-2"><DollarSign className="w-4 h-4" />Taxas</TabsTrigger>
            <TabsTrigger value="pagamentos" className="gap-2"><CreditCard className="w-4 h-4" />Pagamentos</TabsTrigger>
            <TabsTrigger value="notificacoes" className="gap-2"><Bell className="w-4 h-4" />Notificações</TabsTrigger>
            <TabsTrigger value="integracoes" className="gap-2"><Plug className="w-4 h-4" />Integrações</TabsTrigger>
            <TabsTrigger value="admins" className="gap-2"><Users className="w-4 h-4" />Usuários Admin</TabsTrigger>
          </TabsList>

          <TabsContent value="geral" className="space-y-6">
            <div className="bg-card rounded-xl border border-border/50 p-6">
              <h3 className="text-lg font-semibold mb-4">Informações da Plataforma</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome da Plataforma</label>
                  <input type="text" defaultValue="Quertrocar" className="filter-input w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">URL</label>
                  <input type="text" defaultValue="https://quertrocar.com.br" className="filter-input w-full" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">Descrição</label>
                  <textarea rows={3} defaultValue="Plataforma de compra, venda e troca de instrumentos musicais" className="filter-input w-full resize-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Logo</label>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🎸</span>
                    </div>
                    <Button variant="outline" className="gap-2">
                      <Upload className="w-4 h-4" />
                      Alterar Logo
                    </Button>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="font-medium mb-4">Configurações de SEO</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Meta Title</label>
                    <input type="text" defaultValue="Quertrocar - Compra, Venda e Troca de Instrumentos Musicais" className="filter-input w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Meta Description</label>
                    <textarea rows={2} defaultValue="A maior plataforma de instrumentos musicais usados do Brasil. Compre, venda ou troque seu instrumento." className="filter-input w-full resize-none" />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <Button className="gap-2"><Save className="w-4 h-4" />Salvar Alterações</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="taxas" className="space-y-6">
            <div className="bg-card rounded-xl border border-border/50 p-6">
              <h3 className="text-lg font-semibold mb-4">Taxas e Comissões</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Taxa de Venda Marketplace (%)</label>
                  <input type="number" defaultValue="10" className="filter-input w-full" />
                  <p className="text-xs text-muted-foreground mt-1">Percentual cobrado sobre cada venda</p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Taxa de Troca (R$)</label>
                  <input type="number" defaultValue="0" className="filter-input w-full" />
                  <p className="text-xs text-muted-foreground mt-1">Valor fixo por troca realizada</p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Destaque 7 dias (R$)</label>
                  <input type="number" defaultValue="49" className="filter-input w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Destaque 15 dias (R$)</label>
                  <input type="number" defaultValue="89" className="filter-input w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Destaque 30 dias (R$)</label>
                  <input type="number" defaultValue="149" className="filter-input w-full" />
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <Button className="gap-2"><Save className="w-4 h-4" />Salvar Alterações</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="pagamentos" className="space-y-6">
            <div className="bg-card rounded-xl border border-border/50 p-6">
              <h3 className="text-lg font-semibold mb-4">Integração Pagar.me</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">API Key (Produção)</label>
                  <input type="password" defaultValue="ak_live_xxxxxxxxxxxxxxxx" className="filter-input w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Encryption Key</label>
                  <input type="password" defaultValue="ek_live_xxxxxxxxxxxxxxxx" className="filter-input w-full" />
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="font-medium mb-4">Métodos de Pagamento</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span>Cartão de Crédito</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span>PIX</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span>Boleto Bancário</span>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <Button className="gap-2"><Save className="w-4 h-4" />Salvar Alterações</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="notificacoes" className="space-y-6">
            <div className="bg-card rounded-xl border border-border/50 p-6">
              <h3 className="text-lg font-semibold mb-4">Configurações de Notificações</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <p className="font-medium">Email de Boas-vindas</p>
                    <p className="text-sm text-muted-foreground">Enviar email quando um novo usuário se cadastrar</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <p className="font-medium">Notificação de Novo Match</p>
                    <p className="text-sm text-muted-foreground">Avisar usuários sobre novos matches encontrados</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <p className="font-medium">Alerta de Venda Concluída</p>
                    <p className="text-sm text-muted-foreground">Notificar vendedor e comprador sobre conclusão</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <p className="font-medium">Alertas Administrativos</p>
                    <p className="text-sm text-muted-foreground">Enviar alertas sobre denúncias e problemas</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <Button className="gap-2"><Save className="w-4 h-4" />Salvar Alterações</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="integracoes" className="space-y-6">
            <div className="bg-card rounded-xl border border-border/50 p-6">
              <h3 className="text-lg font-semibold mb-4">Integrações Ativas</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl">📦</span>
                    </div>
                    <div>
                      <p className="font-medium">Bling ERP</p>
                      <p className="text-sm text-muted-foreground">Última sincronização: 15/12/2024 14:32</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="status-badge status-badge-success">Conectado</span>
                    <Button variant="outline" size="sm">Configurar</Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl">📊</span>
                    </div>
                    <div>
                      <p className="font-medium">Google Analytics</p>
                      <p className="text-sm text-muted-foreground">Tracking ID: UA-XXXXXXXX-1</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="status-badge status-badge-success">Conectado</span>
                    <Button variant="outline" size="sm">Configurar</Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl">📧</span>
                    </div>
                    <div>
                      <p className="font-medium">SendGrid</p>
                      <p className="text-sm text-muted-foreground">Serviço de envio de emails</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="status-badge bg-muted text-muted-foreground">Desconectado</span>
                    <Button variant="outline" size="sm">Conectar</Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="admins" className="space-y-6">
            <div className="bg-card rounded-xl border border-border/50 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Usuários Administradores</h3>
                <Button className="gap-2">
                  <Users className="w-4 h-4" />
                  Adicionar Admin
                </Button>
              </div>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Nível de Permissão</th>
                    <th>Status</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {admins.map((admin, idx) => (
                    <tr key={idx}>
                      <td className="font-medium">{admin.name}</td>
                      <td className="text-muted-foreground">{admin.email}</td>
                      <td>
                        <span className={`status-badge ${
                          admin.role === "Super Admin" ? "status-badge-primary" :
                          admin.role === "Moderador" ? "bg-purple-100 text-purple-700" : "bg-muted text-muted-foreground"
                        }`}>
                          {admin.role}
                        </span>
                      </td>
                      <td>
                        <span className="status-badge status-badge-success">{admin.status}</span>
                      </td>
                      <td>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">Editar</Button>
                          <Button variant="outline" size="sm" className="text-destructive">Remover</Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
