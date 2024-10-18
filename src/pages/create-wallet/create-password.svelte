<script>
  import { push } from "svelte-spa-router";
  import Navbar from "../../widgets/navbar.svelte";
  import { password as storePassword } from "./store";

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
      push("/create-wallet/create-mnemonic");
    } else if (params.wild == "import") {
      push("/create-wallet/import-mnemonic");
    }
  }
</script>

<div>
  <Navbar showBackButton=true />

  <div class="zw-frame py-3">
    <div class="flex justify-center text-3xl py-3">Create password</div>

    <div class="w-1/2 mx-auto py-3">
      <div class="mb-2">
        <label for="password">New password</label>
        <button
          class="float-right hover:underline hover:underline-offset-4 mb-2"
          on:click={hideOrShowPassword}
        >
          {passwordElementHide ? "Show" : "Hide"}
        </button>
      </div>
      <input
        class="zw-input w-full py-2"
        name="password"
        type="password"
        bind:this={passwordElement}
        bind:value={password}
      />
    </div>

    <div class="w-1/2 mx-auto py-3">
      <div class="mb-2">
        <label for="confirm-password">Confirm password</label>
      </div>
      <input
        class="zw-input w-full p-2"
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
