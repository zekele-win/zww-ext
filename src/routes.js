import Startup from "./pages/startup.svelte";
import CreateWallet_Welcome from "./pages/create-wallet/welcome.svelte";
import CreateWallet_CreatePassword from "./pages/create-wallet/create-password.svelte";
import CreateWallet_CreateMnemonic from "./pages/create-wallet/create-mnemonic.svelte";
import CreateWallet_ImportMnemonic from "./pages/create-wallet/import-mnemonic.svelte";
import CreateWallet_Complete from "./pages/create-wallet/complete.svelte";
import Home from "./pages/home.svelte";

export default {
  "/": Startup,
  "/create-wallet/welcome": CreateWallet_Welcome,
  "/create-wallet/create-password/*": CreateWallet_CreatePassword,
  "/create-wallet/create-mnemonic": CreateWallet_CreateMnemonic,
  "/create-wallet/import-mnemonic": CreateWallet_ImportMnemonic,
  "/create-wallet/complete": CreateWallet_Complete,
  "/home": Home,
};
