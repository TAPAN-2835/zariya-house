import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/layout/Preloader";
import { LenisProvider } from "@/components/providers/LenisProvider";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BookConsultation from "./pages/BookConsultation";
import Bridal from "./pages/Bridal";
import Category from "./pages/Category";
import SubCategory from "./pages/SubCategory";
import Collections from "./pages/Collections";
import CollectionDetail from "./pages/CollectionDetail";
import Contact from "./pages/Contact";
import Craftsmanship from "./pages/Craftsmanship";
import DesignDetail from "./pages/DesignDetail";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Search from "./pages/Search";
import Terms from "./pages/Terms";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <LenisProvider>
          <Preloader />
          <Navbar />
          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/book-consultation" element={<BookConsultation />} />
              <Route path="/bridal" element={<Bridal />} />
              <Route path="/category/:category" element={<Category />} />
              <Route path="/category/:category/:subcategory" element={<SubCategory />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/collections/:slug" element={<CollectionDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/craftsmanship" element={<Craftsmanship />} />
              <Route path="/design/:slug" element={<DesignDetail />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/search" element={<Search />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </LenisProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
