import { ArrowRight, BarChart3 } from "lucide-react";

function SupplierCard() {
  return (
    <button className="relative flex min-h-[70px] items-center justify-between overflow-hidden bg-gradient-to-r from-[#47426c] to-[#747399] px-5 text-left text-white">
      
      <div className="absolute right-[-20px] top-[-30px] h-32 w-32 rounded-full bg-white/10" />

      <div className="relative z-10 flex items-center gap-4">
        <BarChart3 size={27} strokeWidth={1.5} />

        <span className="text-xs font-medium">
          For Suppliers
        </span>
      </div>

      <ArrowRight
        size={21}
        className="relative z-10 text-white/80"
      />
    </button>
  );
}

export default SupplierCard;