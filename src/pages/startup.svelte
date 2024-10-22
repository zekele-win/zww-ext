<script>
  import { replace } from "svelte-spa-router";
  import { onMount } from "svelte";
  import walletModel from "../model/wallet";
  import Brand from "../assets/brand.svg";

  // Runs after the component is first rendered to the DOM.
  onMount(async () => {
    setTimeout(() => {
      walletModel
        .hasWallet()
        .then((hasWallet) => {
          if (hasWallet) replace("/login/home");
          else replace("/create-wallet/welcome");
        })
        .catch((err) => {
          alert(err);
        });
    }, 3_000);
  });
</script>

<div class="flex justify-center h-full">
  <img class="animate-bounce" src={Brand} width="120" height="120" alt="" />
</div>
