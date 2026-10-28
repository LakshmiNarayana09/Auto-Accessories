import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import SupplierRegistration from "../components/supplier/SupplierRegistration";

function SupplierRegistrationPage() {
  return (
   <div className="flex min-h-screen flex-col bg-[#f7f7f8]">
      <Header />

      <div className="w-full flex-1">
        <SupplierRegistration />
      </div>

      <Footer />
    </div>
  )
}

export default SupplierRegistrationPage
