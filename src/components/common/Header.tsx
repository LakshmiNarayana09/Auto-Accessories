
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import {
  ChevronDown,
  MapPin,
  Menu,
  Phone,
  Search,
  ShoppingCart,
  UserRound,
  Settings2,
  X,
} from "lucide-react";
import CategoriesMenu from "./CategoriesMenu";

interface NavigationItem {
  label: string;
  path: string;
}

const navigation: NavigationItem[] = [
  { label: "Parts for Maintenance", path: "/parts/maintenance" },
  { label: "Motor Oils", path: "/motor-oils" },
  { label: "Original Parts", path: "/parts/original" },
  { label: "Non-Original Parts", path: "/parts/non-original" },
  { label: "Bulbs", path: "/bulbs" },
  { label: "Batteries", path: "/batteries" },
  { label: "My Catalog", path: "/account/catalog" },
  { label: "Profile", path: "/profile" },
  { label: "Manager", path: "/manager/suppliers" },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);

  const desktopNavRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const cartCount = useSelector((state: RootState) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  const closeAll = () => {
    setMobileMenuOpen(false);
    setCategoriesOpen(false);
    setMobileCategoriesOpen(false);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    closeAll();
  };

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    if (!categoriesOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        desktopNavRef.current &&
        !desktopNavRef.current.contains(event.target as Node)
      ) {
        setCategoriesOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setCategoriesOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [categoriesOpen]);

  useEffect(() => {
    setCategoriesOpen(false);
  }, [location.pathname]);

  return (
    <header className="w-full bg-white">
      <div className="border-b border-gray-100">
        <div className="mx-auto flex max-w-[1420px] items-center gap-4 px-4 py-3 lg:px-6">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-200 lg:hidden"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="flex shrink-0 items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6254d9] text-white">
              <Settings2 size={21} />
            </div>
            <span className="text-xl font-bold tracking-wide text-[#5548d5]">
              ONER<span className="text-[#5548d5]">.RU</span>
            </span>
          </button>

          <div className="relative hidden min-w-0 flex-1 md:block">
            <input
              type="text"
              placeholder="Enter part number or VIN"
              className="h-10 w-full rounded-md border border-gray-200 bg-[#f8f8fa] px-4 pr-10 text-xs text-gray-700 outline-none transition focus:border-[#6758dc]"
            />
            <Search
              size={17}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5548d5]"
            />
          </div>

          <div className="hidden items-center gap-2 whitespace-nowrap text-[11px] text-gray-600 xl:flex">
            <MapPin size={16} className="text-[#6254d9]" />
            <span>Saint Petersburg</span>
          </div>

          <div className="hidden items-center gap-2 whitespace-nowrap text-[11px] font-medium text-gray-700 lg:flex">
            <Phone size={16} className="text-[#6254d9]" />
            <span>+7 (347) 229-46-45</span>
          </div>

          <button
            type="button"
            className="hidden items-center gap-2 whitespace-nowrap text-[11px] text-gray-700 lg:flex"
            onClick={() => navigate("/login")}
          >
            <UserRound size={16} className="text-[#6254d9]" />
            <span>Login</span>
          </button>

          <button
            type="button"
            className="hidden items-center gap-2 whitespace-nowrap text-[11px] text-gray-700 lg:flex"
            onClick={() => navigate("/register")}
          >
            <UserRound size={16} className="text-[#6254d9]" />
            <span>Register</span>
          </button>

          <button
            type="button"
            onClick={() => navigate("/cart")}
            className="relative flex h-10 shrink-0 items-center gap-2 rounded-md bg-[#f6f6f8] px-3 text-xs font-medium text-gray-700"
          >
            <ShoppingCart size={17} className="text-[#6254d9]" />
            <span className="hidden sm:block">Cart</span>
            <span
              className="flex h-4 min-w-4 items-center justify-center rounded-full bg-orange-500 px-1 text-[9px] font-bold text-white"
              aria-label={`${cartCount} items in cart`}
            >
              {cartCount}
            </span>
          </button>
        </div>
      </div>

      <div
        ref={desktopNavRef}
        className="relative z-40 hidden border-b border-gray-100 shadow-sm lg:block"
      >
        <div className="mx-auto flex max-w-[1420px] items-center gap-2 bg-white px-6 py-2">
          <button
            type="button"
            onClick={() => setCategoriesOpen((prev) => !prev)}
            aria-haspopup="menu"
            aria-expanded={categoriesOpen}
            className="flex h-8 shrink-0 items-center gap-2 rounded-md bg-[#6254d9] px-4 text-[11px] font-medium text-white transition hover:bg-[#5548d5]"
          >
            {categoriesOpen ? <X size={14} /> : <Menu size={14} />}
            All Categories
            <ChevronDown
              size={13}
              className={`transition-transform ${categoriesOpen ? "rotate-180" : ""}`}
            />
          </button>

          {navigation.map((item) => {
            const active = isActive(item.path);

            return (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavigation(item.path)}
                className={`h-8 whitespace-nowrap rounded-md px-3 text-[10px] font-medium transition ${
                  active
                    ? "bg-gray-400 !text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {categoriesOpen && (
          <div
            aria-hidden="true"
            onClick={() => setCategoriesOpen(false)}
            className="absolute left-0 right-0 top-full z-0 h-screen bg-black/20"
          />
        )}

        {categoriesOpen && (
          <div className="absolute left-0 right-0 top-full z-10 mx-auto max-w-[1420px] px-6 pt-2">
            <CategoriesMenu
              activePath={location.pathname}
              onSelect={handleNavigation}
            />
          </div>
        )}
      </div>

      {mobileMenuOpen && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-gray-200 bg-white px-4 py-4 shadow-lg lg:hidden">
          <div className="relative mb-3">
            <input
              type="text"
              placeholder="Enter part number or VIN"
              className="h-10 w-full rounded-md border border-gray-200 bg-gray-50 px-3 pr-10 text-xs outline-none"
            />
            <Search
              size={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6254d9]"
            />
          </div>

          <button
            type="button"
            onClick={() => setMobileCategoriesOpen((prev) => !prev)}
            aria-expanded={mobileCategoriesOpen}
            className="mb-2 flex w-full items-center gap-2 rounded-md bg-[#6254d9] px-4 py-3 text-xs font-medium text-white"
          >
            <Menu size={15} />
            All Categories
            <ChevronDown
              size={15}
              className={`ml-auto transition-transform ${mobileCategoriesOpen ? "rotate-180" : ""}`}
            />
          </button>

          {mobileCategoriesOpen && (
            <div className="mb-3">
              <CategoriesMenu
                variant="inline"
                activePath={location.pathname}
                onSelect={handleNavigation}
              />
            </div>
          )}

          <div className="grid grid-cols-2 gap-1">
            {navigation.map((item) => {
              const active = isActive(item.path);

              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleNavigation(item.path)}
                  className={`rounded-md px-2 py-3 text-left text-xs transition ${
                    active
                      ? "bg-gray-100 text-gray-800"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="mt-4 space-y-3 border-t border-gray-100 pt-4">
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <MapPin size={15} className="text-[#6254d9]" />
              Saint Petersburg
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-600">
              <Phone size={15} className="text-[#6254d9]" />
              +7 (347) 229-46-45
            </div>

            <button
              type="button"
              onClick={() => handleNavigation("/login")}
              className="flex items-center gap-2 text-xs text-gray-600"
            >
              <UserRound size={15} className="text-[#6254d9]" />
              Login
            </button>

            <button
              type="button"
              onClick={() => handleNavigation("/register")}
              className="flex items-center gap-2 text-xs text-gray-600"
            >
              <UserRound size={15} className="text-[#6254d9]" />
              Register
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;