interface BrandFiltersProps {
  selectedLetter: string;
  onLetterChange: (letter: string) => void;
}

const numbers = ["1", "3", "4", "5", "7", "8"];

const alphabet = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
];

function BrandFilters({ selectedLetter, onLetterChange }: BrandFiltersProps) {
  const renderButtons = (items: string[]) => {
    return items.map((item) => {
      const isActive = selectedLetter === item;

      return (
        <button
          key={item}
          type="button"
          onClick={() => onLetterChange(isActive ? "" : item)}
          className={`flex h-6 min-w-6 items-center justify-center rounded-sm border px-1.5 text-[10px] font-medium transition-all duration-150 ${isActive ? "border-[#6157d9] bg-[#6157d9] text-white" : "border-[#e4e5ec] bg-white text-[#6157d9] hover:border-[#6157d9] hover:bg-[#f4f2ff]"}`}
        >
          {item}
        </button>
      );
    });
  };

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-1.5">{renderButtons(numbers)}</div>
      <div className="flex flex-wrap gap-1.5">{renderButtons(alphabet)}</div>
    </div>
  );
}

export default BrandFilters;