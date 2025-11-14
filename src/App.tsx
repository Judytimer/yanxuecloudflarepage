import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import ChatButton from './components/ChatButton';
import ChatWindow from './components/ChatWindow';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [initialQuestion, setInitialQuestion] = useState<string | null>(null);

  const handleOpenChat = () => {
    setInitialQuestion(null);
    setIsChatOpen(true);
  };

  const handleSelectPainPoint = (question: string) => {
    setInitialQuestion(question);
    setIsChatOpen(true);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
    setInitialQuestion(null);
  };

  return (
    <div className="min-h-screen flex flex-col" style={{
      background: 'linear-gradient(180deg, #F5F9F0 0%, #E8F0E0 50%, #D4E4D0 100%)',
      fontFamily: 'HuaWenCaiYun, XinDiJianZhi, PingFang SC, sans-serif',
      position: 'relative'
    }}>
      <Header onOpenChat={handleOpenChat} />
      <main className="flex-grow">
        <HeroSection 
          onOpenChat={handleOpenChat} 
          onSelectPainPoint={handleSelectPainPoint}
        />
      </main>
      <Footer />
      {!isChatOpen && <ChatButton onClick={handleOpenChat} />}
      {isChatOpen && (
        <ChatWindow 
          onClose={handleCloseChat}
          initialQuestion={initialQuestion}
        />
      )}
    </div>
  );
}

export default App;

