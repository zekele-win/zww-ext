<script>
  import { pop } from "svelte-spa-router";
</script>

<div>
  <div class="flex relative justify-center items-center mb-6">
    <button class="absolute left-0 text-lg" on:click={() => pop()}>{"< "}Back</button>
    <div class="text-2xl">ZWW</div>
  </div>

  <div class="border border-spacing-1 border-gray-300 rounded-xl">
    <div class="flex justify-center my-3 text-3xl">Create a new wallet</div>
  </div>
</div>
