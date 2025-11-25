export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface ServiceNode {
  id: string;
  title: string;
  description: string;
  type: 'saas' | 'devops' | 'ai-dev' | 'agents';
}

export enum ChatRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  role: ChatRole;
  text: string;
}
