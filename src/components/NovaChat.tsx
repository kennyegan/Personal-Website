'use client';

import type { VoiceHandler as VoiceHandlerType } from '@/lib/voice';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Mic, MicOff, Send, X } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface NovaChatProps {
  variant: 'desktop' | 'mobile';
}

const suggestedPrompts = [
  'Give me a quick overview of Kenny.',
  'What are Kenny\'s latest updates?',
  'Summarize Kenny\'s experience.',
] as const;

function NovaSeal({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const sizeClasses = {
    sm: 'h-11 w-11',
    md: 'h-14 w-14',
  };

  return (
    <div className={`nova-seal ${sizeClasses[size]} shrink-0`} aria-hidden="true" />
  );
}

function NovaTriggerCard({
  variant,
  onClick,
}: {
  variant: NovaChatProps['variant'];
  onClick: () => void;
}) {
  const isDesktop = variant === 'desktop';

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative isolate w-full overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(17,34,64,0.92),rgba(10,25,47,0.98))] text-left shadow-[0_20px_70px_rgba(2,8,23,0.24)] transition duration-300 hover:-translate-y-0.5 hover:border-white/[0.15] hover:shadow-[0_28px_80px_rgba(2,8,23,0.3)] ${
        isDesktop ? 'px-6 py-6' : 'px-5 py-5'
      }`}
      aria-label="Open Nova AI assistant"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.12),transparent_28%),linear-gradient(135deg,transparent,rgba(255,255,255,0.03))] opacity-80" />
      <div className="relative flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-amber-200/80 shadow-[0_0_16px_rgba(252,211,77,0.35)]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">
              AI portfolio assistant
            </p>
          </div>
          <h3
            className={`mt-4 font-semibold tracking-[-0.03em] text-slate-100 ${
              isDesktop ? 'text-[2rem] leading-none' : 'text-2xl leading-none'
            }`}
          >
            Ask Nova
          </h3>
          <p className="mt-3 max-w-[23rem] text-sm leading-6 text-slate-400">
            Get a concise read on Kenny&apos;s background, recent updates,
            experience, and contact details.
          </p>
        </div>
        <div className="transition duration-300 group-hover:scale-[1.03]">
          <NovaSeal size={isDesktop ? 'md' : 'sm'} />
        </div>
      </div>
      <div className="relative mt-6 flex items-center justify-between border-t border-white/10 pt-4">
        <span className="text-sm font-medium text-slate-200">
          Open assistant
        </span>
        <span className="inline-flex items-center gap-2 text-sm text-slate-300 transition-colors duration-300 group-hover:text-slate-100">
          Explore
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.12] bg-white/5 text-slate-200 transition duration-300 group-hover:border-white/[0.18] group-hover:bg-white/[0.08]">
            <ArrowRight size={14} />
          </span>
        </span>
      </div>
    </button>
  );
}

export default function NovaChat({ variant }: NovaChatProps) {
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
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const content = text.trim();
    const userMessage: Message = { role: 'user', content };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: content }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data.message },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, something went wrong.',
        },
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
      if (transcript) {
        sendMessage(transcript);
      }
    } catch {
      setIsListening(false);
    }
  };

  return (
    <>
      <NovaTriggerCard variant={variant} onClick={() => setIsOpen(true)} />

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          <div
            className="absolute inset-0 bg-[rgba(6,14,28,0.82)] backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative flex h-[min(760px,88vh)] w-full max-w-3xl flex-col overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(17,34,64,0.96),rgba(10,25,47,0.98))] shadow-[0_36px_120px_rgba(2,8,23,0.58)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.07),transparent_34%),linear-gradient(180deg,transparent,rgba(255,255,255,0.02))]" />

            <div className="relative flex items-start justify-between gap-4 border-b border-white/[0.08] px-5 py-5 sm:px-6">
              <div className="flex items-start gap-4">
                <NovaSeal size="sm" />
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                    AI portfolio assistant
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-slate-100">
                    Ask Nova
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-6 text-slate-400">
                    A concise guide to Kenny&apos;s background, recent updates,
                    experience, and contact details.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 transition-colors hover:border-white/[0.16] hover:bg-white/[0.05] hover:text-slate-200"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>

            <div className="relative flex-1 overflow-y-auto px-5 py-5 sm:px-6">
              {messages.length === 0 ? (
                <div className="flex h-full items-center justify-center">
                  <div className="w-full max-w-2xl rounded-[28px] border border-white/[0.08] bg-white/[0.03] p-6 shadow-[0_24px_80px_rgba(2,8,23,0.18)]">
                    <div className="flex items-start gap-4">
                      <NovaSeal size="sm" />
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                          Start here
                        </p>
                        <h4 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-slate-100">
                          Ask for a curated overview
                        </h4>
                        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
                          Use Nova to quickly understand Kenny&apos;s work
                          without scanning the full page first.
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                      {suggestedPrompts.map((prompt) => (
                        <button
                          key={prompt}
                          type="button"
                          onClick={() => sendMessage(prompt)}
                          className="rounded-2xl border border-white/[0.08] bg-white/[0.02] px-4 py-4 text-left text-sm leading-6 text-slate-300 transition duration-300 hover:border-white/[0.14] hover:bg-white/[0.05] hover:text-slate-100"
                        >
                          {prompt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex ${
                        msg.role === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`max-w-[85%] rounded-[24px] px-4 py-3 text-sm leading-7 shadow-[0_12px_40px_rgba(2,8,23,0.08)] sm:max-w-[75%] ${
                          msg.role === 'user'
                            ? 'border border-white/10 bg-slate-100 text-navy-900'
                            : 'border border-white/[0.08] bg-white/[0.04] text-slate-300'
                        }`}
                      >
                        {msg.content}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="rounded-[24px] border border-white/[0.08] bg-white/[0.04] px-4 py-3">
                        <div className="flex items-center gap-2 animate-pulse">
                          <span className="h-2 w-2 rounded-full bg-amber-200/50" />
                          <span className="h-2 w-2 rounded-full bg-amber-200/[0.35]" />
                          <span className="h-2 w-2 rounded-full bg-amber-200/[0.2]" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="relative border-t border-white/[0.08] px-5 py-4 sm:px-6">
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
                  placeholder="Ask about background, updates, or experience..."
                  className="h-12 flex-1 rounded-full border border-white/10 bg-white/[0.04] px-5 text-sm text-slate-200 placeholder:text-slate-500 focus:border-white/16 focus:outline-none"
                  disabled={isLoading}
                />
                {voiceHandler && (
                  <button
                    type="button"
                    onClick={handleVoice}
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-full border transition-colors ${
                      isListening
                        ? 'border-amber-200/30 bg-amber-200/10 text-amber-100'
                        : 'border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/[0.16] hover:text-slate-200'
                    }`}
                    aria-label={isListening ? 'Stop listening' : 'Voice input'}
                  >
                    {isListening ? <MicOff size={17} /> : <Mic size={17} />}
                  </button>
                )}
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-slate-100 px-5 text-sm font-medium text-navy-900 transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Send message"
                >
                  Send
                  <Send size={15} />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
