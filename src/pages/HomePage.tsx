import Header from "../components/common/Header";
import HeroBanner from "../components/home/HeroBanner";
import ProductSection from "../components/home/ProductSection";
import { homeData } from "../data/home/homePromoCards";
import CategoryGrid from "../components/home/CategoryGrid";
import Footer from "../components/common/Footer";
import CategoryMenuGrid from "../components/home/CategoryMenuGrid";

function HomePage() {
  
  const [firstSection, ...otherSections] = homeData.productSections;

  return (
    <div className="min-h-screen bg-[#f6f7fa]">
      <Header />

      <main className="mx-auto max-w-[1420px] px-4 py-5 sm:px-6 lg:px-8">
        <HeroBanner />

        <div className="mt-6">
          <CategoryMenuGrid />
        </div>

        {firstSection && (
          <div className="mt-6">
            <ProductSection data={firstSection}  />
          </div>
        )}

        <div className="mt-6">
          <CategoryGrid />
        </div>

        {otherSections.map((section) => (
          <div key={section.id} className="mt-6">
            <ProductSection data={section}  />
          </div>
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;