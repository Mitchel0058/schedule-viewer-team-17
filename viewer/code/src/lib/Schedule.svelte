<script>
    import { onMount } from 'svelte';
    import Week from "./components/Week.svelte";

    let data;
    let currentWeekIndex = 0;

    const fetchSchedule = async () => {
        const response = await fetch("http://localhost:3010/schedule");
        const jsonResponse = await response.json();
        data = jsonResponse.data;
    };

    onMount(fetchSchedule);

    function nextWeek() {
        currentWeekIndex = (currentWeekIndex + 1) % data.length;
    }

    function previousWeek() {
        currentWeekIndex = (currentWeekIndex - 1 + data.length) % data.length;
    }
</script>
<style>
    .button-container {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }

    .button-container button {
        border: 2px solid blue;
        background-color: rgb(12, 186, 245);
        color: white;
        padding: 10px 20px;
        margin: 0 10px;
        cursor: pointer;
    }
</style>


<div class="button-container">
    <button on:click={previousWeek}>Previous Week</button>
    <button on:click={nextWeek}>Next Week</button>
</div>


{#if data}
    <Week week={data[currentWeekIndex]} />
{/if}
