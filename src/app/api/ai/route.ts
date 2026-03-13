import { NextRequest, NextResponse } from 'next/server';
import { experience, personalInfo } from '@/lib/personal-info';
import { currentFocus, timelineItems } from '@data/timeline';

function getExperienceStartYear(duration: string): number {
  const match = duration.match(/\d{4}/);
  return match ? Number(match[0]) : 0;
}

function getCurrentPrimaryRole() {
  const activeRoles = experience.filter((role) =>
    role.duration.toLowerCase().includes('present')
  );

  if (activeRoles.length === 0) {
    return experience[0];
  }

  return [...activeRoles].sort(
    (a, b) => getExperienceStartYear(b.duration) - getExperienceStartYear(a.duration)
  )[0];
}

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
  const currentRole = getCurrentPrimaryRole();
  const coreSkills = personalInfo.skills.core.slice(0, 4);
  const latestTimelineItems = timelineItems.slice(0, 2);
  const firstName = personalInfo.name.split(' ')[0];

  if (
    lowerMessage.includes('experience') ||
    lowerMessage.includes('background') ||
    lowerMessage.includes('intern') ||
    lowerMessage.includes('role')
  ) {
    return `${firstName} currently works as a ${currentRole.title} at ${currentRole.company}. The portfolio currently focuses on background, recent updates, and experience.`;
  }

  if (
    lowerMessage.includes('update') ||
    lowerMessage.includes('recent') ||
    lowerMessage.includes('latest') ||
    lowerMessage.includes('news')
  ) {
    return `Recent updates highlighted on the site include ${formatList(
      latestTimelineItems.map((item) => item.title)
    )}.`;
  }

  if (
    lowerMessage.includes('current focus') ||
    lowerMessage.includes('focus') ||
    lowerMessage.includes('working on') ||
    lowerMessage.includes('now')
  ) {
    return `${currentFocus.summary} Current priorities include ${formatList(
      currentFocus.items
    )}.`;
  }

  if (
    lowerMessage.includes('skill') ||
    lowerMessage.includes('technology') ||
    lowerMessage.includes('tech')
  ) {
    return `${firstName}'s core focus areas include ${formatList(coreSkills)}.`;
  }

  if (
    lowerMessage.includes('contact') ||
    lowerMessage.includes('hire') ||
    lowerMessage.includes('work with')
  ) {
    return `The best way to reach ${firstName} is by email at ${personalInfo.email}. You can also use the LinkedIn link in the left rail if you prefer a professional intro there.`;
  }

  if (
    lowerMessage.includes('hello') ||
    lowerMessage.includes('hi') ||
    lowerMessage.includes('hey')
  ) {
    return `Hello. I'm Nova, ${firstName}'s portfolio assistant. I can help you with ${firstName}'s background, recent updates, experience, skills, and contact details.`;
  }

  if (lowerMessage.includes('nova') || lowerMessage.includes('who are you')) {
    return `I'm Nova, the on-site assistant for ${firstName}'s portfolio. My role is simple: help visitors quickly find the relevant context about ${firstName}'s background, updates, and experience.`;
  }

  return `I can help with ${firstName}'s background, recent updates, experience, skills, or contact details. Ask about one of those areas and I'll answer from the portfolio content.`;
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
