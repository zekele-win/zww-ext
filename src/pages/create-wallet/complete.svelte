<script>
  import { push } from "svelte-spa-router";
  import Navbar from "../../widgets/navbar.svelte";
  import Loading from "../../widgets/loading.svelte";
  import walletModel from "../../model/wallet";
  import { password as storePassword, phrase as storePhrase } from "./store";
  import Brand from "../../assets/brand.svg";

  let isLoading = false;

  function onComplete() {
    isLoading = true;
    setTimeout(() => {
      walletModel
        .createWallet($storePhrase, $storePassword)
        .then(() => {
          push("/home");
        })
        .catch(() => {
          alert("Something wrong.");
        })
        .finally(() => {
          isLoading = false;
        });
    }, 0);
  }
</script>

<div class="flex flex-col h-full">
  <Navbar />

  <div class="zw-frame flex flex-col w-full h-full my-3 px-3 py-3">
    <div class="flex justify-center text-center text-3xl py-3">
      Create your wallet now.
    </div>

    <div class="flex justify-center h-full">
      <img src={Brand} width="120" height="120" alt="" />
    </div>

    <div class="w-1/2 mx-auto py-3">
      <button class="zw-button-primary w-full" on:click={onComplete}>GO</button>
    </div>
  </div>

  <Loading {isLoading} />
</div>
