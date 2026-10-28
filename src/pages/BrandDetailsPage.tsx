import Header from "../components/common/Header";
import BrandDetailsContent from "../components/brand/BrandDetails";
import Footer from "../components/common/Footer";

function BrandDetailsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f7f8]">
      <Header />

      <div className="w-full flex-1">
        <BrandDetailsContent />
      </div>

      <Footer />
    </div>
  );
}

export default BrandDetailsPage;