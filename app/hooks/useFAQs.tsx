'use client';

import { useState, useEffect } from 'react';
import { getFAQs, FAQItem } from '@/lib/api';

export function useFAQs() {
  const [data, setData] = useState<FAQItem[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const faqs = await getFAQs();
        setData(faqs);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch FAQs'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
}
