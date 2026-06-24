/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  detailedDescription: string;
  iconName: string;
  benefits: string[];
  techStack: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'Full-Stack' | 'AI & Data' | 'Product Design';
  clientName: string;
  shortDesc: string;
  challenge: string;
  approach: string;
  results: string;
  tags: string[];
  duration: string;
  rating?: number;
  featured: boolean;
}

export interface EstimateOptions {
  projectType: string; // 'web' | 'mobile' | 'ai' | 'fullstack'
  scale: string; // 'mvp' | 'standard' | 'enterprise'
  integrations: string[]; // 'auth', 'payment', 'database', 'ai', 'analytics'
  timelineSpeed: string; // 'relaxed' | 'standard' | 'expedited'
}

export interface EstimateResult {
  minPrice: number;
  maxPrice: number;
  minDays: number;
  maxDays: number;
  breakdown: { name: string; cost: number }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarUrl: string;
  rating: number;
  projectCompleted: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget: string;
  message: string;
  timestamp: string;
}

