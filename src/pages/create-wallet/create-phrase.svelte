<script>
  import { push } from "svelte-spa-router";
  import walletModel from "../../model/wallet";
  import Navbar from "../../widgets/navbar.svelte";
  import { phrase as storePhrase } from "./store";

  const phrase = walletModel.generatePhrase();
  const words = phrase.split(" ");

  function onCreate() {
    storePhrase.set(phrase);

    push("/create-wallet/complete");
  }
</script>

<div>
  <Navbar showBackButton=true />

  <div class="zw-frame py-3">
    <div class="flex justify-center text-3xl py-3">Create phrase</div>

    <div class="grid grid-cols-3 gap-4 p-3">
      {#each words as word, index}
        <div class="flex justify-center items-center">
          <div class="text-center w-1/6 me-1">
            {index + 1}
          </div>
          <input
            class="border border-spacing-1 border-gray-300 rounded-md w-5/6 p-1"
            type="text"
            value={word}
            readonly
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
