<script>
  import Loading from "../assets/loading.svg";
  export let isLoading;
</script>

{#if isLoading}
  <div
    class="flex items-center justify-center fixed inset-0 bg-white bg-opacity-70 z-50"
  >
    <img src={Loading} alt="..." width="120" height="30" />
  </div>
{/if}
