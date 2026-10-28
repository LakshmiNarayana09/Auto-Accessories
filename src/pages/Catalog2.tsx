import Header from "../components/common/Header";
import VehicleCatalog from "../components/catalog2/VehicleCatalog";
import Footer from "../components/common/Footer";

function Catalog2() {
  return (
    <div className="min-h-screen bg-[#f6f7fa]">
      <Header />

      <main className="mx-auto max-w-[1420px] px-4 py-5 sm:px-6 lg:px-8">
        
        <VehicleCatalog />
      </main>

      <Footer />
    </div>
  )
}

export default Catalog2
