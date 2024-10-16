<script>
  import { push } from "svelte-spa-router";
  import Brand from "../assets/brand.svg";
</script>

<div>
  <div class="flex justify-center items-center text-2xl mb-6">
    ZWW
  </div>

  <div class="border border-spacing-1 border-gray-300 rounded-xl">
    <div class="flex justify-center my-3 text-3xl">Let's get started</div>

    <div class="flex justify-center my-6">
      <img class="m-2" src={Brand} width="144" height="144" alt="" />
    </div>

    <div class="flex justify-center my-6">
      <button
        class="w-1/2 px-4 py-2 bg-transparent border border-spacing-1 border-gray-500 rounded-xl text-black hover:bg-black hover:text-white"
        on:click={() => push("/create-wallet")}
      >
        Create a new wallet
      </button>
    </div>

    <div class="flex justify-center my-6">
      <button
        class="w-1/2 px-4 py-2 bg-transparent border border-spacing-1 border-gray-500 rounded-xl text-black hover:bg-black hover:text-white"
        on:click={() => push("/import-wallet")}
      >
        Import a existing wallet
      </button>
    </div>
  </div>
</div>
