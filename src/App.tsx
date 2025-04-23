import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import Index from "./pages/Index";
import HomePage from "./pages/HomePage";
import Documentation from "./pages/Documentation";
import Playground from "./pages/Playground";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./components/design-system/ThemeProvider";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename='/Enterprise-Design-System'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/components' element={<Index />} />
            <Route path='/documentation' element={<Documentation />} />
            <Route path='/playground' element={<Playground />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
