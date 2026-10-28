import Header from "../components/common/Header"
import Login from "../components/login/Login"
import Footer from "../components/common/Footer"

function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f6f7fa]">
      <Header />

      <main className="mx-auto w-full max-w-[1420px] flex-1 px-4 sm:px-6 lg:px-8">
        <Login />
      </main>

      <Footer />
    </div>
  );
}

export default LoginPage
