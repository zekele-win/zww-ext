<script>
  import { push } from "svelte-spa-router";
  import walletModel from "../../model/wallet";
  import Navbar from "../../widgets/navbar.svelte";
  import { phrase as storePhrase } from "./store";

  const words = new Array(24).fill("");
  let createButtonisDisabled = true;

  function onCreate() {
    const phrase = words.join(" ");

    if (!walletModel.isValidPhrase(phrase)) {
      alert("Invalid phrase");
      return;
    }

    storePhrase.set(phrase);

    push("/create-wallet/complete");
  }

  function handlePaste(event) {
    event.preventDefault();

    const clipboardData = event.clipboardData.getData("text");
    const values = clipboardData.split(" ");

    values.forEach((value, index) => {
      if (index < words.length) {
        words[index] = value.toLowerCase().replace(/[^a-z]/g, "");
      }
    });

    createButtonisDisabled = !allWordsFilled();
  }

  function handleInput(event, index) {
    const inputValue = event.target.value.replace(/[^a-z]/g, "");
    words[index] = inputValue;
    createButtonisDisabled = !allWordsFilled();
  }

  function allWordsFilled() {
    return words.every((word) => word.trim() !== "");
  }
</script>

<div class="flex flex-col h-full">
  <Navbar />

  <div class="zw-frame flex flex-col w-full h-full my-3 px-3 py-3">
    <div class="flex justify-center text-center text-3xl py-3">
      Enter your recover phrase
    </div>

    <div class="grid grid-cols-3 gap-2 h-full p-3">
      {#each words as word, index}
        <div class="flex justify-center items-center">
          <div class="text-center w-1/6 me-1">
            {index + 1}.
          </div>
          <input
            class="zw-input w-5/6"
            type="text"
            value={word}
            on:paste={handlePaste}
            on:input={(e) => handleInput(e, index)}
          />
        </div>
      {/each}
    </div>

    <div class="flex justify-center text-center text-sm">
      Only 24-words phrase supported.
    </div>

    <div class="w-1/2 mx-auto py-3">
      <button
        class="zw-button-primary w-full"
        disabled={createButtonisDisabled}
        on:click={onCreate}
      >
        Saved & Continue
      </button>
    </div>
  </div>
</div>
