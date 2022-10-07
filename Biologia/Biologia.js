var entrada = document.querySelector("#entrada_base_nitrogenada");
var bases = document.querySelector("#bases_nitrogenadas");
var divPai = document.getElementById("container_RNA");
var body = document.querySelector("body");

var qnt_codon = 0;

var iniciado = false;
var finalizado = false;

entrada.addEventListener("keyup", function(){
	if(entrada.value.length == 3){
		VerificaExistenciaCodon();
	}
})

function criaAlert(tipo, msg){
	entrada.value = "";
	switch(tipo){
		case 1:
			body.insertAdjacentHTML('beforeend', "<div class='alert'> <span class='icon'> <i class='fas fa-minus'></i> </span> <div class='text'> <strong>Aviso</strong> <p>"+msg+"</p> </div> </div>")
		break;
		case 2:
			body.insertAdjacentHTML('beforeend', "<div class='alert alert-success'> <span class='icon'> <i class='fa fa-check'></i> </span> <div class='text'> <strong>Sucesso</strong> <p>"+msg+"</p> </div> </div>")
		break;
		case 3:
			body.insertAdjacentHTML('beforeend', "<div class='alert alert-warning'> <span class='icon'> <i class='fa fa-exclamation-triangle'></i> </span> <div class='text'> <strong>Atenção</strong> <p>"+msg+"</p> </div> </div>")
		break;
		case 4:
			body.insertAdjacentHTML('beforeend', "<div class='alert alert-danger'> <span class='icon'> <i class='fas fa-exclamation'></i> </span> <div class='text'> <strong>Erro</strong> <p>"+msg+"</p> </div> </div>")
		break;
		case 5:
			body.insertAdjacentHTML('beforeend', "<div class='alert alert-primary'> <span class='icon'> <i class='fa fa-info'></i> </span> <div class='text'> <strong>Informação</strong> <p>"+msg+"</p> </div> </div>")
		break;
		default:
			body.insertAdjacentHTML('beforeend', "<div class='alert alert-danger'> <span class='icon'> <i class='fas fa-exclamation'></i> </span> <div class='text'> <strong>Erro</strong> <p>"+msg+"</p> </div> </div>")
		break;
	}
}

/* 
	1 - Aviso; 
	2 - Sucesso; 
	3 - Atenção; 
	4 - Erro; 
	5 - Informação; 
	+5 - Erro;
*/

criaAlert(1, "Seja bem vindo(a) | Clique para fechar");

