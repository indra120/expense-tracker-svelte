import { writable } from "svelte/store"

export interface Transaction {
  id: number
  text: string
  amount: number
}

export const transactions = writable<Transaction[]>([
  { id: 1, text: "Salary", amount: 500 },
  { id: 2, text: "Foods", amount: -100 },
  { id: 3, text: "Wi-Fi", amount: -25 },
])
