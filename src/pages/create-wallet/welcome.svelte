<script>
  import { push } from "svelte-spa-router";
  import Navbar from "../../widgets/navbar.svelte";
  import Brand from "../../assets/brand.svg";
</script>

<div class="flex flex-col h-full">
  <Navbar />

  <div class="zw-frame flex flex-col w-full h-full my-3 px-3 py-3">
    <div class="flex justify-center text-center text-3xl py-3">
      Let's get started
    </div>
    <div class="flex justify-center text-center text-md">
      ZWW is a private Web3 wallet.
    </div>

    <div class="flex justify-center h-full">
      <img src={Brand} width="120" height="120" alt="" />
    </div>

    <div class="w-1/2 mx-auto py-3">
      <button
        class="zw-button-primary w-full"
        on:click={() => push("/create-wallet/create-password/create")}
      >
        Create a new wallet
      </button>
    </div>

    <div class="w-1/2 mx-auto py-3">
      <button
        class="zw-button w-full"
        on:click={() => push("/create-wallet/create-password/import")}
      >
        Import an existing wallet
      </button>
    </div>
  </div>
</div>
