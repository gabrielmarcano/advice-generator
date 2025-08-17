import { useQuery } from '@tanstack/react-query'
import { getQuote } from './api'

export const useQuote = (config?: object) =>
  useQuery({
    queryKey: ['fetchQuote'],
    queryFn: () => getQuote(),
    ...config,
  })
