import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import CatalogPage from "../components/catalog/CatalogPage";
import { wheelCatalogConfig, wheels } from "../data/wheelcatalog/wheelCatalogData";

function WheelsCatalog() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f6f7fa]">
      <Header />

      <main className="mx-auto w-full max-w-[1420px] flex-1 px-4 py-5 sm:px-6 lg:px-8">
        <CatalogPage config={wheelCatalogConfig} products={wheels} />
      </main>

      <Footer />
    </div>
  );
}

export default WheelsCatalog;