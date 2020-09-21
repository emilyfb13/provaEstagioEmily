let _nextId = 1;
let _activeId = 0;

const FORM = $("#form");
const TABLE = $("#Table");

function handleEdit() {
    const row = $(this).parents("tr");
    const cols = row.children("td");

    _activeId = $($(cols[3]).children("button")[0]).data("id");

    Form.setData($(cols[0]).text(), $(cols[1]).text(), $(cols[2]).text());

    Form.setSubmitButtonText("Actualizar");
}

function handleDeleteClick() {
    $(this).parents("tr").remove();
}

function handleSubmission(e) {
    e.preventDefault();

    if (Form.hasErrors()) {
        return;
    }

    if (Form.getSubmitButtonText() === "Actualizar") {
        Table.updateInTable(_activeId);
        Form.setSubmitButtonText("Adicionar");
    } else {
        Table.addToTable(_activeId);
        _nextId += 1;
    }

    Form.clear();
}

FORM.on('submit', handleSubmission);