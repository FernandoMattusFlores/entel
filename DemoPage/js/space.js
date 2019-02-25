
				var local_data = data;
				var superior = 0;
				var inferior = 0;
				//console.log(local_data);
				var constante = 20;
				var ajuste = 0;
				//"<div class='level level--"+(i+1)+"' aria-label='Level "+(i+1)+"' style='transform:translateZ("+ajuste+"vmin);-webkit-transform:translateZ("+ajuste+"vmin)'>"+
			
				for (var i = 0; i < local_data.plantas.length; i++) {
					if(i===0){
						inferior=(i);
					};
					
					if(i>0){
						ajuste = constante*(i)
						
					};
					if((i>=0)&&(i<=2)){
						$(".levels").append(
							"<div id='piso"+(i+1)+"' class='level level--"+(i+1)+"' aria-label='Level "+(i+1)+"'  data-content='Piso "+(i+1)+"'>"+
							local_data.plantas[i].svg+
							"</div>"+
							"<div class='level__pins'>"+
							"<a class='pin pin--"+(i+1)+"-1' data-category='1' data-space='1.01' href='#' aria-label='Pin for Apple Heart'>"+
											"<span class='pin__icon'>"+
												"<svg class='icon icon--pin'></use></svg>"+
												"<svg class='icon icon--logo icon--appleheart'></use></svg>"+
											"</span>"+
										"</a>"+
							"</div>"
							);
							superior = (i);
					}else{
						$(".levels").append(
							"<div id='piso"+(i+1)+"' class='level level--"+(i+1)+"' aria-label='Level "+(i+1)+"'  data-content='Piso "+(i+1)+"'>"+
							local_data.plantas[i].svg+
							"</div>"+
							"<div class='level__pins'>"+
							"<a class='pin pin--"+(i+1)+"-1' data-category='1' data-space='1.01' href='#' aria-label='Pin for Apple Heart'>"+
											"<span class='pin__icon'>"+
												"<svg class='icon icon--pin'></use></svg>"+
												"<svg class='icon icon--logo icon--appleheart'></use></svg>"+
											"</span>"+
										"</a>"+
							"</div>"
							);
					}
					
					/*var elem = document.getElementById("piso"+(i+1));
					console.log(elem);
					elem.css('color','red');*/
					
					//elem.style.transform = "translateZ("+ajuste+"vmin)";
					//elem.style.-webkit-transform = "translateZ("+ajuste+"vmin)";
					
					//$(".level--"+(i+1)+").css('transform', 'translateZ("+ajuste+"vmin)');
				};
				//$(".levels").append();
			
			
				
	
				$("#back_levels").click(function(){
				$('.on').removeClass('on');
				$('.parpadea').removeClass('parpadea');
				})
				
				var desplazamiento = 3;
				$("#subir").click(function(){
					var elem = document.getElementsByClassName("level");
					
					if(superior<(elem.length)){
						var ultimo = 0;
						
					for (var x = (inferior); x <= superior; x++)
						{
							
							if(elem[x].id == "piso"+((x+1))){
								elem[x].style.visibility = "hidden";
								
								ultimo = x;
							}
							
							
						};
						
						
						superior = (ultimo+desplazamiento);
						inferior = (ultimo+1);
						
						var vm = 0;
						var i = 0;
						for(x=(inferior);x<=(superior);x++){
							
							
							if(i === 0){
								$("#inferior a").text(x+1);
							}else if(i === 1){
								$("#medio a").text(x+1);
							}else{
								$("#superior a").text(x+1);
							}
							
							if((x+1)<=elem.length)
							{
								if(elem[x].id == "piso"+(x+1)){
								
								elem[x].style.visibility = "visible";
								elem[x].style.transform = "translateZ("+vm+"vmin) ";
								elem[x].style["-webkit-transform"] = "translateZ("+vm+"vmin)";
								ultimo = x;
								vm = vm+20;
								i++;
								}
							}
								
							};
							
							superior = ultimo;
							
						
					}
					
					
					
						
						

				});
				
				$("#bajar").click(function(){
					console.log('clickDownSup',superior);//5
					console.log('clickDownInf',inferior);//3
						var elem = document.getElementsByClassName("level");
						
						if(superior>elem.length) superior = elem.length;
					
					if(inferior>0){
						var total = 1;
				console.log('bajar1',superior, inferior);
					for (var x = superior; x >=(inferior) ; x--)
						{
							console.log(elem[x].id , "piso"+(x+1));
							if(elem[x].id == "piso"+(x+1)){
								elem[x].style.display = "none";
								
								
							}
							total++;;
							
						};
						
						
						
						inferior = (inferior-desplazamiento);
						superior = (superior-total);
						
						
						var vm = 0;
						var i = 0;
						for(var j=(inferior);j<=(superior);j++){
							console.log(j+1,inferior,superior);
							if(i === 0){
								$("#inferior a").text(j);
							}else if(i === 1){
								$("#medio a").text(j);
							}else{
								$("#superior a").text(j);
							}
							
							console.log(elem[j].id , "piso"+(j));
							if(elem[j].id == "piso"+(j)){
								
								elem[j].style.display = "block";
								elem[j].style.transform = "translateZ("+vm+"vmin) ";
								elem[j].style["-webkit-transform"] = "translateZ("+vm+"vmin)";
								/*elem[x].style["transition-property"] = "opacity, transform";
								elem[x].style["transition-duration"] = "1s, 1s";
								elem[x].style["transition-timing-function"] = "ease, ease";
								elem[x].style["transition-delay"] = "0s, 0s";
								elem[x].style.transform = "translateZ("+vm+"vmin)";
								/*    transition-property: opacity, transform;
								transition-duration: 5s, 5s;
								transition-timing-function: ease, ease;
								transition-delay: 0s, 0s;*/
								ultimo = j;
								vm = vm+20;
								
							}
							i++;
						}
						
						superior = j;
						inferior = superior-desplazamiento;
						console.log(superior,inferior);
						
						
					}
					
					
					
				});
					
					
				
	
		
				function buscarSvg(idSvg){
					removerAnimacion();
					var elem = '$("#'+idSvg+'")';
					var s = document.getElementById(idSvg);
					s.classList.add("on","parpadea");
					//$(this).addClass("on");
				};
				
				function removerAnimacion(){
					$('.on').removeClass('on');
					$('.parpadea').removeClass('parpadea');
				};
				
				$( document ).ready(function() {
					var elementos = document.getElementsByClassName("level");
					
					for(var k = 0; k<elementos.length;k++){
						console.log(elementos[k]);
						
						if(k>2) elementos[k].classList.add("mostrar");
					}
				});
		
			
		