<script>
  import { Toasts } from "svoast"
  import TransactionList from "./lib/TransactionList.svelte"
  import Balance from "./lib/Balance.svelte"
  import IncomeExpenses from "./lib/IncomeExpenses.svelte"
  import AddTransaction from "./lib/AddTransaction.svelte"
</script>

<h2>Expense Tracker</h2>

<div class="container">
  <Balance />
  <IncomeExpenses />
  <TransactionList />
  <AddTransaction />
</div>

<Toasts position='top-right'/>
