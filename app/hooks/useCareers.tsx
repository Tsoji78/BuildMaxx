'use client';

import { useState, useEffect } from 'react';
import { getCareers, JobPosting } from '@/lib/api';

export function useCareers() {
  const [data, setData] = useState<JobPosting[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const careers = await getCareers();
        setData(careers);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch careers'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
}
