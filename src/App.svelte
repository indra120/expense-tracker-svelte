<script lang="ts">
  import { afterUpdate, onMount } from "svelte"
  import { Toasts } from "svoast"
  import { transactions } from "@/store"
  import TransactionList from "@/lib/TransactionList.svelte"
  import Balance from "@/lib/Balance.svelte"
  import IncomeExpenses from "@/lib/IncomeExpenses.svelte"
  import AddTransaction from "@/lib/AddTransaction.svelte"

  onMount(() => {
    transactions.set(JSON.parse(localStorage.getItem("transaction-list")!) || [])
  })

  afterUpdate(() => {
    localStorage.setItem("transaction-list", JSON.stringify($transactions))
  })
</script>

<h2>Expense Tracker</h2>

<div class="container">
  <Balance />
  <IncomeExpenses />
  <TransactionList />
  <AddTransaction />
</div>

<Toasts position="top-right" />
