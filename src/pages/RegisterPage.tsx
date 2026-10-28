
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Register from "../components/register/Register";

function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f7f9]">
      <Header />

      <main className="flex-1">
        <Register />
      </main>

      <Footer />
    </div>
  );
}

export default RegisterPage;
