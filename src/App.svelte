<script>
  import Router from "svelte-spa-router";
  import routes from "./routes";
</script>

<div class="sm:max-w-lg mx-auto h-screen p-3">
  <Router {routes} />
</div>
