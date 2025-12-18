import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Clientes from "./pages/Clientes";
import Marketplace from "./pages/Marketplace";
import Ecommerce from "./pages/Ecommerce";
import Anuncios from "./pages/Anuncios";
import Trocas from "./pages/Trocas";
import Assinaturas from "./pages/Assinaturas";
import Destaques from "./pages/Destaques";
import Acessorios from "./pages/Acessorios";
import Denuncias from "./pages/Denuncias";
import Relatorios from "./pages/Relatorios";
import Configuracoes from "./pages/Configuracoes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/anuncios" element={<Anuncios />} />
          <Route path="/trocas" element={<Trocas />} />
          <Route path="/assinaturas" element={<Assinaturas />} />
          <Route path="/destaques" element={<Destaques />} />
          <Route path="/acessorios" element={<Acessorios />} />
          <Route path="/denuncias" element={<Denuncias />} />
          <Route path="/relatorios" element={<Relatorios />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
