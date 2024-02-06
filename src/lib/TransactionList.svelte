<script lang="ts">
  import { transactions } from "../store"
</script>

<h3>History</h3>

<ul class="list">
  {#each $transactions as { id, text, amount } (id)}
    <li class="list" class:minus={amount < 0} class:plus={amount > 0}>
      {text}
      <span>{amount < 0 ? "-" : ""}${Math.abs(amount)}</span>
    </li>
  {/each}
</ul>
