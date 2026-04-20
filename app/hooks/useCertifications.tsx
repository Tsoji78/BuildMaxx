'use client';

import { useState, useEffect } from 'react';
import { getCertifications, Certification } from '@/lib/api';

export function useCertifications() {
  const [data, setData] = useState<Certification[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const certifications = await getCertifications();
        setData(certifications);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch certifications'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
}
