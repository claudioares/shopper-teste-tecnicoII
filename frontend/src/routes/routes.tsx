import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Home from "@/Home";
import { Routes, Route, Outlet } from "react-router-dom";
import { HistoryPage } from "@/History";
import { About } from "@/abaout";

// Layout Wrapper
const Layout = () => {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<HistoryPage />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};
