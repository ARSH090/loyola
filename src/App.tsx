import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import School from "./pages/School";
import Admission from "./pages/Admission";
import Academics from "./pages/Academics";
import Results from "./pages/Results";
import Gallery from "./pages/Gallery";
import Alumni from "./pages/Alumni";
import Career from "./pages/Career";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/school" element={<School />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/results" element={<Results />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
