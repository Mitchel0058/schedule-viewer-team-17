<div class="week p-4 m-4">
    <form
        method="post"
        action="http://localhost:3010/api/v2/excelToJson"
        enctype="multipart/form-data"
        target="dummy"
    >
        <label for="fileSelect">Spreadsheet</label>
        <input id="fileSelect" type="file" name="excel" />
        <button type="submit" value="Submit"> upload </button>
    </form>
    <iframe
        name="dummyframe"
        id="dummyframe"
        style="display: none;"
        title="dummy"
    />
</div>
