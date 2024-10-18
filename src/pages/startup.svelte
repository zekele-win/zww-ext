<script>
  import { onMount } from "svelte";
  import { replace } from "svelte-spa-router";
  import wallet from "../lib/wallet";
  import Loading from "../assets/loading.svg";
  import Navbar from "../widgets/navbar.svelte";

  // Runs after the component is first rendered to the DOM.
  onMount(async () => {
    if (await wallet.existed()) {
      setTimeout(() => {
        replace("/home");
      }, 3_000);
    } else {
      setTimeout(() => {
        replace("/create-wallet/welcome");
      }, 3_000);
    }
  });
</script>

<div>
  <Navbar />

  <div class="py-9">
    <div class="flex justify-center py-3">This is a Web3 wallet.</div>
    <div class="flex justify-center py-9">
      <img class="m-2" src={Loading} width="120" height="30" alt="" />
    </div>
  </div>
</div>
