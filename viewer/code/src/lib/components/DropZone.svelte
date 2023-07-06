<script>
    import Dropzone from "svelte-file-dropzone/Dropzone.svelte";

    let files = {
        accepted: [],
        rejected: [],
    };

    function handleFilesSelect(e) {
        const { acceptedFiles, fileRejections } = e.detail;
        files.accepted = [...files.accepted, ...acceptedFiles];
        files.rejected = [...files.rejected, ...fileRejections];
    }

    async function uploadFiles() {
        const uploadPromises = files.accepted.map(file => {
            const formData = new FormData();
            formData.append('excelFile', file);

            return fetch('http://localhost:3010/excelToJson', {
                method: 'POST',
                body: formData,
            });
        });

        try {
            const responses = await Promise.all(uploadPromises);
            const data = await Promise.all(responses.map(response => response.json()));

            // Once all files have been uploaded successfully, clear the accepted files list
            files = { ...files, accepted: [] };
        } catch (error) {
            console.error('Error:', error);
        }
    }
</script>

<Dropzone accept=".xls,.xlsx" on:drop={handleFilesSelect} />
<button on:click={uploadFiles}>Upload</button>
<ol>
    {#each files.accepted as item}
        <li>{item.name}</li>
    {/each}
</ol>
