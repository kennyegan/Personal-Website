import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // For now, we'll return a simple response based on keywords
    // In the future, this can be connected to OpenAI, Claude, or other AI services
    const response = generateNovaResponse(message);

    return NextResponse.json({
      message: response,
      timestamp: new Date().toISOString()
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

  // Keywords and responses
  if (lowerMessage.includes('project') || lowerMessage.includes('work')) {
    return "Kenny has worked on numerous exciting projects! From AI-powered applications to blockchain solutions and research in machine learning. Some highlights include his work in artificial intelligence, full-stack development, and innovative research papers. Would you like to know about any specific project or technology?";
  }
  
  if (lowerMessage.includes('research') || lowerMessage.includes('paper') || lowerMessage.includes('academic')) {
    return "Kenny is actively involved in research, particularly in AI and machine learning. He has published several papers and contributes to the advancement of the field. His research focuses on practical applications of AI technology and innovative approaches to complex problems. Is there a specific research area you're interested in?";
  }
  
  if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech')) {
    return "Kenny is proficient in a wide range of technologies including AI/ML, React, Next.js, Python, TypeScript, cloud computing, and blockchain. He specializes in full-stack development with a focus on cutting-edge technologies and research. What specific technology would you like to know more about?";
  }
  
  if (lowerMessage.includes('contact') || lowerMessage.includes('hire') || lowerMessage.includes('work with')) {
    return "Kenny is always interested in exciting opportunities! You can reach out to him through the contact page on this website. He's particularly interested in AI projects, innovative startups, research collaborations, and consulting opportunities. Would you like me to guide you to his contact information?";
  }
  
  if (lowerMessage.includes('experience') || lowerMessage.includes('background')) {
    return "Kenny has 5+ years of experience in software development and AI research. He's built 20+ projects, published research papers, and contributed to numerous open-source initiatives. His background spans from full-stack development to cutting-edge AI research and blockchain technology.";
  }
  
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return "Hello! Great to meet you! I'm Nova, Kenny's AI assistant. I'm here to help you learn more about Kenny's work, projects, and expertise. Feel free to ask me anything about his background, skills, research, or projects!";
  }
  
  if (lowerMessage.includes('nova') || lowerMessage.includes('who are you')) {
    return "I'm Nova, Kenny's AI assistant! I'm designed to help visitors learn more about Kenny's work and expertise. Think of me as your guide to understanding his projects, research, and capabilities. I can answer questions about his background, skills, and various endeavors. What would you like to know?";
  }

  // Default response
  return "That's an interesting question! While I'm still learning and growing, I can help you discover more about Kenny's work in AI, software development, and research. Feel free to ask me about his projects, skills, experience, or how to get in touch with him. What specific aspect of Kenny's work interests you most?";
}
