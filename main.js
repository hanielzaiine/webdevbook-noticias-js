var noticias = [];

function atualizarLista(noticia) {
    var lista = document.getElementById('noticias-recentes-list');
    var li = document.createElement('li');
    li.setAttribute('id', 'noticia-' + noticia.id);
    li.setAttribute('class', 'noticia');
    li.innerHTML = '<p class="titulo" onclick="mostrarNoticia(' + noticia.id + ')">'
        + noticia.titulo
        + '</p>'
        + '<p class="conteudo">' + noticia.conteudo + '<br>' + '<b>Autor: </b>' + noticia.autor + '<br>' + '<b>Data: </b>' + noticia.data + '</p>'
        + '<hr>'
        + '<br>'
        + '<button type="button" class="btn btn-secondary" onclick="ocultarNoticia(' + noticia.id + ')">Fechar Notícia</button>';
        + '</p>';
    lista.appendChild(li);
}

function salvar(form) {
    var titulo = document.getElementById('frm-titulo').value;
    var conteudo = document.getElementById('frm-conteudo').value;
    var autor = document.getElementById('frm-autor').value;
    var data = document.getElementById('frm-data').value;
    var noticia = {
        id: noticias.length,
        titulo: titulo,
        conteudo: conteudo,
        autor: autor,
        data: data
    };
    noticias.push(noticia);
    atualizarLista(noticia);
    form.reset();
}

function mostrarNoticia(id) {
    var li = document.getElementById('noticia-' + id);
    for (var i = 0; i < li.childNodes.length; i++) {
        var node = li.childNodes[i];
        if (node.getAttribute('class') == 'conteudo') {
            node.setAttribute('style', 'display:inline');
        }
    }
}

function ocultarNoticia(id) {
    var li = document.getElementById('noticia-' + id);
    for (var i = 0; i < li.childNodes.length; i++) {
        var node = li.childNodes[i];
        if (node.getAttribute('class') == 'conteudo') {
            node.setAttribute('style', 'display:none');
        }
    }
}