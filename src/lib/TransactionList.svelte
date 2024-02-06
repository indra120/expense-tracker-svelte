<script lang="ts">
  import { toast } from "svoast"
  import { transactions } from "../store"

  const deleteTransactionById = (id: number) => () => {
    transactions.update((lists) => lists.filter((item) => item.id !== id))
    toast.success("Transaction has been deleted")
  }
</script>

<h3>History</h3>

<ul class="list">
  {#each $transactions as { id, text, amount } (id)}
    <li class="list" class:minus={amount < 0} class:plus={amount > 0}>
      {text}
      <span>{amount < 0 ? "-" : ""}${Math.abs(amount)}</span>
      <button class="delete-btn" on:click={deleteTransactionById(id)}>x</button>
    </li>
  {/each}
</ul>