function VerificaExistenciaCodon(){
	switch(entrada.value.toUpperCase())
	{
		case "UUU":
			addCodon("Fenilalanina")
		break;
		case "UUC":
			addCodon("Fenilalanina")
		break;
		case "UUA":
			addCodon("Leucina")
		break;
		case "UUG":
			addCodon("Leucina")
		break;
		case "CUU":
			addCodon("Leucina")
		break;
		case "CUC":
			addCodon("Leucina")
		break;
		case "CUA":
			addCodon("Leucina")
		break;
		case "CUG":
			addCodon("Leucina")
		break;
		case "AUU":
			addCodon("Isoleucina")
		break;
		case "AUC":
			addCodon("Isoleucina")
		break;
		case "AUA":
			addCodon("Isoleucina")
		break;
		case "AUG":
			if(!iniciado){
				iniciado = true;
				addCodon("Metionina [Início]");
				criaAlert(2, "Tradução iniciada!");
			}
			else{
				criaAlert(3, "Esse códon só é utilizado uma vez, para representar o início do RNA");
			}
		break;
		case "GUU":
			addCodon("Valina")
		break;
		case "GUC":
			addCodon("Valina")
		break;
		case "GUA":
			addCodon("Valina")
		break;
		case "GUG":
			addCodon("Valina")
		break;
		case "UCU":
			addCodon("Serina")
		break;
		case "UCC":
			addCodon("Serina")
		break;
		case "UCA":
			addCodon("Serina")
		break;
		case "UCG":
			addCodon("Serina")
		break;
		case "CCU":
			addCodon("Prolina")
		break;
		case "CCC":
			addCodon("Prolina")
		break;
		case "CCA":
			addCodon("Prolina")
		break;
		case "CCG":
			addCodon("Prolina")
		break;
		case "ACU":
			addCodon("Treonina")
		break;
		case "ACC":
			addCodon("Treonina")
		break;
		case "ACA":
			addCodon("Treonina")
		break;
		case "ACG":
			addCodon("Treonina")
		break;
		case "GCU":
			addCodon("Alanina")
		break;
		case "GCC":
			addCodon("Alanina")
		break;
		case "GCA":
			addCodon("Alanina")
		break;
		case "GCG":
			addCodon("Alanina")
		break;
		case "UAU":
			addCodon("Tirosina")
		break;
		case "UAC":
			addCodon("Tirosina")
		break;
		case "UAA":
			if(!finalizado && iniciado){
				addCodon("Stop Codon [Fim]");
				criaAlert(2, "Tradução finalizada!");
				finalizado = true;
			}
			else{
				criaAlert(3, "Esse códon só é utilizado uma vez, para representar o fim do RNA");
			}
		break;
		case "UAG":
			if(!finalizado && iniciado){
				addCodon("Stop Codon [Fim]");
				criaAlert(2, "Tradução finalizada!");
				finalizado = true;
			}
			else{
				criaAlert(3, "Esse códon só é utilizado uma vez, para representar o fim do RNA");
			}
		break;
		case "CAU":
			addCodon("Histidina")
		break;
		case "CAC":
			addCodon("Histidina")
		break;
		case "CAA":
			addCodon("Glutamina")
		break;
		case "CAG":
			addCodon("Glutamina")
		break;
		case "AAU":
			addCodon("Asparigina")
		break;
		case "AAC":
			addCodon("Asparigina")
		break;
		case "AAA":
			addCodon("Lisina")
		break;
		case "AAG":
			addCodon("Lisina")
		break;
		case "GAU":
			addCodon("Ácido Aspártico")
		break;
		case "GAC":
			addCodon("Ácido Aspártico")
		break;
		case "GAA":
			addCodon("Ácido Glutâmico")
		break;
		case "GAG":
			addCodon("Ácido Glutâmico")
		break;
		case "UGU":
			addCodon("Cisteína")
		break;
		case "UGC":
			addCodon("Cisteína")
		break;
		case "UGA":
			if(!finalizado && iniciado){
				addCodon("Stop Codon [Fim]");
				criaAlert(2, "Tradução finalizada!");
				finalizado = true;
			}
			else{
				criaAlert(3, "Esse códon só é utilizado uma vez, para representar o fim do RNA");
			}
		break;
		case "UGG":
			addCodon("Triptofano")
		break;
		case "CGU":
			addCodon("Arginina")
		break;
		case "CGC":
			addCodon("Arginina")
		break;
		case "CGA":
			addCodon("Arginina")
		break;
		case "CGG":
			addCodon("Arginina")
		break;
		case "AGU":
			addCodon("Serina")
		break;
		case "AGC":
			addCodon("Serina")
		break;
		case "AGA":
			addCodon("Arginina")
		break;
		case "AGG":
			addCodon("Arginina")
		break;
		case "GGU":
			addCodon("Glicina")
		break;
		case "GGC":
			addCodon("Glicina")
		break;
		case "GGA":
			addCodon("Glicina")
		break;
		case "GGG":
			addCodon("Glicina")
		break;
		default:
			criaAlert(4, "Esse códon não existe!");
		break;
	}	 
}
 
function addCodon(nomeCodon){
	if(iniciado && !finalizado && qnt_codon <= 200){
		qnt_codon++;

		if(entrada.value.toUpperCase() == "AUG" || entrada.value.toUpperCase() == "UAA" || entrada.value.toUpperCase() == "UAG" || entrada.value.toUpperCase() == "UGA")
			bases.insertAdjacentHTML('beforeend', "<a class='_codon"+qnt_codon+"'>"+entrada.value+"</a>");
		else
			bases.insertAdjacentHTML('beforeend', "<a class='codon"+qnt_codon+"'>"+entrada.value+"</a>");

		addCodonAoRNA(nomeCodon);
		entrada.value = "";
		entrada.focus();

	}else if(!iniciado){
		criaAlert(5, "Códon não adicionado, pois a tradução do RNA ainda não foi iniciado");
	}else if(finalizado){
		criaAlert(5, "Códon não adicionado, pois a tradução do RNA já foi finalizado");
	}else if(qnt_codon > 200){
		criaAlert(5, "Códon não adicionado, pois o limite de códons foi atingido");
	}
}

