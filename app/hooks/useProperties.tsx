'use client';

import { useState, useEffect } from 'react';
import { getProperties, Property } from '@/lib/api';

export function useProperties() {
  const [data, setData] = useState<Property[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const properties = await getProperties();
        setData(properties);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch properties'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
}