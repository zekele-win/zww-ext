import Startup from "./pages/startup.svelte";
import CreateWallet_Welcome from "./pages/create-wallet/welcome.svelte";
import CreateWallet_CreatePassword from "./pages/create-wallet/create-password.svelte";
import CreateWallet_CreatePhrase from "./pages/create-wallet/create-phrase.svelte";
import CreateWallet_ImportPhrase from "./pages/create-wallet/import-phrase.svelte";
import CreateWallet_Complete from "./pages/create-wallet/complete.svelte";
import Home from "./pages/home.svelte";

export default {
  "/": Startup,
  "/create-wallet/welcome": CreateWallet_Welcome,
  "/create-wallet/create-password/*": CreateWallet_CreatePassword,
  "/create-wallet/create-phrase": CreateWallet_CreatePhrase,
  "/create-wallet/import-phrase": CreateWallet_ImportPhrase,
  "/create-wallet/complete": CreateWallet_Complete,
  "/home": Home,
};
