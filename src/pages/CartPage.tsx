import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import CartContent from "../components/cart/Cart";

function CartPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f7f8]">
      <Header />

      <div className="w-full flex-1">
        <CartContent />
      </div>

      <Footer />
    </div>
  );
}

export default CartPage;