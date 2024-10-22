<script>
  import Loading from "../assets/loading.svg";
  export let isLoading;
</script>

{#if isLoading}
  <div
    class="flex items-center justify-center fixed inset-0 bg-black bg-opacity-25 z-50"
  >
    <img
      class="animate-spin"
      src={Loading}
      alt="..."
      width="128"
      height="128"
    />
  </div>
{/if}
