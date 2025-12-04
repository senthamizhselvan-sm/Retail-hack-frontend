export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Creative {
  id: string;
  title: string;
  platform: 'youtube' | 'instagram' | 'facebook' | 'amazon' | 'flipkart';
  thumbnailUrl: string;
  prompt?: string;
  createdAt: Date;
  dimensions: {
    width: number;
    height: number;
  };
}

export interface DashboardStats {
  streak: number;
  creativesGenerated: number;
  xpPoints: number;
  badges: string[];
}

export interface Template {
  id: string;
  name: string;
  platform: 'youtube' | 'instagram' | 'amazon' | 'flipkart';
  thumbnailUrl: string;
  dimensions: {
    width: number;
    height: number;
  };
}

export interface CanvasElement {
  id: string;
  type: 'text' | 'image' | 'shape';
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  fill?: string;
  text?: string;
  fontSize?: number;
  fontFamily?: string;
  src?: string;
}