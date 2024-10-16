import Welcome from './pages/Welcome.svelte';
import CreateWallet from './pages/CreateWallet.svelte';
import ImportWallet from './pages/ImmportWallet.svelte';

export default {
  '/': Welcome,
  '/create-wallet': CreateWallet,
  '/import-wallet': ImportWallet,
}
