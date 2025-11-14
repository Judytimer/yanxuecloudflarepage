interface PainPointCardProps {
  title: string;
  description: string;
  question: string;
  color: 'green' | 'blue' | 'orange';
  icon: string;
  illustration?: string;
  onClick: () => void;
}

// 窄边框颜色配置
const borderClasses = {
  green: 'border-2 border-[#E8F5E9] hover:border-[#C8E6C9]',      // 写作业拖拉 - 绿色边框
  blue: 'border-2 border-[#E3F2FD] hover:border-[#BBDEFB]',       // 考试焦虑 - 蓝色边框
  orange: 'border-2 border-[#FFF3E0] hover:border-[#FFE0B2]',     // 缺乏学习动力 - 橙色边框
};

export default function PainPointCard({
  title,
  description,
  question,
  color,
  icon,
  illustration,
  onClick,
}: PainPointCardProps) {
  return (
    <button
      onClick={onClick}
      className={`${borderClasses[color]} bg-transparent rounded-xl p-4 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center aspect-square`}
    >
      {/* 放大的SVG插画 */}
      {illustration ? (
        <img 
          src={illustration} 
          alt={title}
          className="w-full h-full object-contain"
        />
      ) : (
        <div className="text-6xl">{icon}</div>
      )}
    </button>
  );
}

