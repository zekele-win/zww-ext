<script>
  import { push } from "svelte-spa-router";
  import walletModel from "../../model/wallet";
  import Navbar from "../../widgets/navbar.svelte";
  import { phrase as storePhrase } from "./store";

  const phrase = walletModel.generatePhrase();
  const words = phrase.split(" ");

  const textCopy = "Copy to clipboard";
  const textCopied = "Copied";
  let copyButtonText = textCopy;
  async function onCopy() {
    await navigator.clipboard.writeText(words.join(" "));
    copyButtonText = textCopied;
    setTimeout(() => {
      copyButtonText = textCopy;
    }, 1_000);
  }

  function onCreate() {
    storePhrase.set(phrase);
    push("/create-wallet/complete");
  }
</script>

<div>
  <Navbar />

  <div class="zw-frame h-[40rem] relative my-3 px-3 py-3">
    <div class="flex justify-center text-3xl py-3">Save your recover phrase</div>

    <div class="grid grid-cols-3 gap-3 h-[28rem] p-3">
      {#each words as word, index}
        <div class="flex justify-center items-center">
          <div class="text-center w-1/6 me-1">
            {index + 1}.
          </div>
          <input class="zw-input w-5/6 p-3" type="text" value={word} readonly />
        </div>
      {/each}
    </div>

    <div class="absolute left-0 right-0 bottom-3">
      <div class="w-1/2 mx-auto text-center py-1">
        <button class="zw-button-link w-fit" on:click={onCopy} bind>
          {copyButtonText}
        </button>
      </div>

      <div class="w-1/2 mx-auto py-3">
        <button class="zw-button-primary w-full" on:click={onCreate}>
          Saved & Continue
        </button>
      </div>
    </div>
  </div>
</div>
