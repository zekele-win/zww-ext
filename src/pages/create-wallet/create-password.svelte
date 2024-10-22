<script>
  import { push } from "svelte-spa-router";
  import Navbar from "../../widgets/navbar.svelte";
  import { password as storePassword } from "./store";
  import Brand from "../../assets/brand.svg";

  export let params = {};

  let passwordElement;
  let confirmPasswordElement;
  let passwordElementHide = true;
  let password = "";
  let confirmPassword = "";

  function hideOrShowPassword() {
    passwordElementHide = !passwordElementHide;
    passwordElement.type = passwordElementHide ? "password" : "text";
    confirmPasswordElement.type = passwordElementHide ? "password" : "text";
  }

  function onCreate() {
    storePassword.set(password);

    if (params.wild == "create") {
      push("/create-wallet/generate-phrase");
    } else if (params.wild == "import") {
      push("/create-wallet/import-phrase");
    }
  }
</script>

<div class="flex flex-col h-full">
  <Navbar />

  <div class="zw-frame flex flex-col w-full h-full my-3 px-3 py-3">
    <div class="flex justify-center text-center text-3xl py-3">
      Create password
    </div>
    <div class="flex justify-center text-center text-md">
      This password will unlock ZWW only on this device.
    </div>

    <div class="flex justify-center h-full">
      <img src={Brand} width="120" height="120" alt="" />
    </div>

    <div class="w-1/2 mx-auto pt-3 pb-1.5">
      <div class="mb-1">
        <label for="password">New password</label>
        <button
          class="zw-button-link float-right"
          on:click={hideOrShowPassword}
        >
          {passwordElementHide ? "Show" : "Hide"}
        </button>
      </div>
      <input
        class="zw-input w-full"
        name="password"
        type="password"
        bind:this={passwordElement}
        bind:value={password}
      />
    </div>

    <div class="w-1/2 mx-auto pt-1.5 pb-3">
      <div class="mb-1">
        <label for="confirm-password">Confirm password</label>
      </div>
      <input
        class="zw-input w-full"
        name="confirm-password"
        type="password"
        bind:this={confirmPasswordElement}
        bind:value={confirmPassword}
      />
    </div>

    <div class="w-1/2 mx-auto py-3">
      <button
        class="zw-button-primary w-full"
        disabled={!password ||
          password.length == 0 ||
          password !== confirmPassword}
        on:click={onCreate}
      >
        Create a new wallet
      </button>
    </div>
  </div>
</div>
