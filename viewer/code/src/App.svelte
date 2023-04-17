<script>
  import Schedule from "./lib/Schedule.svelte";
  import "./app.css";
  import Filters from "./lib/Filters.svelte";
  import Nav from "./lib/components/Nav.svelte";
</script>

<Nav />
<main class="pt-8">
  <div class="">
    <Filters />
  </div>

  <div class="">
    <Schedule />
  </div>
</main>