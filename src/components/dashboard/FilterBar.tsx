import { Search, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FilterBar() {
  return (
    <div className="flex flex-wrap items-center gap-3 p-4 bg-card rounded-xl border border-border/50 animate-fade-in">
      <div className="relative flex-1 min-w-[200px]">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="ID do usuário ou vendedor"
          className="filter-input w-full pl-10"
        />
      </div>
      
      <select className="filter-input min-w-[150px]">
        <option value="">Categoria</option>
        <option value="guitarra">Guitarra</option>
        <option value="baixo">Baixo</option>
        <option value="bateria">Bateria</option>
        <option value="teclado">Teclado</option>
        <option value="violao">Violão</option>
        <option value="acessorios">Acessórios</option>
      </select>
      
      <input
        type="date"
        className="filter-input"
        placeholder="Data início"
      />
      
      <input
        type="date"
        className="filter-input"
        placeholder="Data fim"
      />
      
      <select className="filter-input min-w-[150px]">
        <option value="">Tipo de operação</option>
        <option value="venda">Venda</option>
        <option value="troca">Troca</option>
      </select>
      
      <Button className="gap-2">
        <RefreshCw className="w-4 h-4" />
        Atualizar Dados
      </Button>
    </div>
  );
}
