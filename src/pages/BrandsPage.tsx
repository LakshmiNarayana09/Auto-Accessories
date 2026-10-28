import Header from "../components/common/Header";
import Brands from "../components/brand/Brands";
import Footer from "../components/common/Footer";

function BrandsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f6f7fa]">
      <Header />

      <div className="mx-auto w-full max-w-[1420px] flex-1 px-4 py-5 sm:px-6 lg:px-8">
        <Brands />
      </div>

      <Footer />
    </div>
  );
}

export default BrandsPage;