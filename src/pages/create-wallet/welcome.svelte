<script>
  import { push } from "svelte-spa-router";
  import Navbar from "../../widgets/navbar.svelte";
  import Brand from "../../assets/brand.svg";
</script>

<div>
  <Navbar />

  <div class="zw-frame h-[40rem] relative my-3 px-3 py-3">
    <div class="flex justify-center items-center text-center text-3xl py-3">
      Let's get started
    </div>
    <div class="flex justify-center items-center text-center text-md">
      ZWW is a private Web3 wallet.
    </div>

    <div class="flex justify-center items-center h-[24rem]">
      <img src={Brand} width="120" height="120" alt="" />
    </div>

    <div class="absolute left-0 right-0 bottom-3">
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
          Import an existing wallet
        </button>
      </div>
    </div>
  </div>
</div>
