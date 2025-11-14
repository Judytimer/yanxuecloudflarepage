/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 治愈墨绿色水墨风格配色系统
        ink: {
          dark: '#2D5016',        // 深墨绿（标题、重要文字）
          medium: '#4A6B3A',      // 中墨绿（副标题）
          light: '#6B8E5A',       // 浅墨绿（次要文字）
          pale: '#8FA87F',        // 极浅墨绿（辅助文字）
        },
        paper: {
          white: '#F5F9F0',       // 纸白色（最浅背景）
          light: '#E8F0E0',      // 浅纸色（渐变中间）
          medium: '#D4E4D0',     // 中纸色（渐变过渡）
          dark: '#C5D9C0',       // 深纸色（渐变底部）
        },
        accent: {
          green: '#E8F5E9',      // 卡片边框绿色
          blue: '#E3F2FD',       // 卡片边框蓝色
          orange: '#FFF3E0',     // 卡片边框橙色
        },
        // 兼容旧的颜色类名
        neutral: {
          dark: '#2D5016',       // 深墨绿
          medium: '#4A6B3A',     // 中墨绿
          light: '#E8F0E0',      // 浅纸色
        },
        primary: {
          DEFAULT: '#2D5016',    // 主色（深墨绿）
          dark: '#1A3009',       // 深色变体
          light: '#E8F0E0',      // 浅色变体
        },
      },
      fontFamily: {
        sans: [
          'HuaWenCaiYun',
          'XinDiJianZhi',
          'PingFang SC',
          'Hiragino Sans GB',
          'Microsoft YaHei',
          'WenQuanYi Micro Hei',
          'sans-serif',
        ],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        'xxl': '48px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'hover': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'chat': '0 8px 24px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}

