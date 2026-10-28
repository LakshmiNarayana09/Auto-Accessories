import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Checkout from "../components/checkout/CheckOut";

function CheckoutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f7f8]">
      <Header />

      <div className="w-full flex-1">
        <Checkout />
      </div>

      <Footer />
    </div>
  )
}

export default CheckoutPage
