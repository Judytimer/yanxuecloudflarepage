import PainPointCard from './PainPointCard';

interface HeroSectionProps {
  onOpenChat: () => void;
  onSelectPainPoint: (question: string) => void;
}

const painPoints = [
  {
    title: '写作业拖拉',
    description: '孩子每天写作业拖到很晚，总是磨蹭，效率低下',
    question: '我的孩子每天写作业都要拖到很晚，总是磨磨蹭蹭，效率很低。我该怎么帮助他提高效率？',
    color: 'green' as const,
    icon: '😔',
    illustration: '/illustrations/AIVector_生成特定风格图片 (4).svg',
  },
  {
    title: '考试焦虑',
    description: '一提到考试就紧张，害怕失败，影响正常发挥',
    question: '我的孩子一提到考试就特别紧张，害怕失败，甚至影响正常发挥。我该如何帮助他缓解考试焦虑？',
    color: 'blue' as const,
    icon: '😰',
    illustration: '/illustrations/AIVector_生成特定风格图片 (5).svg',
  },
  {
    title: '缺乏学习动力',
    description: '孩子总是问为什么要学习，对任何科目都提不起兴趣',
    question: '我的孩子总是问"为什么要学习？"，对任何科目都提不起兴趣，没有学习动力。我该怎么引导他找到学习的意义？',
    color: 'orange' as const,
    icon: '🤔',
    illustration: '/illustrations/AIVector_生成特定风格图片 (6).svg',
  },
];

export default function HeroSection({ onOpenChat, onSelectPainPoint }: HeroSectionProps) {
  return (
    <section className="pt-24 pb-16 px-4 min-h-screen" style={{
      background: 'linear-gradient(180deg, #F5F9F0 0%, #E8F0E0 30%, #D4E4D0 60%, #C5D9C0 100%)'
    }}>
      <div className="max-w-6xl mx-auto">
        {/* 标题区域 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-medium mb-6 text-[#2D5016]" style={{ fontFamily: 'HuaWenCaiYun, XinDiJianZhi, sans-serif' }}>
            你值得拥有更好的家庭教育
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-[#4A6B3A]" style={{ fontFamily: 'HuaWenCaiYun, XinDiJianZhi, sans-serif' }}>
            你在家庭教育中遇到了什么困扰？
          </p>
        </div>

        {/* 痛点卡片区域 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {painPoints.map((point, index) => (
            <PainPointCard
              key={index}
              title={point.title}
              description={point.description}
              question={point.question}
              color={point.color}
              icon={point.icon}
              illustration={point.illustration}
              onClick={() => onSelectPainPoint(point.question)}
            />
          ))}
        </div>

        {/* 底部提示 */}
        <div className="text-center">
          <button
            onClick={onOpenChat}
            className="px-8 py-4 bg-transparent border-2 border-[#2D5016] text-[#2D5016] rounded-lg text-lg font-medium hover:bg-[#2D5016] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
          >
            试试问别的
          </button>
        </div>
      </div>
    </section>
  );
}

