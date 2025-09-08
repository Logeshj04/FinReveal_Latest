import { Mail } from "lucide-react";

const StickyContactButton = () => {
  return (
    <a
      href="/contact"
      className="text-bold tracking-tight fixed right-[0.4px] bottom-1/2 transform translate-y-1/2  bg-[#1565D8] text-[#FAFAFA] w-10 px-3 py-3  shadow-lg hover:scale-105 transition-all duration-300 flex flex-col-reverse items-center gap-1.5 leading-none font-bold rounded-l-[8px] z-70"
    >
      <Mail className="w-5 h-5 mt-1 transform -rotate-90" />
      {/* Vertical Text Display - Bottom to Top */}
      {"Contact  Us".split("").map((char, index) => (
        <span
          key={index}
          className="transform -rotate-90 text-bold tracking-tight leading-[.45rem]"
        >
          {char}
        </span>
      ))}
    </a>
  );
};

export default StickyContactButton;
