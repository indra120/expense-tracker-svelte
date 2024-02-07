import { writable } from "svelte/store"

export interface Transaction {
  id: number
  text: string
  amount: number
}

export const transactions = writable<Transaction[]>([])