interface HeaderProps {
  onOpenChat: () => void;
}

export default function Header({ onOpenChat }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#F5F9F0] bg-opacity-80 backdrop-blur-sm shadow-sm z-50 h-16">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-xl font-medium text-[#2D5016]">Antech</div>
        </div>
        <button
          onClick={onOpenChat}
          className="px-6 py-2 bg-transparent border border-[#2D5016] text-[#2D5016] rounded-md font-medium hover:bg-[#2D5016] hover:text-white transition-all duration-300"
        >
          试试问别的
        </button>
      </div>
    </header>
  );
}

