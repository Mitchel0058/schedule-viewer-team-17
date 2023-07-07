<script>
    export let lesson;
</script>

<div
    id={lesson.id}
    class="lesson border-2 border-slate-100 rounded-md m-4 flex flex-col {lesson.type ===
    'Exam'
        ? 'bg-red-400'
        : 'bg-blue-300'}"
    on:mousedown
    data-teachers={lesson.teachers}
    data-groups={lesson.groups}
>
    <div class="lesson_head w-full p-4 rounded-md hover:bg-red-300">
        <div class="flex justify-between">
            <p data-card-property="start" class="font-medium">
                <!-- {console.log(lesson.start)}
                {console.log(lesson.end)} -->
                {lesson.start.slice(0, 2)}:{lesson.start.slice(2)} - {lesson.end.slice(0, 2)}:{lesson.end.slice(2)}
            </p>
            <p data-card-property="groups" class="font-medium">
                {lesson.groups}
            </p>
        </div>
        
        <div class="flex justify-between">
            <p data-card-property="rooster_text" class="text-sm font-medium">
                {lesson.rooster_text}
            </p>
            <p data-card-property="rooms" class="text-sm font-light">
                {lesson.rooms}
            </p>
        </div>
        <div class="flex justify-between">
            <p data-card-property="course_name" class="text-sm font-light">
                {lesson.course_name}
                <span data-card-property="module" class="text-xs font-light"
                    >({lesson.module})</span
                >
            </p>
        </div>
        <ul data-card-property="teachers">
            {#each lesson.teachers as teacher}
                <li class="text-xs font-light inline-block pr-2">{teacher}</li>
            {/each}
        </ul>
    </div>
</div>
