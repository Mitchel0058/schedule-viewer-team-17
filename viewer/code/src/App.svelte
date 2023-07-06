<script>
  import Schedule from "./lib/Schedule.svelte";
  import "./app.css";
  import Filters from "./lib/Filters.svelte";
  import Nav from "./lib/components/Nav.svelte";
  import ExcelInput from "./lib/components/ExcelInput.svelte";
  import DropZone from "./lib/components/DropZone.svelte";
</script>

<Nav />
<main class="pt-12">
  <div class="">
    <Filters />
  </div>

  <div class="">
    <ExcelInput />
  </div>

  <div class="">
    <DropZone />
  </div>

  <div class="">
    <Schedule />
  </div>
</main>
