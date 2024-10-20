<script>
  import { replace } from "svelte-spa-router";
  import walletModel from "../model/wallet";
  import Loading from "../widgets/loading.svelte";

  export let params = {};

  let isLoading = false;

  let password;

  function onEnter() {
    isLoading = true;
    walletModel
      .loadWallet(password)
      .then(() => {
        if (params.wild == "home") {
          replace("/home");
        }
      })
      .catch(() => {
        alert("Invalid password");
      })
      .finally(() => {
        isLoading = false;
      });
  }
</script>

<div>
  <div class="py-9">
    <div class="text-3xl flex justify-center py-3">ZWW</div>

    <div class="w-1/2 mx-auto py-3">
      <div class="mb-2">
        <label for="confirm-password">Password</label>
      </div>
      <input
        class="zw-input w-full p-2"
        name="password"
        type="password"
        bind:value={password}
      />
    </div>

    <div class="w-1/2 mx-auto py-3">
      <button
        class="zw-button-primary w-full"
        disabled={!password || password.length == 0}
        on:click={onEnter}
      >
        Login
      </button>
    </div>
  </div>
  
  <Loading {isLoading} />
</div>
