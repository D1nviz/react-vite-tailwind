import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../client';

interface User {
  id: number;
  name: string;
  email: string;
}

export function useUser(userId: number) {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: () => apiClient.get<User>(`users/${userId}`),
  });
}
