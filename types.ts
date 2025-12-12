export interface Event {
  id: string;
  title: string;
  description: string;
  dateRange: string;
  images: string[];
  location: string;
  category: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
