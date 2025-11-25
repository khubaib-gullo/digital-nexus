import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendMessageToArchitect } from '../services/gemini';
import { ChatMessage, ChatRole } from '../types';

const ArchitectChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: ChatRole.MODEL, text: "Greetings. I am The Architect. How may I assist you in navigating the DigitalNexus blueprint today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: ChatRole.USER, text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const response = await sendMessageToArchitect(input);
    
    setMessages(prev => [...prev, { role: ChatRole.MODEL, text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-mono">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="bg-blueprint-bg border border-blueprint-glow text-blueprint-glow p-4 rounded-full shadow-[0_0_20px_rgba(0,242,255,0.3)] hover:bg-blueprint-glow hover:text-black transition-colors"
          >
            <MessageSquare />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="w-80 md:w-96 bg-blueprint-bg/95 backdrop-blur-md border border-blueprint-glow shadow-2xl overflow-hidden flex flex-col h-[500px]"
          >
            {/* Header */}
            <div className="bg-blueprint-line/10 p-4 border-b border-blueprint-line flex justify-between items-center">
              <span className="text-blueprint-glow text-sm font-bold">AI_ARCHITECT_ASSISTANT</span>
              <button onClick={() => setIsOpen(false)} className="text-blueprint-line hover:text-white">
                <X size={18} />
              </button>
            </div>

            {/* Chat Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === ChatRole.USER ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[80%] p-3 text-xs ${
                      msg.role === ChatRole.USER 
                        ? 'bg-blueprint-line/20 border border-blueprint-line text-white' 
                        : 'bg-black border border-blueprint-glow/50 text-blueprint-text'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-black border border-blueprint-glow/50 p-3 text-xs text-blueprint-glow animate-pulse">
                    CALCULATING RESPONSE...
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-blueprint-line/30 bg-black">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Query the blueprint..."
                  className="flex-1 bg-transparent border border-blueprint-line/30 text-white text-xs p-2 focus:border-blueprint-glow focus:outline-none"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="p-2 border border-blueprint-line/30 text-blueprint-glow hover:bg-blueprint-glow hover:text-black transition-colors disabled:opacity-50"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ArchitectChat;
