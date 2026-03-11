import { NextRequest, NextResponse } from 'next/server';
import { experience, personalInfo } from '@/lib/personal-info';
import { updates } from '@/lib/updates';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (typeof message !== 'string' || !message.trim()) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    const response = generateNovaResponse(message.trim());

    return NextResponse.json({
      message: response,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('AI API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function generateNovaResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  const currentRole = experience[0];
  const coreSkills = personalInfo.skills.core.slice(0, 4);
  const latestUpdateGroup = updates[0];

  if (
    lowerMessage.includes('experience') ||
    lowerMessage.includes('background') ||
    lowerMessage.includes('intern') ||
    lowerMessage.includes('role')
  ) {
    return `Kenny currently works as a ${currentRole.title} at ${currentRole.company}. The portfolio currently focuses on background, recent updates, and experience.`;
  }

  if (
    lowerMessage.includes('update') ||
    lowerMessage.includes('recent') ||
    lowerMessage.includes('latest') ||
    lowerMessage.includes('news')
  ) {
    return `Recent updates highlighted on the site include ${formatList(latestUpdateGroup.items.slice(0, 2))}.`;
  }

  if (
    lowerMessage.includes('skill') ||
    lowerMessage.includes('technology') ||
    lowerMessage.includes('tech')
  ) {
    return `Kenny's core focus areas include ${formatList(coreSkills)}.`;
  }

  if (
    lowerMessage.includes('contact') ||
    lowerMessage.includes('hire') ||
    lowerMessage.includes('work with')
  ) {
    return `The best way to reach Kenny is by email at ${personalInfo.email}. You can also use the LinkedIn link in the left rail if you prefer a professional intro there.`;
  }

  if (
    lowerMessage.includes('hello') ||
    lowerMessage.includes('hi') ||
    lowerMessage.includes('hey')
  ) {
    return "Hello. I'm Nova, Kenny's portfolio assistant. I can help you with Kenny's background, recent updates, experience, skills, and contact details.";
  }

  if (lowerMessage.includes('nova') || lowerMessage.includes('who are you')) {
    return "I'm Nova, the on-site assistant for Kenny's portfolio. My role is simple: help visitors quickly find the relevant context about his background, updates, and experience.";
  }

  return "I can help with Kenny's background, recent updates, experience, skills, or contact details. Ask about one of those areas and I'll answer from the portfolio content.";
}

function formatList(items: string[]): string {
  if (items.length === 0) {
    return 'the current portfolio entries';
  }

  if (items.length === 1) {
    return items[0];
  }

  if (items.length === 2) {
    return `${items[0]} and ${items[1]}`;
  }

  return `${items.slice(0, -1).join(', ')}, and ${items.at(-1)}`;
}
