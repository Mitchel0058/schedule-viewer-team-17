<script>
    import Filter from "./components/filters/Filter.svelte";

    const selectedCardProperties = [];

    const handleCardfilter = (event) => {
        // if all reset all filters

        // data-card-property="course-name"
        const target = event.target;
        console.log(target);
        const chosenProperty = target.dataset.filter;
        console.log("property:", chosenProperty.toLowerCase());

        const allElements = document.querySelectorAll(
            `[data-card-property=${chosenProperty}]`
        );
        [...allElements].forEach((property) => {
            if (chosenProperty == property.dataset.cardProperty) {
                property.classList.add("hidden");
            }
        });
    };

    const handleSelectedFilter = (event) => {
        const target = event.target;
        /**
         * If all is selected
         *      remove all the hidden elements
         */
        // remove styling previous selected elements.
        const previousSelectedFilters =
            document.querySelectorAll(".bg-violet-400");
        [...previousSelectedFilters].forEach((element) => {
            element.classList.remove("bg-violet-400");
        });
        // add styling for currently selected element.
        target.classList.add("bg-violet-400");
        // get the filter name and the filter group
        const chosenFilter = target.dataset.filter;
        const chosenFilterGoup = target.dataset.filterGroup;

        console.log("Chosen filter:", chosenFilter);
        if (chosenFilter == "all") {
            const hiddenElements = document.querySelectorAll(".hidden");
            console.log(hiddenElements);
            [...hiddenElements].forEach((property) => {
                property.classList.remove("hidden");
            });
        } else {
            // apply the filter to each lesson
            const allLessons = document.querySelectorAll(".lesson");
            [...allLessons].forEach((lesson) => {
                // if chosen filter are teachers
                lesson.classList.remove("hidden");
                if (chosenFilterGoup == "teachers") {
                    // transfer dataset.teacher to an array and check if it is in an array
                    let str = lesson.dataset.teachers;
                    let explodedTeacher = str.split(";");
                    if (!explodedTeacher.includes(chosenFilter)) {
                        lesson.classList.add("hidden");
                    }
                }
                // if chosen filter are groups
                if (chosenFilterGoup == "groups") {
                    if (lesson.dataset.groups != chosenFilter) {
                        lesson.classList.add("hidden");
                    }
                }
                // if chosen filter are week
                if (chosenFilterGoup == "weeks") {
                    //TODO: find weeks and hide or display them
                }
            });
        }
    };
</script>

<div class="p-4">
    <h3 class="filters">Filters</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Filter
            filter="teachers"
            name="Teachers"
            on:mousedown={handleSelectedFilter}
        />

        <Filter
            filter="groups"
            name="Groups"
            on:mousedown={handleSelectedFilter}
        />
    </div>
</div>
