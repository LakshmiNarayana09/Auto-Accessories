import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import MyCatalog from "../components/account/MyCatalog";

function MyCatalogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f7f8]">
      <Header />

      <div className="w-full flex-1">
        <MyCatalog />
      </div>

      <Footer />
    </div>
  );
}

export default MyCatalogPage;