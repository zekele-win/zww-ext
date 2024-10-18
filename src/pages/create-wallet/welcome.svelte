<script>
  import { push } from "svelte-spa-router";
  import Navbar from "../../widgets/navbar.svelte";
</script>

<div>
  <Navbar />

  <div class="zw-frame py-3">
    <div class="flex justify-center text-3xl py-3">Let's get started</div>

    <div class="flex justify-center py-3">
      <button
        class="zw-button-primary w-1/2"
        on:click={() => push("/create-wallet/create-password/create")}
      >
        Create a new wallet
      </button>
    </div>

    <div class="flex justify-center py-3">
      <button
        class="zw-button w-1/2"
        on:click={() => push("/create-wallet/create-password/import")}
      >
        Import a existing wallet
      </button>
    </div>
  </div>
</div>
