<script>
  import { pop } from "svelte-spa-router";
  export let showBackButton = false;
</script>

<div class="flex relative justify-center items-center pb-3">
  {#if showBackButton}
    <button class="absolute left-0 text-lg" on:click={() => pop()}>
      {"< "}Back
    </button>
  {/if}
  <div class="text-2xl">ZWW</div>
</div>
