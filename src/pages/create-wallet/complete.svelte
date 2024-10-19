<script>
  import { push } from "svelte-spa-router";
  import Navbar from "../../widgets/navbar.svelte";
  import Loading from "../../widgets/loading.svelte";
  import walletModel from "../../model/wallet";
  import { password as storePassword, phrase as storePhrase } from "./store";

  let isLoading = false;

  function onComplete() {
    isLoading = true;
    setTimeout(() => {
      try {
        walletModel.createWallet($storePhrase, $storePassword);
        push("/home");
      } catch {
        alert("Something wrong.");
      } finally {
        isLoading = false;
      }
    }, 1_000);
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

  <Loading {isLoading} />
</div>
