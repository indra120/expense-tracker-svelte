<script lang="ts">
  import { transactions } from "@/store"
  $: total = $transactions.reduce((acc, data) => acc + data.amount, 0)
</script>

<h4>Your Balance</h4>
<h1>${total}</h1>