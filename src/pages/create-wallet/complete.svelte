<script>
  import { push } from "svelte-spa-router";
  import Navbar from "../../widgets/navbar.svelte";
  import walletLib from "../../lib/wallet";
  import {
    password as storePassword,
    mnemonic as storeMnemonic,
  } from "./store";

  function onComplete() {
    walletLib.create($storeMnemonic, $storePassword).then(() => {
      push("/home");
    });
  }
</script>

<div>
  <Navbar showBackButton="true" />

  <div class="zw-frame py-3">
    <div class="flex justify-center text-3xl py-3">
      Ready to enter your wallet?
    </div>

    <div class="flex justify-center py-3">
      <button class="zw-button w-1/2" on:click={onComplete}>OK</button>
    </div>
  </div>
</div>
