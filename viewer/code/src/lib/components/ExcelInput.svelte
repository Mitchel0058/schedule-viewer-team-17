<div class="week p-4 m-4">
    <form
        method="post"
        action="http://localhost:3010/api/v2/excelToJson"
        target="dummyframe"
        name="excel"
    >
        <label for="fileSelect">Spreadsheet</label>
        <br />
        <input
            id="fileSelect"
            type="file"
            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        />
        <br />
        <input type="submit" value="Submit" />
    </form>
    <iframe name="dummyframe" id="dummyframe" style="display: none;" title="dummy" />
</div>
