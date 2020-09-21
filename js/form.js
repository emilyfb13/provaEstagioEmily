const Form = (function($){
    const NOME = $("#nome");
    const EMAIL = $("#email");
    const NASCIMENTO = $("#nascimento");
    const TELEFONE = $("#telefone");
    const UPDATE_BUTTON = $("#updateButton");

    function clear() {
        setData();
        NOME.focus();
    }

    function hasErrors() {
        return NOME.val() === null || NOME.val() === '';
    }

    function getData() {
        return {
            nome: NOME.val(),
            email: EMAIL.val(),
            nascimento: NASCIMENTO.val(),
            telefone: TELEFONE.val(),
        };
    }

    function setData(nome='', email='', nascimento='' , telefone = '') {
        NOME.val(nome);
        EMAIL.val(email);
        NASCIMENTO.val(nascimento);
        TELEFONE.val(telefone);
    }

    function setSubmitButtonText(str) {
        UPDATE_BUTTON.text(str);
    }

    function getSubmitButtonText() {
        return UPDATE_BUTTON.text();
    }

    return {
        clear: clear,
        hasErrors: hasErrors,
        getData: getData,
        setData: setData,
        setSubmitButtonText: setSubmitButtonText,
        getSubmitButtonText: getSubmitButtonText,
    };
})(jQuery);