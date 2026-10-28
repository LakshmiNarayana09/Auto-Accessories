
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import PartOffersComp from '../components/partOffers/PartOffersComp'

function PartOffers() {
  return (
    <div className="min-h-screen bg-[#f6f7fa]">
      <Header />

      <main className="mx-auto max-w-[1420px] px-4 py-5 sm:px-6 lg:px-8">
        
        <PartOffersComp />
      </main>

      <Footer />
    </div>
  )
}

export default PartOffers
