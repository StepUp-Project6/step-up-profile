import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";
import Beranda from "./pages/Beranda";
import Layanan from "./pages/Layanan";
import ProdukKami from "./pages/ProdukKami";
import Portofolio from "./pages/Portofolio";
import Artikel from "./pages/Artikel";
import Komunitas from "./pages/Komunitas";
import Tentang from "./pages/Tentang";
import HubungiKami from "./pages/HubungiKami";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/layanan" element={<Layanan />} />
          <Route path="/produk" element={<ProdukKami />} />
          <Route path="/portofolio" element={<Portofolio />} />
          <Route path="/artikel" element={<Artikel />} />
          <Route path="/komunitas" element={<Komunitas />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/hubungi-kami" element={<HubungiKami />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
