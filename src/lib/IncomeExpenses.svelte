<script lang="ts">
  import { transactions, type Transaction } from "@/store"

  const calculate = (arr: Transaction[]) => arr.reduce((acc, data) => acc + data.amount, 0).toFixed(2)

  $: income = calculate($transactions.filter((data) => data.amount > 0))
  $: expenses = calculate($transactions.filter((data) => data.amount < 0))
</script>

<div class="inc-exp-container">
  <div>
    <h4>Income</h4>
    <p class="money plus">+${income}</p>
  </div>

  <div>
    <h4>Expense</h4>
    <p class="money minus">-${+expenses * -1}</p>
  </div>
</div>
