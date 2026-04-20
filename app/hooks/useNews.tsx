'use client';

import { useState, useEffect } from 'react';
import { getNews, NewsItem } from '@/lib/api';

export function useNews() {
  const [data, setData] = useState<NewsItem[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const news = await getNews();
        setData(news);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch news'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
}
