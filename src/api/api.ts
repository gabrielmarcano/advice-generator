import axios from 'axios'
import type { Quote } from './types'

export async function getQuote() {
  return axios.get<Quote>('https://api.adviceslip.com/advice')
}
