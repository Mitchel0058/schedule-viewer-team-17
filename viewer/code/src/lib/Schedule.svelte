<script>
    import Week from "./components/Week.svelte";
    const fetchSchedule = (async () => {
        const response = await fetch("http://localhost:3010/schedule");
        console.log("wait what?", response);
        const jsonResponse = await response.json();
        //console.log(jsonResponse);
        return jsonResponse;
    })();
</script>

{#await fetchSchedule}
    <p>...waiting</p>
{:then data}
    <!-- The week -->
    {#each data.data as week}
        <Week week={week} />
    {/each}
{:catch error}
    <p>An error occurred!</p>
{/await}