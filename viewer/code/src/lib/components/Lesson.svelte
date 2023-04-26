<script>
    export let lesson;
    function explodeTeacher(teachers){
        let teacherArr = teachers.split(';');
        let teachersString = '';
        teacherArr.array.forEach(element => {
            teacherArr += element + ' ';
        });
        return teachersString;
    }

</script>

<div
    id="lesson_1"
    class="lesson border-2 border-slate-100 rounded-md m-4 flex flex-col {lesson.Type ===
    'Exam'
        ? 'bg-red-400'
        : 'bg-red-100'}"
    on:mousedown
    data-teachers={lesson.Docenten}
    data-groups={lesson.Groepen}
>
    <div class="lesson_head w-full p-4 rounded-md hover:bg-red-300">
        <div class="flex justify-between">
            <p data-card-property="Start" class="ont-mediu">{lesson.Start} - {lesson.End}</p>
            <p data-card-property="Groepen" class="font-medium">{lesson.Groepen}</p>
        </div>
        <div class="flex justify-between">
            <p data-card-property="Course_name" class="text-sm font-light">{lesson.Course_name}</p>
            <p data-card-property="Lokalen" class="text-sm font-light">{lesson.Lokalen}</p>
        </div>
        <div class="flex justify-between">
            <p data-card-property="Course_name" class="text-sm font-light">{lesson.Rooster_text}</p>
            <p data-card-property="Lokalen" class="text-sm font-light">{lesson.Docenten}</p>
        </div>
    </div>
</div>
