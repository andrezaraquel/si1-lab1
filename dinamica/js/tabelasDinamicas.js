$(function () {
	lerInput();
});

function lerInput(){ // funcao que le o valor do input e o adiciona na lista de temas a aprender

	$(".criarTema").click(function(){	// evento clique no botao
		var tema = $("input[type='text'][name='tema']").val(); // o tema lido
		$("input[type='text'][name='tema']").val(""); // limpa o texto do input
		
		if(tema != null && typeof tema != "undefined" && tema != ""){ // verifica se o valor eh valido
			var linha = "<tr><td>"+tema+"</td><td class='img-excluir' data-toggle='tooltip' data-placement='right' title='Excluir tema'></td><td class='img-mover' data-toggle='tooltip' data-placement='right' title='Mover tema para a lista de aprendidos'></td></tr>"; // a linha a ser adicionada			
			$("#tabelaTemasAAprender").append(linha); // adiciona a linha na lista de temas a aprender
			
			moverTema(); // funcao para mover o tema
			excluirTema(); // funcao para excluir o tema
		}
	});	
	
	$('.input-tema').keypress(function (e) { // evento: enter do teclado
		if (e.which == 13) { // se a tecla for enter
			var tema = $("input[type='text'][name='tema']").val(); // o tema lido
			$("input[type='text'][name='tema']").val(""); // limpa o texto do input
		
			if(tema != null && typeof tema != "undefined" && tema != ""){ // verifica se o valor eh valido
				var linha = "<tr><td>"+tema+"</td><td class='img-excluir'></td><td class='img-mover'></td></tr>"; // a linha a ser adicionada			
				$("#tabelaTemasAAprender").append(linha); // adiciona a linha na lista de temas a aprender
				
				moverTema(); // funcao para mover o tema
				excluirTema(); // funcao para excluir o tema				
			}
		}
	});
}

function moverTema(){
	$(".img-mover").click(function(){
		var tr = $(this).parent(); // a linha a ser movida
		$(tr).find("td").each(function(){ // varrendo as colunas da linha 
			if($(this).attr("class") == "img-mover"){ // se a coluna for a responsavel por mover a linha ...
				$(this).remove(); //... remove essa coluna
			}
		});
		
		tr.remove(); // remove a linha da lista de temas a aprender
		$("#tabelaDeTemasAprendidos").append(tr); // adiciona a linha sem a coluna de mover aa lista de temas aprendidos
		excluirTema(); // chama a funcao de excluir a linha
	});
}

function excluirTema(){
	$(".img-excluir").click(function(){ 
		$(this).parent().remove(); // remove a linha cuja td excluir foi clicada.
	});
}

