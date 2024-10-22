<script>
  import { replace } from "svelte-spa-router";
  import walletModel from "../model/wallet";
  import Navbar from "../widgets/navbar.svelte";
  import Loading from "../widgets/loading.svelte";
  import Brand from "../assets/brand.svg";

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
  <Navbar />

  <div class="zw-frame h-[40rem] relative my-3 px-3 py-3">
    <div class="flex justify-center items-center text-center text-3xl py-3">
      Welcome back!
    </div>

    <div class="flex justify-center items-center h-[24rem]">
      <img src={Brand} width="120" height="120" alt="" />
    </div>

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
