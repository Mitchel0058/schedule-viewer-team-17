<script>
    export let filter;
    export let name;
    const fetchData = (async () => {
        const response = await fetch(`http://localhost:3010/${filter}`);
        console.log("wait what?", response);
        const jsonResponse = await response.json();
        return jsonResponse;
    })();
</script>

<div class="flex flex-col">
    <h3>{name}</h3>
    {#await fetchData}
        <p>...waiting</p>
    {:then data}
        <ul class="p-2">
            <li
                class="filter inline-block m-1 border-2 rounded-md p-1 bg-violet-400 text-sm"
                data-filter="all"
                data-filter-group={filter}
                on:mousedown
            >
                all
            </li>
            {#each data as filterItem}
                <li
                    class="filter inline-block m-1 border-2 rounded-md p-1 text-slate-300 bg-slate-50 border-slate-50 text-sm"
                    data-filter={filterItem}
                    data-filter-group={filter}
                    on:mousedown
                >
                    {filterItem}
                </li>
            {/each}
        </ul>
    {:catch error}
        <p>An error occurred!</p>
    {/await}
</div>
