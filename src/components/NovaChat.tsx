'use client';

import type { VoiceHandler as VoiceHandlerType } from '@/lib/voice';
import { useState, useRef, useEffect } from 'react';
import { Send, Mic, MicOff, X } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

function NovaOrb({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-center gap-5 cursor-pointer bg-transparent border-none outline-none"
      aria-label="Open Nova AI chat"
    >
      {/* Orb container — large, fixed size so glow layers are contained */}
      <div className="relative w-40 h-40 flex-shrink-0">
        {/* Outermost nebular haze */}
        <div
          className="absolute inset-[-30px] rounded-full blur-3xl animate-nova-glow"
          style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.18) 0%, rgba(220,38,38,0.06) 50%, transparent 70%)' }}
        />

        {/* Shock wave rings */}
        <div className="absolute inset-[-4px] rounded-full border border-orange-400/20 animate-nova-ring" />
        <div className="absolute inset-0 rounded-full border border-red-500/15 animate-nova-ring-delay" />

        {/* Secondary ambient ring */}
        <div className="absolute inset-2 rounded-full bg-orange-500/10 blur-2xl animate-nova-glow" />

        {/* Ambient glow behind core */}
        <div className="absolute inset-4 rounded-full bg-orange-500/25 blur-xl animate-nova-glow" />

        {/* Core sphere — 24x24 (96px) */}
        <div className="absolute inset-5 rounded-full nova-orb-core animate-nova-pulse group-hover:shadow-[0_0_50px_rgba(249,115,22,0.7),0_0_100px_rgba(220,38,38,0.3)] transition-shadow duration-500">
          {/* Rotating ejecta rays */}
          <div className="absolute inset-0 animate-nova-rotate">
            {[...Array(16)].map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 origin-bottom"
                style={{
                  transform: `translate(-50%, -100%) rotate(${i * 22.5}deg)`,
                }}
              >
                <div
                  className={`w-px ${
                    i % 2 === 0
                      ? 'h-4 bg-gradient-to-t from-orange-400/40 to-white/60'
                      : 'h-2.5 bg-gradient-to-t from-orange-300/20 to-orange-200/40'
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Orbiting stellar material */}
          {[0, 60, 120, 180, 240, 300].map((deg, i) => (
            <div
              key={deg}
              className="absolute w-1.5 h-1.5 rounded-full bg-amber-200/70 blur-[0.5px]"
              style={{
                top: `${50 + 40 * Math.sin((deg * Math.PI) / 180)}%`,
                left: `${50 + 40 * Math.cos((deg * Math.PI) / 180)}%`,
                transform: 'translate(-50%, -50%)',
                animation: `novaPulse ${1.8 + i * 0.3}s ease-in-out infinite`,
              }}
            />
          ))}

          {/* Hot inner core layers */}
          <div
            className="absolute inset-[18%] rounded-full blur-[4px]"
            style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.8) 0%, rgba(249,115,22,0.4) 100%)' }}
          />
          <div className="absolute inset-[28%] rounded-full bg-white/90 blur-[2px]" />
          <div className="absolute inset-[36%] rounded-full bg-white blur-[0.5px]" />
        </div>
      </div>

      {/* Text below */}
      <div className="flex flex-col items-center gap-1">
        <span className="text-sm font-bold uppercase tracking-[0.3em] text-slate-200 group-hover:text-orange-300 transition-colors duration-300">
          Nova
        </span>
        <span className="text-[11px] leading-relaxed text-slate-400/60 text-center max-w-[180px]">
          My personal AI assistant.
          <br />
          Click to ask anything about me.
        </span>
      </div>
    </button>
  );
}

export default function NovaChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [voiceHandler, setVoiceHandler] = useState<VoiceHandlerType | null>(
    null
  );
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    import('@/lib/voice').then((mod) => {
      setVoiceHandler(new mod.VoiceHandler());
    });
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = { role: 'user', content: text.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text.trim() }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data.message },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Sorry, something went wrong.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVoice = async () => {
    if (!voiceHandler) return;

    if (isListening) {
      voiceHandler.stopListening();
      setIsListening(false);
      return;
    }

    try {
      setIsListening(true);
      const transcript = await voiceHandler.startListening();
      setIsListening(false);
      if (transcript) sendMessage(transcript);
    } catch {
      setIsListening(false);
    }
  };

  return (
    <>
      {/* Orb trigger — parent in LeftPanel handles centering */}
      <NovaOrb onClick={() => setIsOpen(true)} />

      {/* Full-screen chat overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 md:p-12">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-navy-900/85 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Chat window */}
          <div className="relative w-full max-w-2xl h-[80vh] max-h-[700px] rounded-2xl border border-orange-500/10 bg-navy-900 shadow-[0_0_60px_rgba(249,115,22,0.08)] flex flex-col overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-navy-700/50">
              <div className="flex items-center gap-3">
                {/* Mini orb */}
                <div className="relative w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <div className="absolute inset-[-2px] rounded-full bg-orange-500/15 blur-sm animate-nova-glow" />
                  <div className="w-6 h-6 rounded-full nova-orb-core animate-nova-pulse">
                    <div className="absolute inset-[30%] rounded-full bg-white/90 blur-[0.5px]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-200 tracking-wide">
                    Nova
                  </h3>
                  <p className="text-[10px] text-slate-400/60">
                    Kenny&apos;s AI assistant
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-navy-800/50 transition-colors"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                  {/* Decorative orb */}
                  <div className="relative w-20 h-20">
                    <div className="absolute inset-[-8px] rounded-full border border-orange-500/20 animate-nova-ring" />
                    <div className="absolute inset-[-4px] rounded-full border border-red-500/10 animate-nova-ring-delay" />
                    <div className="absolute inset-[-6px] rounded-full bg-orange-500/10 blur-lg animate-nova-glow" />
                    <div className="absolute inset-2 rounded-full nova-orb-core animate-nova-pulse">
                      <div className="absolute inset-[30%] rounded-full bg-white/90 blur-[1px]" />
                    </div>
                  </div>
                  <div>
                    <p className="text-slate-200 font-medium text-lg">
                      Hi, I&apos;m Nova
                    </p>
                    <p className="text-sm text-slate-400/70 mt-1.5 max-w-xs leading-relaxed">
                      Ask me anything about Kenny&apos;s work, research,
                      projects, or experience.
                    </p>
                  </div>
                </div>
              )}
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-orange-500/10 text-orange-200 border border-orange-500/15'
                        : 'bg-navy-800 text-slate-300 border border-navy-700/40'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-navy-800 border border-navy-700/40 rounded-2xl px-4 py-3">
                    <div className="flex gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400/60 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400/60 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400/60 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input bar */}
            <div className="px-6 py-4 border-t border-navy-700/50">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage(input);
                }}
                className="flex items-center gap-3"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask Nova anything..."
                  className="flex-1 rounded-xl bg-navy-800/80 px-4 py-3 text-sm text-slate-200 placeholder-slate-400/50 outline-none border border-navy-700/30 focus:border-orange-500/30 transition-colors"
                  disabled={isLoading}
                />
                {voiceHandler && (
                  <button
                    type="button"
                    onClick={handleVoice}
                    className={`p-2.5 rounded-xl transition-all ${
                      isListening
                        ? 'bg-orange-500/10 text-orange-400 border border-orange-500/30'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-navy-800/50 border border-transparent'
                    }`}
                    aria-label={isListening ? 'Stop listening' : 'Voice input'}
                  >
                    {isListening ? <MicOff size={18} /> : <Mic size={18} />}
                  </button>
                )}
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 transition-all hover:bg-orange-500/20 disabled:opacity-30 disabled:hover:bg-orange-500/10"
                  aria-label="Send message"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
