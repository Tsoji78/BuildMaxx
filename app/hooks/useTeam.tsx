'use client';

import { useState, useEffect } from 'react';
import { getTeam, TeamMember } from '@/lib/api';

export function useTeam() {
  const [data, setData] = useState<TeamMember[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const team = await getTeam();
        setData(team);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch team'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
}
