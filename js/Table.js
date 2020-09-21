  
const Table = (function($){
    const TABLE_BODY = $("#Table tbody");

    function BuildTableRow(id) {
        const pessoa = {id: id, ...Form.getData()};
        const Tpl = _.template($("#Template").html());

        return Tpl(pessoa);
    }

    function addToTable() {
        TABLE_BODY.append(BuildTableRow(_nextId));
    }

    function _findRowById(id) {
        return $("#Table button[data-id='" + id + "']").parents("tr")[0];
    }


    return {
        addToTable: addToTable,
    }
})(jQuery);