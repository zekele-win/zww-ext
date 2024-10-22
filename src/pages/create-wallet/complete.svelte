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

<div>
  <Navbar />

  <div class="zw-frame h-[40rem] relative my-3 px-3 py-3">
    <div class="flex justify-center text-3xl py-3">Create your wallet now.</div>

    <div class="flex justify-center h-[30rem]">
      <img src={Brand} width="120" height="120" alt="" />
    </div>

    <div class="absolute left-0 right-0 bottom-3 flex justify-center py-3">
      <button class="zw-button w-1/2" on:click={onComplete}>GO</button>
    </div>
  </div>

  <Loading {isLoading} />
</div>