function addCodonAoRNA(nomeCodon) {	 
	divPai.insertAdjacentHTML('beforeend', "<div class='codon" + qnt_codon + "'>" + nomeCodon + "</div>");
}

bases.addEventListener("click", function(e){
	if(e.target.className.substring(0, 5) == "codon"){
		bases.removeChild(document.querySelector("#bases_nitrogenadas ." + e.target.className)); 
		divPai.removeChild(document.querySelector("#container_RNA ." + e.target.className));
		criaAlert(2, "Códon excluido");  
	}
	else{
		criaAlert(3, "Não é possível retirar este códon"); 
	}
})
document.querySelector("#btn_menu").addEventListener("mouseenter", function(){
	document.querySelector("#menu").style.right = 0;
	document.querySelector("#btn_menu").style.transform = "rotate(180deg)";
})
document.querySelector("#menu").addEventListener("mouseleave", function(){
	document.querySelector("#menu").style.right = -300 + "px";
	document.querySelector("#btn_menu").style.transform = "rotate(0deg)";
})
document.querySelector("#btn_1").addEventListener("click", function(){
	window.location.reload(true);
})
document.querySelector("#btn_2").addEventListener("click", function(){
	body.insertAdjacentHTML('beforeend', "<section class='base_video_motivacional'> <div class='card video_motivacional_c_video'> <video class='video_motivacional card' src='video.mp4'></video> <div class='video_motivacional_controls'> <div class='video_motivacional_bar'> <div class='video_motivacional_bar_inside'></div> </div> <div class='video_motivacional_btn'> <button id='play_video_motivacional'></button> <button id='close_video_motivacional'></button> </div> </div> </div> </section>");
	video();
})
document.querySelector("#btn_3").addEventListener("click", function(){
	window.location.href = "http://wolfdevoficial.ga/WolfDev/WolfDev.html?i=1";
})
document.querySelector("#btn_4").addEventListener("click", function(){
	 window.scrollTo(0, 0);
})

function video(){
	var video = document.querySelector(".video_motivacional");
	var inside = document.querySelector(".video_motivacional_bar_inside");
	var btn = document.querySelector("#play_video_motivacional");
	var btn_2 = document.querySelector("#close_video_motivacional");
	video.volume = 0.1;
	function togglePlayPause() {
		if(video.paused){
			btn.className = 'pause';
			video.play();
		}else{
			btn.className = "play";
			video.pause();
		}
	}

	btn.onclick = function(){
		togglePlayPause();
	} 
	btn_2.onclick = function(){
		body.removeChild(document.querySelector(".base_video_motivacional")); 
	} 

	video.addEventListener('timeupdate', function(){
		var insidePos = video.currentTime / video.duration;
		inside.style.width = insidePos * 100 + "%";
		if(video.ended){
			btn.className = 'play';
		}
	})
	VanillaTilt.init(document.querySelectorAll(".card"), {
	max: 10,
	speed: 400
	});
}
VanillaTilt.init(document.querySelectorAll(".card"), {
	max: 5,
	speed: 400
});

setInterval(function(){
	var areafechar = document.querySelectorAll('.alert');
	let alert_close_icons = document.querySelectorAll('.alert>.close');
	if(alert_close_icons){
		areafechar.forEach((areafechar)=>{
			areafechar.addEventListener('click', function(){
				this.closest('.alert').classList.add('close');

				this.closest('.alert').addEventListener('transitionend', function(event){
					if(event.propertyName=='transform'){
						this.remove();
					}
				});
			});
		});
	}
},500)

const switchToggle = document.getElementById("switch"),
switchToggleImage = document.getElementById("switchToggleImage"),
alert = document.querySelector(".alert");

let switchState = true;

switchToggle.addEventListener("click", (e) => {
    body.classList.toggle("dark");
    alert.classList.toggle("dark");

    if (switchState) {
        $(switchToggle).removeClass('fa-moon');
        $(switchToggle).addClass('fa-sun');
        switchState = !switchState;
    } else { 
    	$(switchToggle).removeClass('fa-sun');
        $(switchToggle).addClass('fa-moon');
        switchState = !switchState;
    }
});


