<script>
  import walletModel from "../model/wallet";
  import Navbar from "../widgets/navbar.svelte";
</script>

<div>
  <Navbar />

  <div class="zw-frame flex justify-center items-center">
    {walletModel.wallet.address}
  </div>
</div>
