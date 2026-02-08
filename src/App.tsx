import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import DocsLayout from "@/components/layout/DocsLayout";
import Index from "./pages/Index";
import Components from "./pages/Components";
import ComponentDetail from "./pages/ComponentDetail";
import Themes from "./pages/Themes";
import Playground from "./pages/Playground";
import Changelog from "./pages/Changelog";
import Examples from "./pages/Examples";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
// import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Contributing from "./pages/Contributing";
import DocsIndex from "./pages/DocsIndex";
import DocsGettingStarted from "./pages/DocsGettingStarted";
import DocsInstallation from "./pages/DocsInstallation";
import DocsComponent from "./pages/DocsComponent";
import DocsApi from "./pages/DocsApi";
import DocsGuides from "./pages/DocsGuides";
import DocsGuide from "./pages/DocsGuide";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/components" element={<Components />} />
            <Route path="/components/:name" element={<ComponentDetail />} />
            <Route path="/themes" element={<Themes />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/playground/:component" element={<Playground />} />
            <Route path="/changelog" element={<Changelog />} />
            <Route path="/examples" element={<Examples />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/careers" element={<Careers />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/contributing" element={<Contributing />} />

            <Route path="/docs" element={<DocsLayout />}>
              <Route index element={<DocsIndex />} />
              <Route path="getting-started" element={<DocsGettingStarted />} />
              <Route path="installation" element={<DocsInstallation />} />
              <Route path="components/:name" element={<DocsComponent />} />
              <Route path="api/:name" element={<DocsApi />} />
              <Route path="guides" element={<DocsGuides />} />
              <Route path="guides/:slug" element={<DocsGuide />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
