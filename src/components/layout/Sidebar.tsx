import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutGrid,
  Users,
  Store,
  ShoppingCart,
  Megaphone,
  ArrowLeftRight,
  CreditCard,
  Star,
  Music,
  Flag,
  BarChart3,
  Settings,
} from "lucide-react";

const menuItems = [
  { icon: LayoutGrid, label: "Dashboard", path: "/" },
  { icon: Users, label: "Clientes", path: "/clientes" },
  { icon: Store, label: "Marketplace", path: "/marketplace" },
  { icon: ShoppingCart, label: "E-commerce", path: "/ecommerce" },
  { icon: Megaphone, label: "Anúncios", path: "/anuncios" },
  { icon: ArrowLeftRight, label: "Trocas (Matches)", path: "/trocas" },
  { icon: CreditCard, label: "Assinaturas", path: "/assinaturas" },
  { icon: Star, label: "Produtos em Destaque", path: "/destaques" },
  { icon: Music, label: "Acessórios", path: "/acessorios" },
  { icon: Flag, label: "Denúncias", path: "/denuncias" },
  { icon: BarChart3, label: "Relatórios", path: "/relatorios" },
  { icon: Settings, label: "Configurações", path: "/configuracoes" },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 min-h-screen bg-sidebar flex flex-col">
      {/* Logo */}
      <div className="px-6 py-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
            <ArrowLeftRight className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-sidebar-foreground">Quertrocar</h1>
            <p className="text-xs text-sidebar-muted">Dashboard Gerencial</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto scrollbar-thin">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`sidebar-item ${isActive ? "sidebar-item-active" : ""}`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-4 py-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-sidebar-accent flex items-center justify-center">
            <span className="text-sm font-medium text-sidebar-foreground">A</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-sidebar-foreground truncate">Admin</p>
            <p className="text-xs text-sidebar-muted truncate">admin@quertrocar.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
