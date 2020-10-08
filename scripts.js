function calcular(){
    $(document).ready(() => {

        // navegação pelos conteúdos disponíveis
        let currentContent = null;
        let showContent = (contentName) => {
        switch (contentName) {
            case "execucao":
            case "memoria":
            case "sobre":
            break;
            default:
            contentName = "execucao";
        }
        $(currentContent).hide();
        currentContent = $("#conteudo-" + contentName);
        currentContent.show();
        location.hash = contentName;
    
        // definição do estilo dos itens do menu
        $("#menu > li").each((index, item) => {
            if (item.id == "menu-" + contentName) {
            $(item).removeClass("inactive");
            $(item).addClass("active");
            } else {
            $(item).removeClass("active");
            $(item).addClass("inactive");
            }
        });
        }
        
        // atualização do conteúdo pelos itens do menu
        $("#menu > li").each((index, item) => {
        $(item).click(() => {
            showContent(item.id.replace(/^menu-/, ""));
        });
        });
    
        // atualização do conteúdo ao alterar manualmente o endereço ou clicar em "voltar"
        $(window).on("hashchange", () => {
        showContent(location.hash.substr(1));
        })
        
        // exibição de uma página inicial
        showContent(location.hash.substr(1));
    
    
        $("#form-calculo").on("submit", () => {
    
        // implementar cálculos
    
        return false;
        });
    });
}