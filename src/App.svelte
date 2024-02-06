<script lang="ts">
  import TransactionList from "./lib/TransactionList.svelte"
  import Balance from "./lib/Balance.svelte"
</script>

<h2>Expense Tracker</h2>

<div class="container">
  <Balance />
  <TransactionList />
</div>
