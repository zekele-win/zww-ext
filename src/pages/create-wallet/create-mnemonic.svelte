<script>
  import { push } from "svelte-spa-router";
  import walletLib from "../../lib/wallet";
  import Navbar from "../../widgets/navbar.svelte";
  import { mnemonic as storeMnemonic } from "./store";

  const mnemonic = walletLib.generateMnemonic();
  const words = mnemonic.split(" ");

  function onCreate() {
    storeMnemonic.set(mnemonic);

    push("/create-wallet/complete");
  }
</script>

<div>
  <Navbar showBackButton="true" />

  <div class="zw-frame py-3">
    <div class="flex justify-center text-3xl py-3">Create mnemonic</div>

    <div class="grid grid-cols-3 gap-4 p-3">
      {#each words as word, index}
        <div class="flex justify-center items-center">
          <div class="text-center w-1/6 me-1">
            {index + 1}
          </div>
          <input
            type="text"
            value={word}
            readonly
            class="border border-spacing-1 border-gray-300 rounded-md w-5/6 p-1"
          />
        </div>
      {/each}
    </div>

    <div class="w-1/2 mx-auto py-3">
      <button class="zw-button-primary w-full" on:click={onCreate}>
        Saved & Continue
      </button>
    </div>
  </div>
</div>
