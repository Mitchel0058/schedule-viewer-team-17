<script>
    import Lesson from "./Lesson.svelte";

    const handleClick = (event) => {
        var target = event.target;
        var parent = target.parentElement;
        // var grandparent = parent.parentElement;
        const sibling = target.nextElementSibling;
        sibling.classList.remove('hidden');
        console.log(sibling);
    };

    export let week;
</script>

<div class="week p-4 m-4 bg-gray-100">
    <h3 id={week.weeknr}>{week.weeknr}</h3>
    <div class="grid grid-cols-1 md:grid-cols-5 gap-5">
        <div class="mo">
            <h3>Monday</h3>
            {#each week.mo as mo}
                <Lesson lesson={mo} on:mousedown={handleClick}/>
            {/each}
        </div>
        <div class="tu">
            <h3>Tuesday</h3>
            {#each week.tu as tu}
                <Lesson lesson={tu} on:mousedown={handleClick}/>
            {/each}
        </div>
        <div class="we">
            <h3>Wednesday</h3>
            {#each week.we as we}
                <Lesson lesson={we} on:mousedown={handleClick} />
            {/each}
        </div>
        <div class="th">
            <h3>Thursday</h3>
            {#each week.th as th}
                <Lesson lesson={th} on:mousedown={handleClick}/>
            {/each}
        </div>
        <div class="fr">
            <h3>Friday</h3>
            {#each week.fr as fr}
                <Lesson lesson={fr} on:mousedown={handleClick}/>
            {/each}
        </div>
    </div>
</div>
