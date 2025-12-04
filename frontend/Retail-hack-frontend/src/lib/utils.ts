import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(date))
}

export function getPlatformIcon(platform: string): string {
  const icons: Record<string, string> = {
    youtube: '▶️',
    instagram: '📸',
    facebook: '📘',
    amazon: '📦',
    flipkart: '🛒',
  }
  return icons[platform] || '📄'
}

export function generateMockImage(platform: string): string {
  const colors: Record<string, string> = {
    youtube: 'ef4444',
    instagram: 'ec4899',
    facebook: '3b82f6',
    amazon: 'f59e0b',
    flipkart: '8b5cf6',
  }
  
  const color = colors[platform] || '6b7280'
  return `https://placehold.co/400x400/${color}/white?text=${platform.toUpperCase()}`
}