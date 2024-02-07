<script lang="ts">
  import { toast } from "svoast"
  import { transactions } from "@/store"

  let newTransaction = { id: 0, text: "", amount: "" || 0 }

  const handleSubmit = () => {
    if (!newTransaction.text || !newTransaction.amount) {
      return toast.error("All fields are required!")
    }

    transactions.update((lists) => {
      newTransaction.id = Math.floor(Math.random() * 69420)
      newTransaction.amount = parseFloat(String(newTransaction.amount))
      lists.push(newTransaction)
      return lists
    })

    toast.success("New transaction added")
    newTransaction = { id: 0, text: "", amount: "" || 0 }
  }
</script>

<h3>Add new transaction</h3>

<form on:submit|preventDefault={handleSubmit}>
  <div class="form-control">
    <label for="text">Text</label>
    <input bind:value={newTransaction.text} type="text" id="text" placeholder="Enter text..."/>
  </div>

  <div class="form-control">
    <label for="amount">Amount <br />(negative - expense, positive - income)</label>
    <input bind:value={newTransaction.amount} type="text" id="amount" placeholder="Enter amount..."/>
  </div>

  <button class="btn">Add transaction</button>
</form>