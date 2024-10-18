<script>
  import Router from "svelte-spa-router";
  import routes from "./routes";
</script>

<div class="bg-gray-50 md:max-w-2xl mx-auto p-3">
  <Router {routes} />
</div>
