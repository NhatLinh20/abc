import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import CoursesPage from "./pages/CoursesPage.tsx";
import PracticePage from "./pages/PracticePage.tsx";
import ExamPrepPage from "./pages/ExamPrepPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/khoa-hoc" element={<CoursesPage />} />
          <Route path="/luyen-tap" element={<PracticePage />} />
          <Route path="/on-thi" element={<ExamPrepPage />} />
          <Route path="/gioi-thieu" element={<AboutPage />} />
          <Route path="/lien-he" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
