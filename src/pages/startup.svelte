<script>
  import { onMount } from "svelte";
  import { replace } from "svelte-spa-router";
  import walletModel from "../model/wallet";
  import Loading from "../assets/loading.svg";

  // Runs after the component is first rendered to the DOM.
  onMount(async () => {
    walletModel
      .hasWallet()
      .then((hasWallet) => {
        if (hasWallet) replace("/login/home");
        else replace("/create-wallet/welcome");
      })
      .catch((err) => {
        alert(err);
      });
  });
</script>

<div>
  <div class="py-9">
    <div class="text-3xl flex justify-center">ZWW</div>
    <div class="flex justify-center py-9">
      <img class="m-2" src={Loading} width="120" height="30" alt="" />
    </div>
  </div>
</div>
