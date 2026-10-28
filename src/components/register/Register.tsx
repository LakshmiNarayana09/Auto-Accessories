
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

type AccountType = "individual" | "llc" | "soleProprietor";

function Register() {
  const navigate = useNavigate();

  const [accountType, setAccountType] =
    useState<AccountType>("individual");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [inn, setInn] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [bik, setBik] = useState("");
  const [ogrn, setOgrn] = useState("");
  const [legalAddress, setLegalAddress] = useState("");

  const isBusiness = accountType !== "individual";

  const inputClass =
    "h-9 w-full rounded-sm border border-gray-200 px-3 text-[11px] text-gray-800 outline-none transition placeholder:text-gray-500 focus:border-[#7058d8] focus:ring-1 focus:ring-[#7058d8]/20";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const registrationData = {
      accountType,
      name,
      phone,
      email,
      ...(isBusiness && {
        inn,
        bankAccount,
        bik,
        ogrn,
        legalAddress,
      }),
    };

    console.log("Registration data:", registrationData);

  };

  return (
    <section className="flex w-full justify-center bg-[#f8f8fa] px-4 py-6 sm:py-7">
      <div className="w-full max-w-[430px] overflow-hidden rounded-lg border border-gray-100 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.07)]">
        
        <div className="flex h-12 items-center justify-center border-b border-gray-100">
          <h1 className="text-base font-semibold text-gray-800">
            Registration
          </h1>
        </div>

       
        <form
          onSubmit={handleSubmit}
          className="px-4 pb-4 pt-3 sm:px-6"
        >
          
          <div className="mb-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <label className="flex cursor-pointer items-center gap-1 text-[10px] text-gray-700">
              <input
                type="radio"
                name="accountType"
                value="individual"
                checked={accountType === "individual"}
                onChange={() => setAccountType("individual")}
                className="h-3.5 w-3.5 accent-[#6b55d5]"
              />
              Individual
            </label>

            <label className="flex cursor-pointer items-center gap-1 text-[10px] text-gray-700">
              <input
                type="radio"
                name="accountType"
                value="llc"
                checked={accountType === "llc"}
                onChange={() => setAccountType("llc")}
                className="h-3.5 w-3.5 accent-[#6b55d5]"
              />
              LLC
            </label>

            <label className="flex cursor-pointer items-center gap-1 text-[10px] text-gray-700">
              <input
                type="radio"
                name="accountType"
                value="soleProprietor"
                checked={accountType === "soleProprietor"}
                onChange={() => setAccountType("soleProprietor")}
                className="h-3.5 w-3.5 accent-[#6b55d5]"
              />
              Sole Proprietor
            </label>
          </div>

          <div className="space-y-2">
            
            <input
              type="text"
              name="name"
              aria-label="Your name"
              placeholder="Your name *"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              className={inputClass}
            />

            
            <div className="relative">
              <input
                type="tel"
                name="phone"
                aria-label="Phone number"
                placeholder="Phone number *"
                autoComplete="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                required
                className={`${inputClass} pr-9`}
              />

              {phone.trim() !== "" && (
                <CheckCircle2
                  size={14}
                  aria-label="Phone entered"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-green-500"
                />
              )}
            </div>

            
            <input
              type="email"
              name="email"
              aria-label="Email address"
              placeholder="Email address *"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className={inputClass}
            />

            
            {isBusiness && (
              <>
                <input
                  type="text"
                  name="inn"
                  aria-label="Tax identification number"
                  placeholder="Tax ID (INN) *"
                  value={inn}
                  onChange={(event) => setInn(event.target.value)}
                  required
                  className={inputClass}
                />

                <input
                  type="text"
                  name="bankAccount"
                  aria-label="Bank account number"
                  placeholder="Bank account number *"
                  value={bankAccount}
                  onChange={(event) =>
                    setBankAccount(event.target.value)
                  }
                  required
                  className={inputClass}
                />

                <input
                  type="text"
                  name="bik"
                  aria-label="Bank identification code"
                  placeholder="Bank identification code (BIK) *"
                  value={bik}
                  onChange={(event) => setBik(event.target.value)}
                  required
                  className={inputClass}
                />

                <input
                  type="text"
                  name="ogrn"
                  aria-label="Business registration number"
                  placeholder="Business registration number (OGRN) *"
                  value={ogrn}
                  onChange={(event) => setOgrn(event.target.value)}
                  required
                  className={inputClass}
                />

                <textarea
                  name="legalAddress"
                  aria-label="Legal address"
                  placeholder="Legal address *"
                  value={legalAddress}
                  onChange={(event) =>
                    setLegalAddress(event.target.value)
                  }
                  required
                  rows={2}
                  className={`${inputClass} min-h-9 resize-y py-2`}
                />
              </>
            )}

            
            <button
              type="submit"
              className="h-9 w-full rounded-sm bg-[#6b55d5] px-3 text-[11px] font-medium text-white transition hover:bg-[#5943c3] focus:outline-none focus:ring-2 focus:ring-[#6b55d5]/40 focus:ring-offset-2"
            >
              Register
            </button>
          </div>
        </form>

        
        <div className="flex min-h-11 flex-wrap items-center justify-center gap-1 border-t border-gray-100 px-3 py-3 text-[10px]">
          <span className="text-gray-600">
            Already have an account?
          </span>

          <button
            type="button"
            onClick={() => navigate("/login")}
            className="font-medium text-[#7058d8] hover:underline"
          >
            Sign In
          </button>
        </div>
      </div>
    </section>
  );
}

export default Register;
