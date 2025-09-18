// Aguarda o carregamento completo da página para iniciar o script
window.onload = function() {
    
    // 1. Cria uma nova instância do objeto XMLHttpRequest para fazer a requisição
    var xhr = new XMLHttpRequest();

    // 2. Configura a requisição
    // Parâmetros: método ('GET'), URL do arquivo ('noticias.xml'), e se é assíncrona (true)
    xhr.open('GET', 'noticias.xml', true);

    // 3. Define uma função para ser executada quando o estado da requisição mudar
    xhr.onreadystatechange = function() {
        
        // Verifica se a requisição foi concluída (readyState 4) e bem-sucedida (status 200)
        if (xhr.readyState === 4 && xhr.status === 200) {
            
            // 'responseXML' contém o XML retornado já processado como um documento
            var xmlDoc = xhr.responseXML;
            
            // Encontra o container no HTML onde as notícias serão inseridas
            var container = document.getElementById('noticias-container');
            container.innerHTML = ''; // Limpa a mensagem "Carregando..."

            // Pega todos os elementos <noticia> do XML
            var noticias = xmlDoc.getElementsByTagName('noticia');

            // 4. Itera sobre cada item de notícia encontrado no XML
            for (var i = 0; i < noticias.length; i++) {
                // Extrai o conteúdo do título, resumo e data de cada notícia
                var titulo = noticias[i].getElementsByTagName('titulo')[0].textContent;
                var resumo = noticias[i].getElementsByTagName('resumo')[0].textContent;
                var data = noticias[i].getElementsByTagName('data')[0].textContent;

                // 5. Cria os elementos HTML dinamicamente para exibir a notícia
                var noticiaDiv = document.createElement('div');
                noticiaDiv.className = 'noticia'; // Adiciona uma classe para estilização

                var tituloH2 = document.createElement('h2');
                tituloH2.textContent = titulo;

                var resumoP = document.createElement('p');
                resumoP.textContent = resumo;
                
                var dataSmall = document.createElement('small');
                dataSmall.textContent = 'Publicado em: ' + data;

                // 6. Monta a estrutura, adicionando os elementos criados à div da notícia
                noticiaDiv.appendChild(tituloH2);
                noticiaDiv.appendChild(resumoP);
                noticiaDiv.appendChild(dataSmall);

                // 7. Adiciona a div da notícia completa ao container principal na página
                container.appendChild(noticiaDiv);
            }
        } else if (xhr.readyState === 4) {
            // Caso a requisição seja concluída mas com erro (ex: arquivo não encontrado)
            var container = document.getElementById('noticias-container');
            container.innerHTML = '<p>Erro ao carregar as notícias.</p>';
        }
    };

    // 8. Envia a requisição para o servidor
    xhr.send();
};