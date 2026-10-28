
import { useState, type FormEvent } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { ROLE_HOME, canAccessPath } from "../../utils/roles";
import { formatPhone } from "../../utils/format";
import { useAuth } from "../../hooks/useAuth";
import { loginRequest } from "../../api/auth";
import DevRoleLogin from "../common/DevRoleLogin";

type LoginMethod = "email" | "phone";

const inputClass =
  "h-9 w-full rounded-sm border border-gray-200 bg-white px-3 text-[11px] text-gray-800 outline-none transition focus:border-[#7058d8] focus:ring-1 focus:ring-[#7058d8]/20 disabled:opacity-60";

function Login() {
  const [loginMethod, setLoginMethod] = useState<LoginMethod>("email");
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { user, login } = useAuth();

  
  const from = (location.state as { from?: { pathname: string } } | null)?.from?.pathname;

  
  if (user) {
    const target = from && canAccessPath(user.role, from) ? from : ROLE_HOME[user.role];
    return <Navigate to={target} replace />;
  }

  const switchMethod = (method: LoginMethod): void => {
    setLoginMethod(method);
    setError("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setError("");

    const loginValue = loginMethod === "email" ? email.trim() : phone;

    if (loginMethod === "phone" && phone.replace(/\D/g, "").length !== 11) {
      setError("Enter a valid phone number");
      return;
    }

    setLoading(true);
    try {
      const authUser = await loginRequest({
        method: loginMethod,
        login: loginValue,
        password,
        remember: rememberMe,
      });
      login(authUser, rememberMe); 
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full justify-center bg-[#f6f7fa] mt-[30px] mb-[40px]">
      <div className="w-full max-w-[370px] overflow-hidden rounded-lg border border-gray-100 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.07)]">
        <div className="flex h-12 items-center justify-center border-b border-gray-100">
          <h1 className="text-sm font-semibold text-gray-800">Sign In</h1>
        </div>

        <div className="px-5 pb-5 pt-2 sm:px-7">
          <div role="tablist" aria-label="Sign in method" className="mb-3 grid grid-cols-2 border-b border-gray-100">
            <button
              type="button"
              role="tab"
              aria-selected={loginMethod === "email"}
              onClick={() => switchMethod("email")}
              className={`h-8 border-b-2 text-[11px] transition-colors ${
                loginMethod === "email"
                  ? "border-[#7058d8] text-[#7058d8]"
                  : "border-transparent text-gray-700 hover:text-[#7058d8]"
              }`}
            >
              Email
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={loginMethod === "phone"}
              onClick={() => switchMethod("phone")}
              className={`h-8 border-b-2 text-[11px] transition-colors ${
                loginMethod === "phone"
                  ? "border-[#7058d8] text-[#7058d8]"
                  : "border-transparent text-gray-700 hover:text-[#7058d8]"
              }`}
            >
              Phone Number
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-2">
            {loginMethod === "email" ? (
              <input
                type="email"
                name="email"
                placeholder="Email address"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                disabled={loading}
                required
                className={inputClass}
              />
            ) : (
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                autoComplete="tel"
                inputMode="tel"
                value={phone}
                onChange={(event) => setPhone(formatPhone(event.target.value))}
                disabled={loading}
                required
                className={inputClass}
              />
            )}

            <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              disabled={loading}
              required
              className={inputClass}
            />

            <div className="flex items-center justify-between gap-2 py-0.5">
              <label className="flex cursor-pointer items-center gap-1.5 text-[9px] text-gray-600">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                  className="h-3 w-3 accent-[#7058d8]"
                />
                Remember me
              </label>

              <button
                type="button"
                onClick={() => navigate(ROUTES.forgotPassword)}
                className="text-[9px] text-[#7058d8] hover:underline"
              >
                Forgot password?
              </button>
            </div>

            {error && (
              <p role="alert" className="text-[10px] text-red-500">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="h-9 w-full rounded-sm bg-[#6b55d5] text-[11px] font-medium text-white transition hover:bg-[#5943c3] focus:outline-none focus:ring-2 focus:ring-[#6b55d5]/40 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <DevRoleLogin />
        </div>

        <div className="flex min-h-11 flex-wrap items-center justify-center gap-1 border-t border-gray-100 px-3 py-3 text-[10px]">
          <span className="text-gray-600">Don't have an account?</span>

          <button
            type="button"
            onClick={() => navigate(ROUTES.register)}
            className="font-medium text-[#7058d8] hover:underline"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;