interface ChatButtonProps {
  onClick: () => void;
}

export default function ChatButton({ onClick }: ChatButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 w-16 h-16 bg-[#2D5016] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#4A6B3A] transition-all hover:scale-105 z-40"
      aria-label="打开聊天窗口"
    >
      <span className="text-2xl">💬</span>
    </button>
  );
}

