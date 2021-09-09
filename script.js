var palavras = ['vermelho', 'elefante', 'andorinha','branco','amarelo','azul','bermuda','camisa','vestido','feiticeira','princesa','rainha','feijao','leite','pao'];
        var temas = ['Cor', 'Animal', 'Pássaro','Cor','Cor','Cor','Vestuário','Vestuário','Vestuário','Personagens de Contos','Personagens de Contos',"Personagens de Contos",'Alimentos','Alimentos','Alimentos',];
        var totalPalavras;
        var palavraIn;
        var campoDicas = document.getElementById('cores');
        // var campoPalavra = document.getElementById('palavra');
        var campoPalavra = [];
        var palavraSeparada;
        // var campoInput = document.createElement('input');
        var campoInput = [];
        var cabeca = document.getElementById('cabeca');
        var corpo = document.getElementById('corpo');
        var bracoEs = document.getElementById('barco-es');
        var bracoDi = document.getElementById('barco-di');
        var pernaES = document.getElementById('perna-es');
        var pernaDi = document.getElementById('perna-di');

        function palavraInicial() {
            totalPalavras = palavras.length - 1;
            palavraIn = (Math.round(Math.random() * totalPalavras));
            campoDicas.innerHTML = temas[palavraIn];
            console.log(palavraIn)
        }

        function gerarpalavra() {
            palavraInicial();
            palavraSeparada = palavras[palavraIn].split('');
            for (let i = 0; i <= palavraSeparada.length - 1; i++) {
                campoPalavra[i] = document.getElementById('palavra');
                campoInput[i] = document.createElement('input');
                campoPalavra[i].appendChild(campoInput[i]).value = '';
            }
            
        }
        var erro = 0;
        var acerto = 0;
        function teclado(x) {
            var cp = document.querySelectorAll('input');
            var a = palavraSeparada.join('');
            for (let i = 0; i < palavraSeparada.length; i++) {
                if (a.indexOf(x) >= 0) {
                    for (let i = 0; i < palavraSeparada.length; i++) {
                        if (palavraSeparada[i] == x) {
                            document.getElementById(x).style.backgroundColor = 'green';
                            cp[i].style.backgroundColor = 'green';
                            cp[i].value = x;
                            acerto++;
                            if((acerto) == (palavras[palavraIn].length)){
                                alert('Você Venceu!!!')
                                location.reload()
                            }
                        }
                    }
                    break;

                } else {
                    document.getElementById(x).style.backgroundColor = 'red';
                    document.getElementById(x).style.pointerEvents = 'none';

                    if (erro == 0) {
                        cabeca.style.display = 'block';
                        erro = 1;
                        break;
                    } else if (erro == 1) {
                        corpo.style.display = 'block';
                        erro = 2;
                        break;
                    } else if (erro == 2) {
                        bracoEs.style.display = 'block';
                        erro = 3;
                        break;
                    }
                    else if (erro == 3) {
                        bracoDi.style.display = 'block';
                        erro = 4;
                        break;
                    }
                    else if (erro == 4) {
                        pernaES.style.display = 'block';
                        erro = 5;
                        break;
                    }
                    else if (erro == 5) {
                        pernaDi.style.display = 'block';
                        erro = 6;
                        break;
                    }
                    else if (erro == 6) {
                        alert('Você perdeu!!!');
                        location.reload()
                        break;
                    }

                }

            }

        }
        window.addEventListener('load', gerarpalavra);
