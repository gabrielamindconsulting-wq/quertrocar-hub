import { Eye } from "lucide-react";

const transactions = [
  {
    id: 1,
    operation: "Venda",
    origin: "Marketplace",
    seller: "João Silva",
    buyer: "Maria Santos",
    product: "Fender Stratocaster",
    category: "Guitarra",
    value: "R$ 4.500",
    status: "Concluído",
    date: "15/12/2024",
  },
  {
    id: 2,
    operation: "Troca",
    origin: "Marketplace",
    seller: "Pedro Costa",
    buyer: "Ana Lima",
    product: "Gibson Les Paul",
    category: "Guitarra",
    value: "Troca",
    status: "Pendente",
    date: "14/12/2024",
  },
  {
    id: 3,
    operation: "Venda",
    origin: "E-commerce",
    seller: "Quertrocar",
    buyer: "Carlos Oliveira",
    product: "Encordoamento Elixir",
    category: "Acessórios",
    value: "R$ 89",
    status: "Concluído",
    date: "14/12/2024",
  },
  {
    id: 4,
    operation: "Venda",
    origin: "Marketplace",
    seller: "Loja Music Pro",
    buyer: "Fernanda Souza",
    product: "Yamaha PSR-E373",
    category: "Teclado",
    value: "R$ 1.890",
    status: "Pendente",
    date: "13/12/2024",
  },
  {
    id: 5,
    operation: "Troca",
    origin: "Marketplace",
    seller: "Roberto Alves",
    buyer: "Lucia Ferreira",
    product: "Pearl Export Series",
    category: "Bateria",
    value: "Troca",
    status: "Concluído",
    date: "12/12/2024",
  },
  {
    id: 6,
    operation: "Venda",
    origin: "E-commerce",
    seller: "Quertrocar",
    buyer: "Thiago Mendes",
    product: "Cabo Monster Rock",
    category: "Acessórios",
    value: "R$ 245",
    status: "Concluído",
    date: "12/12/2024",
  },
  {
    id: 7,
    operation: "Venda",
    origin: "Marketplace",
    seller: "Amanda Rocha",
    buyer: "Felipe Santos",
    product: "Baixo Fender Jazz",
    category: "Baixo",
    value: "R$ 3.200",
    status: "Pendente",
    date: "11/12/2024",
  },
  {
    id: 8,
    operation: "Troca",
    origin: "Marketplace",
    seller: "Diego Martins",
    buyer: "Juliana Costa",
    product: "Violão Taylor 114",
    category: "Violão",
    value: "Troca",
    status: "Concluído",
    date: "10/12/2024",
  },
];

export function TransactionsTable() {
  return (
    <div className="bg-card rounded-xl border border-border/50 overflow-hidden animate-fade-in">
      <div className="px-6 py-4 border-b border-border/50">
        <h2 className="text-lg font-semibold text-foreground">Transações Recentes</h2>
      </div>
      
      <div className="overflow-x-auto">
        <table className="data-table">
          <thead>
            <tr>
              <th>Operação</th>
              <th>Origem</th>
              <th>Vendedor</th>
              <th>Comprador</th>
              <th>Produto</th>
              <th>Categoria</th>
              <th>Valor</th>
              <th>Status</th>
              <th>Data</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="font-medium">{transaction.operation}</td>
                <td>
                  <span className={`status-badge ${
                    transaction.origin === "Marketplace" 
                      ? "status-badge-primary" 
                      : "bg-purple-100 text-purple-700"
                  }`}>
                    {transaction.origin}
                  </span>
                </td>
                <td>{transaction.seller}</td>
                <td>{transaction.buyer}</td>
                <td className="max-w-[200px] truncate">{transaction.product}</td>
                <td>{transaction.category}</td>
                <td className="font-medium">{transaction.value}</td>
                <td>
                  <span className={`status-badge ${
                    transaction.status === "Concluído" 
                      ? "status-badge-success" 
                      : "status-badge-warning"
                  }`}>
                    {transaction.status}
                  </span>
                </td>
                <td className="text-muted-foreground">{transaction.date}</td>
                <td>
                  <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                    <Eye className="w-4 h-4 text-muted-foreground" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="px-6 py-4 border-t border-border/50 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">Mostrando 1-8 de 156 transações</p>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 text-sm border border-border rounded-lg hover:bg-muted transition-colors">
            Anterior
          </button>
          <button className="px-3 py-1.5 text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            1
          </button>
          <button className="px-3 py-1.5 text-sm border border-border rounded-lg hover:bg-muted transition-colors">
            2
          </button>
          <button className="px-3 py-1.5 text-sm border border-border rounded-lg hover:bg-muted transition-colors">
            3
          </button>
          <button className="px-3 py-1.5 text-sm border border-border rounded-lg hover:bg-muted transition-colors">
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
}
