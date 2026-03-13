'use client';

import type { VoiceHandler as VoiceHandlerType } from '@/lib/voice';
import { personalInfo } from '@/lib/personal-info';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Mic, MicOff, Send, X } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface NovaChatProps {
  variant: 'desktop' | 'mobile';
}

const firstName = personalInfo.name.split(' ')[0];

const suggestedPrompts = [
  `Give me a quick overview of ${firstName}.`,
  `What are ${firstName}'s latest updates?`,
  `Summarize ${firstName}'s experience.`,
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
      className={`group relative isolate w-full overflow-hidden rounded-[30px] border border-border/80 bg-surface/90 text-left shadow-[0_24px_80px_rgba(2,8,23,0.24)] transition duration-300 hover:-translate-y-0.5 hover:border-accent-cyan/25 hover:bg-surface-strong/95 hover:shadow-[0_32px_90px_rgba(2,8,23,0.32)] ${
        isDesktop ? 'px-6 py-6' : 'px-5 py-5'
      }`}
      aria-label="Open Nova AI assistant"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          backgroundImage:
            'radial-gradient(circle at top right, rgb(var(--color-accent-cyan) / 0.12), transparent 30%), radial-gradient(circle at 78% 32%, rgb(var(--color-accent-violet) / 0.16), transparent 26%), linear-gradient(180deg, transparent, rgb(var(--color-background) / 0.22))',
        }}
      />
      <div className="relative flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-mint shadow-[0_0_16px_rgba(34,230,184,0.35)]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-text-secondary">
              AI portfolio assistant
            </p>
          </div>
          <h3
            className={`mt-4 font-semibold tracking-[-0.03em] text-text-primary ${
              isDesktop ? 'text-[2rem] leading-none' : 'text-2xl leading-none'
            }`}
          >
            Ask Nova
          </h3>
          <p className="mt-3 max-w-[23rem] text-sm leading-6 text-text-secondary">
            Get a concise read on {firstName}&apos;s background, recent updates,
            experience, and contact details.
          </p>
        </div>
        <div className="transition duration-300 group-hover:scale-[1.03]">
          <NovaSeal size={isDesktop ? 'md' : 'sm'} />
        </div>
      </div>
      <div className="relative mt-6 flex items-center justify-between border-t border-border/70 pt-4">
        <span className="text-sm font-medium text-text-primary">
          Open assistant
        </span>
        <span className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors duration-300 group-hover:text-text-primary">
          Explore
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/80 bg-background/20 text-text-primary transition duration-300 group-hover:border-accent-cyan/35 group-hover:bg-background/35">
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
            className="absolute inset-0 bg-background/85 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative flex h-[min(760px,88vh)] w-full max-w-3xl flex-col overflow-hidden rounded-[32px] border border-border/80 bg-surface/95 shadow-[0_36px_120px_rgba(2,8,23,0.58)]">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  'radial-gradient(circle at top, rgb(var(--color-accent-cyan) / 0.08), transparent 34%), radial-gradient(circle at 84% 20%, rgb(var(--color-accent-violet) / 0.12), transparent 22%), linear-gradient(180deg, transparent, rgb(var(--color-background) / 0.2))',
              }}
            />

            <div className="relative flex items-start justify-between gap-4 border-b border-border/70 px-5 py-5 sm:px-6">
              <div className="flex items-start gap-4">
                <NovaSeal size="sm" />
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-text-secondary">
                    AI portfolio assistant
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-text-primary">
                    Ask Nova
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-6 text-text-secondary">
                    A concise guide to {firstName}&apos;s background, recent updates,
                    experience, and contact details.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-background/20 text-text-secondary transition-colors hover:border-accent-cyan/35 hover:bg-background/35 hover:text-text-primary"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>

            <div className="relative flex-1 overflow-y-auto px-5 py-5 sm:px-6">
              {messages.length === 0 ? (
                <div className="flex h-full items-center justify-center">
                  <div className="w-full max-w-2xl rounded-[28px] border border-border/80 bg-background/18 p-6 shadow-[0_24px_80px_rgba(2,8,23,0.18)]">
                    <div className="flex items-start gap-4">
                      <NovaSeal size="sm" />
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-text-secondary">
                          Start here
                        </p>
                        <h4 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-text-primary">
                          Ask for a curated overview
                        </h4>
                        <p className="mt-3 max-w-2xl text-sm leading-6 text-text-secondary">
                          Use Nova to quickly understand {firstName}&apos;s work
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
                          className="rounded-2xl border border-border/80 bg-surface/55 px-4 py-4 text-left text-sm leading-6 text-text-secondary transition duration-300 hover:border-accent-cyan/30 hover:bg-surface-strong/85 hover:text-text-primary"
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
                            ? 'border border-accent-cyan/20 bg-text-primary text-background'
                            : 'border border-border/80 bg-background/16 text-text-secondary'
                        }`}
                      >
                        {msg.content}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="rounded-[24px] border border-border/80 bg-background/16 px-4 py-3">
                        <div className="flex items-center gap-2 animate-pulse">
                          <span className="h-2 w-2 rounded-full bg-accent-cyan/65" />
                          <span className="h-2 w-2 rounded-full bg-accent-violet/45" />
                          <span className="h-2 w-2 rounded-full bg-mint/35" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="relative border-t border-border/70 px-5 py-4 sm:px-6">
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
                  className="h-12 flex-1 rounded-full border border-border/80 bg-background/18 px-5 text-sm text-text-primary placeholder:text-text-secondary/65 focus:border-accent-cyan/35 focus:outline-none"
                  disabled={isLoading}
                />
                {voiceHandler && (
                  <button
                    type="button"
                    onClick={handleVoice}
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-full border transition-colors ${
                      isListening
                        ? 'border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan'
                        : 'border-border/80 bg-background/20 text-text-secondary hover:border-accent-cyan/35 hover:text-text-primary'
                    }`}
                    aria-label={isListening ? 'Stop listening' : 'Voice input'}
                  >
                    {isListening ? <MicOff size={17} /> : <Mic size={17} />}
                  </button>
                )}
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-text-primary px-5 text-sm font-medium text-background transition-colors hover:bg-accent-cyan disabled:cursor-not-allowed disabled:opacity-40"
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
