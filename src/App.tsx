import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./utils/routes";
import { PROFILE_NAV_ITEMS } from "./data/account/accountData";
import { MANAGER_NAV_ITEMS } from "./data/manager/managerData";
import HomePage from "./pages/HomePage";
import Catalog2 from "./pages/Catalog2";
import PartOffers from "./pages/PartOffers";
import BatteryCatalogPage from "./pages/BatteryCatalogPage";
import WheelsCatalog from "./pages/WheelsCatalog";
import BulbsCatalogPage from "./pages/BulbCatalogPage";
import BrandsPage from "./pages/BrandsPage";
import BrandDetailsPage from "./pages/BrandDetailsPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SupplierRegistrationPage from "./pages/SupplierRegistrationPage";
import ForbiddenPage from "./pages/ForbiddenPage";
import SiteLayout from "./components/common/SiteLayout";
import RequireRole from "./components/common/RequireRole";
import AccountShell from "./components/account/AccountShell";
import MyCatalog from "./components/account/MyCatalog";
import PriceLists from "./components/account/PriceLists";
import Orders from "./components/account/Orders";
import Stores from "./components/account/Stores";
import Requisites from "./components/account/Requisites";
import Receipts from "./components/account/Receipts";
import Chats from "./components/account/Chats";
import Accounting from "./components/account/Accounting";
import ProfileSettings from "./components/profile/ProfileSettings";
import Addresses from "./components/profile/Addresses";
import Suppliers from "./components/manager/Suppliers";
import Customers from "./components/manager/Customers";
import ManagerOrders from "./components/manager/ManagerOrders";



function App() {
  return (
    <div>
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/parts/original" element={<Catalog2 />} />
        <Route path="/motor-oils" element={<PartOffers />} />
        <Route path="/batteries" element={<BatteryCatalogPage />} />
        <Route path="/wheels" element={<WheelsCatalog />} />
        <Route path="/bulbs" element={<BulbsCatalogPage />} />
        <Route path="/brands" element={<BrandsPage />} />
        <Route path="/brands/:id" element={<BrandDetailsPage />} />
        <Route path="/parts/maintenance" element={<WheelsCatalog />} />
        <Route path="/parts/non-original" element={<BatteryCatalogPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path={ROUTES.login} element={<LoginPage />} />
        <Route path={ROUTES.register} element={<RegisterPage />} />
        <Route path={ROUTES.supplierRegistration} element={<SupplierRegistrationPage />} />

        
        <Route element={<SiteLayout />}>
          <Route path={ROUTES.forbidden} element={<ForbiddenPage />} />

          
          <Route element={<RequireRole allowed={["supplier"]} />}>
            <Route element={<AccountShell />}>
              <Route path={ROUTES.accountCatalog} element={<MyCatalog />} />
              <Route path={ROUTES.accountPriceLists} element={<PriceLists />} />
              <Route path={ROUTES.accountOrders} element={<Orders />} />
              <Route path={ROUTES.accountStores} element={<Stores />} />
              <Route path={ROUTES.accountRequisites} element={<Requisites />} />
              <Route path={ROUTES.accountReceipts} element={<Receipts />} />
              <Route path={ROUTES.accountChats} element={<Chats />} />
              <Route path={ROUTES.accountAccounting} element={<Accounting />} />
            </Route>
          </Route>

         
          <Route element={<RequireRole allowed={["buyer"]} />}>
            <Route element={<AccountShell navItems={PROFILE_NAV_ITEMS} />}>
              <Route path={ROUTES.profile} element={<ProfileSettings />} />
              <Route path={ROUTES.profileOrders} element={<Orders />} />
              <Route path={ROUTES.profileAddresses} element={<Addresses />} />
              <Route path={ROUTES.profileRequisites} element={<Requisites />} />
              <Route path={ROUTES.profileChats} element={<Chats />} />
            </Route>
          </Route>

          
          <Route element={<RequireRole allowed={["manager"]} />}>
            <Route element={<AccountShell navItems={MANAGER_NAV_ITEMS} />}>
              <Route path={ROUTES.managerSuppliers} element={<Suppliers />} />
              <Route path={ROUTES.managerCustomers} element={<Customers />} />
              <Route path={ROUTES.managerOrders} element={<ManagerOrders />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;