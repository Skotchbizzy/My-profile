
import React, { useState, useRef, useEffect } from 'react';
import { askProfessionalAssistant } from '../services/geminiService';
import { ChatMessage } from '../types';
import { PROFILE } from '../constants';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasKey, setHasKey] = useState<boolean | null>(null);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: `Hi! I'm ${PROFILE.name}'s AI assistant. Ask me anything about their leadership at BloomView Consults, their technical career at Huawei, or their MSc studies at Derby!` }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkKey = async () => {
      if (typeof window.aistudio?.hasSelectedApiKey === 'function') {
        const selected = await window.aistudio.hasSelectedApiKey();
        setHasKey(selected);
      } else {
        // Fallback for environments where the picker isn't present
        setHasKey(true);
      }
    };
    if (isOpen) checkKey();
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleConnect = async () => {
    try {
      if (typeof window.aistudio?.openSelectKey === 'function') {
        await window.aistudio.openSelectKey();
        // As per guidelines, assume success after triggering
        setHasKey(true);
      }
    } catch (err) {
      console.error("Failed to open key selector", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    try {
      const response = await askProfessionalAssistant(userMessage, messages);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error: any) {
      if (error?.message?.includes("Requested entity was not found")) {
        setHasKey(false);
      }
      setMessages(prev => [...prev, { role: 'assistant', content: "I encountered an error. Please ensure your AI access is correctly configured." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="w-[calc(100vw-3rem)] md:w-[400px] h-[500px] max-h-[70vh] glass-morphism shadow-2xl rounded-3xl flex flex-col overflow-hidden border border-slate-200 dark:border-slate-800">
          <div className="p-5 bg-blue-600 text-white flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-xl shadow-inner">🤖</div>
              <div>
                <p className="font-black text-sm uppercase tracking-tighter">Career Assistant</p>
                <p className="text-[10px] opacity-70 font-bold uppercase tracking-widest">Gemini Neural Engine</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            >
              ✕
            </button>
          </div>

          {!hasKey ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-6 bg-slate-50 dark:bg-slate-950">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-2xl flex items-center justify-center text-3xl">🔑</div>
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2">Secure AI Connection Required</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  To interact with Chima's AI, please select an API key. This ensures a secure and personalized experience.
                </p>
              </div>
              <button 
                onClick={handleConnect}
                className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-blue-700 shadow-xl shadow-blue-500/20 active:scale-95 transition-all"
              >
                Connect to Gemini
              </button>
              <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener noreferrer" className="text-[10px] text-blue-600 font-bold uppercase tracking-widest hover:underline">
                Billing Documentation ↗
              </a>
            </div>
          ) : (
            <>
              <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50/30 dark:bg-slate-950/30">
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-4 rounded-3xl text-sm leading-relaxed font-medium ${
                      m.role === 'user' 
                        ? 'bg-blue-600 text-white rounded-br-none shadow-lg shadow-blue-500/20' 
                        : 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 rounded-bl-none shadow-sm border border-slate-100 dark:border-slate-800'
                    }`}>
                      {m.content}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-3xl rounded-bl-none shadow-sm flex space-x-1.5 border border-slate-100 dark:border-slate-800">
                      <div className="w-1.5 h-1.5 bg-blue-600/40 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-blue-600/60 rounded-full animate-bounce delay-75"></div>
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce delay-150"></div>
                    </div>
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="p-5 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center space-x-2 bg-slate-100 dark:bg-slate-900 rounded-2xl p-1.5 focus-within:ring-2 focus-within:ring-blue-600/20 transition-all">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Message assistant..."
                    className="flex-1 bg-transparent border-none px-4 py-2.5 text-sm focus:ring-0 outline-none font-medium"
                  />
                  <button 
                    type="submit" 
                    className="bg-blue-600 text-white w-10 h-10 rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors disabled:opacity-50 shadow-lg shadow-blue-500/30"
                    disabled={isTyping}
                  >
                    ➔
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-blue-600 text-white rounded-[1.5rem] flex items-center justify-center shadow-2xl shadow-blue-500/40 hover:scale-110 hover:-translate-y-1 transition-all hover:bg-blue-700 group active:scale-95 border-4 border-white dark:border-slate-950"
        >
          <span className="text-3xl group-hover:rotate-12 transition-transform">💬</span>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 border-4 border-white dark:border-slate-950 rounded-full animate-pulse"></div>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
