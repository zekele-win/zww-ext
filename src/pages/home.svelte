<script>
  import walletModel from "../model/wallet";
  import Navbar from "../widgets/navbar.svelte";
</script>

<div>
  <Navbar />

  <div class="zw-frame">
    <div class="flex justify-center items-center py-3">
      {walletModel.wallet.address}
    </div>

    <div class="flex justify-center items-center py-3">
      {walletModel.wallet.address}
    </div>
  </div>
</div>
