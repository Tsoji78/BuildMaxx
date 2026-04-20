// app/lib/data.ts

const API_BASE = '/data';

async function fetchData<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    next: { revalidate: 3600 },   // Revalidate every hour (ISR)
    cache: 'force-cache',
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}`);
  }

  return res.json();
}

// ====================== SERVER DATA FETCHERS ======================

export async function getProperties() {
  return fetchData<Property[]>('/properties.json');
}

export async function getProperty(id: string) {
  return fetchData<Property>(`/properties/${id}.json`);
}

export async function getTeam() {
  return fetchData<TeamMember[]>('/team.json');
}

export async function getNews() {
  return fetchData<NewsItem[]>('/news.json');
}

export async function getFAQs() {
  return fetchData<FAQItem[]>('/faq.json');
}

export async function getCertifications() {
  return fetchData<Certification[]>('/certifications.json');
}

export async function getCareers() {
  return fetchData<JobPosting[]>('/careers.json');
}

// ====================== TYPES ======================

export interface Property {
  id: string;
  title: string;
  location: string;
  type: string;
  price: number;
  roi: number;
  image: string;
  description: string;
  sqft: number;
  beds: number;
  baths: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Certification {
  id: string;
  ownerName: string;
  title: string;
  issuer: string;
  year: string;
  pdfUrl: string;
}

export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
}