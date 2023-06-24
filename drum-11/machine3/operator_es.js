$(document).ready(function () {
	$("#myInput").on("keyup", function () {
		var value = $(this).val().toLowerCase();
		$(".dropdown-menu li").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});

	$("#myInput2").on("keyup", function () {
		var value = $(this).val().toLowerCase();
		$("#major_1 li").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
	$("#myInput1").on("keyup", function () {
		var value = $(this).val().toLowerCase();
		$("#ult2 li").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
	$("#myInput3").on("keyup", function () {
		var value = $(this).val().toLowerCase();
		$("#ult3 li").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
	$("#supplier_inp1").on("keyup", function () {
		var value = $(this).val().toLowerCase();
		$("#supplier_drop1 li").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
	$("#supplier_inp2").on("keyup", function () {
		var value = $(this).val().toLowerCase();
		$("#supplier_drop2 li").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
	$("#inputproductcode_inp1").on("keyup", function () {
		var value = $(this).val().toLowerCase();
		$("#inputproductcode_drop1 li").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
	$("#inputproductcode_inp2").on("keyup", function () {
		var value = $(this).val().toLowerCase();
		$("#inputproductcode_drop2 li").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
	$("#outputproductcode_inp1").on("keyup", function () {
		var value = $(this).val().toLowerCase();
		$("#outputproductcode_drop1 li").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
	$("#outputproductcode_inp2").on("keyup", function () {
		var value = $(this).val().toLowerCase();
		$("#outputproductcode_drop2 li").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
	$('#body').bind('keydown', function (e) {
		if (e.keyCode == 13) {
			e.preventDefault();

		}
	});


});

$(document).ready(function () {
	$("#pop_sub5").hide();
	$("#pop_sub4").hide();
	$("#pop_sub3").hide();
	$.get("../../../Management_report/data/ref.csv?" + random_number, function (data) {
		var lines = data.split('\n');
		var counto = 0;
		for (var i = 0; i < lines.length - 1; i++) {
			lines[i]=lines[i].replace(/['"]+/g,'');
			if (lines[i].split(",")[0] != "") {
				product_list[counto] = lines[i].split(",")[0];
				counto++;
			}
		}
		console.log(product_list);
	});
	stack = 2;

	
	


		
	for (var i = 0; i < product_list.length; i++) {
		console.log(product_list[i]);
		if (product_list[i].match(input1)) {

			document.getElementById("status").innerHTML = "Referencia de salida id existe, introduzca la referencia de salida correcta. identificación";
			document.getElementById("status").style.color = "Red";
			$("#but_save1").hide();
			break;
		} else {
			document.getElementById("status").innerHTML = "¡¡Éxito!! ok";
			document.getElementById("status").style.color = "Green";
			$("#but_save1").show();
		}
	}

	var input1 = document.getElementById("out_value1").value;
	for (var i = 0; i < product_list.length; i++) {
		if (product_list[i].match(input1)) {
			document.getElementById("status1").innerHTML = "Referencia de salida id existe, introduzca la referencia de salida correcta. identificación";
			document.getElementById("status1").style.color = "Red";
			$("#but_save2").hide();
			break;
		} else {
			document.getElementById("status1").innerHTML = "¡¡Éxito!! ok";
			document.getElementById("status1").style.color = "Green";
			$("#but_save2").show();
		}
	}
	});

function output() {
	var inp = $("#outputproductcode_dropdown1").html();

	for (var i = 0; i < output_product.length; i++) {
		if (output_product[i][5] === inp) {
				console.log(output_product[i]);
			document.getElementById('dia').value = output_product[i][1];
			document.getElementById('out_pro_co').value = output_product[i][5];
			document.getElementById('spd').value = output_product[i][6];
			document.getElementById('spd_lsl').value = output_product[i][8];
			document.getElementById('spd_usl').value = output_product[i][9];
			document.getElementById('tg_kg').value = output_product[i][10];
			document.getElementById('tg_lsl').value = output_product[i][12];
			document.getElementById('tg_usl').value = output_product[i][13];
			document.getElementById('up_t').value = output_product[i][14];
			document.getElementById('up_lsl').value = output_product[i][16];
			document.getElementById('up_usl').value = output_product[i][17];
		}


	}

	if (inp == "Nil") {
		document.getElementById("coil_run").value = "N/A";
		document.getElementById("out_value").value = "N/A";
	}
	document.getElementById('in_pro_co').value = $("#inputproductcode_dropdown1").html();
	document.getElementById('sup_inp').value = $("#supplier_dropdown1").html();
	document.getElementById('sub_but').value = Math.random() * 1000;
}

function output1() {
var inp = $("#outputproductcode_dropdown2").html();
	for (var i = 0; i < output_product.length; i++) {
		if (output_product[i][5] === inp) {
			console.log(output_product[i]);
			document.getElementById('dia1').value = output_product[i][1];
			document.getElementById('out_pro_co1').value = output_product[i][5];
			document.getElementById('spd1').value = output_product[i][6];
			document.getElementById('spd_lsl1').value = output_product[i][8];
			document.getElementById('spd_usl1').value = output_product[i][9];
			document.getElementById('tg_kg1').value = output_product[i][10];
			document.getElementById('tg_lsl1').value = output_product[i][12];
			document.getElementById('tg_usl1').value = output_product[i][13];
			document.getElementById('up_t1').value = output_product[i][14];
			document.getElementById('up_lsl1').value = output_product[i][16];
			document.getElementById('up_usl1').value = output_product[i][17];
						}
	}
	if (inp == "Nil") {
		document.getElementById("coil_run1").value = "N/A";
		document.getElementById("out_value1").value = "N/A";
		}
	document.getElementById('in_pro_co1').value = $("#inputproductcode_dropdown2").html();
	document.getElementById('sup_inp1').value =$("#supplier_dropdown2").html();
	document.getElementById('sub_but1').value = Math.random() * 1000;
}
function out_product_check() {
	var input1 = document.getElementById("out_value").value;
	document.getElementById("out_input1").value = input1;

}

function out_product_check1() {
	var input1 = document.getElementById("out_value1").value;
	document.getElementById("out_input2").value = input1;

}

function prd_sub() {
  var input1 = document.getElementById("out_value").value;
  document.getElementById("out_input1").value = input1;
  document.getElementById("op_reel").value = input1;
  var output_check = 0;
  for (var i = 0; i < product_list.length; i++) {
    if((input1!=="N/A")&&(document.getElementById('out_pro_co').value!=="Nil"))
    {
    if (product_list[i].match(input1)) {
      output_check = 1;
														  
						  
      break;
    } else {
      if (output_check == 0) {
	
        output_check = 0;
      }
    }
  }
  }
  if (output_check == 0) {
					
														 
			
	//**********************this comment when Q/A available************
	 document.getElementById('start1').value = "/usr/sdext/Factory/machines/machine3/table2_es.shtm";
	//**********************END****************************	

	if (document.getElementById("out_input1").value == "") {
		swal({
			title: "Ingrese Salida ref. Identificación.",
			text: "Asegúrese de que todos los campos se hayan completado correctamente.",
			type: "warning",
			showCancelButton: true,
			confirmButtonClass: 'btn-warning',
			confirmButtonText: 'Ok'
		});
	} else {
		swal({
			title: "¡El producto comienza con éxito!",
			type: "success",
			showCancelButton: true,
			confirmButtonClass: 'btn-success',
			confirmButtonText: 'Success!'
		});
		setTimeout(function () {
			$('#form_start1').submit();
		}, 500);
    }
  } else {
	 
  
    swal({
      title: "Ingrese Salida ref. Identificación.",
      text: "Asegúrese de que todos los campos se hayan completado correctamente!!",
      type: "warning",
      showCancelButton: true,
      confirmButtonClass: 'btn-warning',
      confirmButtonText: 'Ok'
    });
  }
}
function prd_sub1() {
  var input1 = document.getElementById("out_value1").value;
  document.getElementById("out_input2").value = input1;
  var output_check = 0;
  for (var i = 0; i < product_list.length; i++) {
     if((input1!=="N/A")&&(document.getElementById('out_pro_co1').value!=="Nil"))
    {
    if (product_list[i].match(input1)) {
      output_check = 1;
      break;
    } else {
      if (output_check == 0) {
	
        output_check = 0;
      }
      $("#but_save2").show();
    }
  }
}
  if (output_check == 0) {				  
	//**********************this comment when Q/A available************
	document.getElementById('start2').value = "/usr/sdext/Factory/machines/machine3/table2_es.shtm";
	//**********************END****************************	
if (document.getElementById("out_input2").value == "") {
		swal({
			title: "Ingrese Salida ref. Identificación.",
			text: "Asegúrese de que todos los campos se hayan completado correctamente.",
			type: "warning",
			showCancelButton: true,
			confirmButtonClass: 'btn-warning',
			confirmButtonText: 'Ok'
		});
	} else {
		swal({
			title: "¡El producto comienza con éxito!",
			type: "success",
			showCancelButton: true,
			confirmButtonClass: 'btn-success',
			confirmButtonText: 'Success!'
		});
		setTimeout(function () {
			$('#form_start2').submit();
		}, 500);
    }
  } else {
	
 
    swal({
      title: "Ingrese Salida ref. Identificación",
      text: "Asegúrese de que todos los campos se hayan completado correctamente!!",
      type: "warning",
      showCancelButton: true,
      confirmButtonClass: 'btn-warning',
      confirmButtonText: 'Ok'
    });
  }
 

}

function reset1() {


	document.getElementById("ret_tg").value = 0;
	swal({
		title: "¡Restablecimiento del producto con éxito!",
		type: "success",
		showCancelButton: true,
		confirmButtonClass: 'btn-success',
		confirmButtonText: 'Success!'
	});
	setTimeout(function () {
		$('#reset_form').submit();
	}, 1000);

}

function subform() {

	//**************comment this when Q/A AVAILABLE ****************
	 document.getElementById('qtr1').value = "/usr/sdext/Factory/machines/machine3/table2_es.shtm";
	//***************************END********************



	var prod_info = document.getElementById("out_code1").innerHTML;
	if (prod_info == "Nil") {
		swal({
			title: "Restablecer producto nulo",
			text: "Restablezca el producto cero utilizando el botón de restablecimiento anterior",
			type: "warning",
			showCancelButton: true,
			confirmButtonClass: 'btn-warning',
			confirmButtonText: 'Ok'
		});
	} else {

		if ((document.getElementById("qty1").value == "") || (document.getElementById("qty1").value ==0)) {
			swal({
				title: "Ingrese Kg",
				text: "Ingrese Kg o Kg es mayor que 0",
				type: "warning",
				showCancelButton: true,
				confirmButtonClass: 'btn-warning',
				confirmButtonText: 'Ok'
			});
		} else {
			//*************************Comment this whem QA not available***********
			var kg = document.getElementById("qty1").value;
			//document.getElementById('qtr1').value = "/usr/sdext/Factory/machines/machine3/index3.shtm?" + kg;
			//***********************END******************
			swal({
				title: "¡Producto enviado correctamente!",
				type: "success",
				showCancelButton: true,
				confirmButtonClass: 'btn-success',
				confirmButtonText: 'Success!'
			});
			setTimeout(function () {
				$('#form1').submit();
			}, 1000);
		}


	}


}

function subform1() {

		//**************comment this when Q/A AVAILABLE ****************
	document.getElementById('qtr2').value = "/usr/sdext/Factory/machines/machine3/table2_es.shtm";
	//***************************END********************
	

	var prod_info = document.getElementById("out_code1").innerHTML;
	if (prod_info == "Nil") {
		swal({
			title: "Restablecer producto nulo",
			text: "Restablezca el producto cero utilizando el botón de restablecimiento anterior",
			type: "warning",
			showCancelButton: true,
			confirmButtonClass: 'btn-warning',
			confirmButtonText: 'Ok'
		});
	} else {

		if ((document.getElementById("qty2").value == "") || (document.getElementById("qty2").value ==0)) {
			swal({
				title: "Ingrese Kg",
				text: "Ingrese Kg o Kg es mayor que 0",
				type: "warning",
				showCancelButton: true,
				confirmButtonClass: 'btn-warning',
				confirmButtonText: 'Ok'
			});
		} else {
			//*************************Comment this whem QA not available***********
			var kg = document.getElementById("qty2").value;
			// document.getElementById('qtr2').value = "/usr/sdext/Factory/machines/machine3/index3.shtm?" + kg;
			//***********************END******************
			swal({
				title: "¡Producto enviado correctamente!",
				type: "success",
				showCancelButton: true,
				confirmButtonClass: 'btn-success',
				confirmButtonText: 'Success!'
			});
			setTimeout(function () {
				$('#form2').submit();
			}, 1000);
		}


	}


}

function RestrictCommaSemicolon(e) {
	//console.log(e);
	var theEvent = e || window.event;
	var k = e ? e.which : window.event.keyCode;
	if (k == 32) return false;
	var key = theEvent.keyCode || theEvent.which;
	key = e.data;
	//console.log(theEvent.keyCode);
	var regex = /[^,;"'@#*,&.$:]+$/;
	if (!regex.test(key)) {
		theEvent.returnValue = false;
		if (theEvent.preventDefault) {
			theEvent.preventDefault();
		}
	}
}

function isNumberKey(txt, evt) {

	var charCode = (evt.which) ? evt.which : evt.keyCode;
	//console.log(charCode);
	//console.log(txt.value.indexOf('.'));

	if (charCode == 46) {
		//Check if the text already contains the . character
		if (txt.value.indexOf('.') === -1) {
			return true;
		} else {
			return false;
		}
	} else {
		if (charCode > 31 &&
			(charCode < 48 || charCode > 57))
			return false;
	}

	return true;
}


function ss1() {
	document.getElementById("error1").value = e1;

}

function ss2() {

	document.getElementById("error2").value = e2;

}

function ss3() {
	document.getElementById("error3").value = e3;

}

function ss4() {
	var d = document.getElementById("id_child2").value;
	e4 = d;
	document.getElementById("error4").value = e4;

}

$(document).ready(function () {
	var modal = document.getElementById("myModal");
	var btn = document.getElementById("myBtn");
	var btn1 = document.getElementById("clo2");
	var span = document.getElementsByClassName("close")[0];
	btn.onclick = function () {

		modal.style.display = "block";
		$("#pop_main1").show();
		$("#pop_sub1").hide();
		$("#pop_sub2").hide();
	}

	btn1.onclick = function () {

		modal.style.display = "none";
		$("#pop_main1").show();
		$("#pop_sub1").hide();
		$("#pop_sub2").hide();
	}

	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}


	var modal2 = document.getElementById("myModal2");
	var btn2 = document.getElementById("myBtn2");
	var btn3 = document.getElementById("clo3");
	btn2.onclick = function () {
		modal2.style.display = "block";
		$("#pop_prod_main1").show();
		$("#prod_pop_sub1").hide();
		$("#prod_pop_sub2").hide();
	}
	btn3.onclick = function () {
		modal2.style.display = "none";
		$("#pop_prod_main1").hide();
		$("#prod_pop_sub1").hide();
		$("#prod_pop_sub2").hide();
	}
	window.onclick = function (event) {
		if (event.target == modal2) {
			modal2.style.display = "none";
		}
	}


});


function opt(x) {
	var a = document.getElementById('optrd' + x).innerHTML;
	document.getElementById("oper_but").innerHTML = a;
	document.getElementById("op12").value = a;
}

function opt1(x) {
	var a = document.getElementById('optr' + x).innerHTML;
	document.getElementById("oper_but1").innerHTML = a;
	document.getElementById("op122").value = a;
}

function opt2(x) {
	var a = document.getElementById('opdr' + x).innerHTML;
	document.getElementById("oper_but2").innerHTML = a;
	document.getElementById("op_shift12").value = a;
}

function shift_opt() {


  var opt_value = document.getElementById("op_shift12").value;
if(opt_value>""){
   swal({
    title: "Operator name updated successfully",
    type: "success",
    showCancelButton: true,
    confirmButtonClass: 'btn-success',
    confirmButtonText: 'Success!'
  });
  setTimeout(function () {
    $('#operat_modal').submit();
  }, 1000);
}
else{
document.getElementById("op_shift12").value="None";
     swal({
    title: "Operator name updated successfully",
    type: "success",
    showCancelButton: true,
    confirmButtonClass: 'btn-success',
    confirmButtonText: 'Success!'
  });
  setTimeout(function () {
    $('#operat_modal').submit();
  }, 1000);
  
}
 
}


function bd() {
	$(document).ready(function () {

		if ($('#br_in').is(":checked")) {
			$('#bd').text('Avería de la máquina')
			$('#br23').val(1);

		} else {
			$('#bd').text('M / C abajo')
			$('#br23').val(0);
		}
		$('#break1').submit();


	});
}


function chat() {
	var modal = document.getElementById("myModal3");
	var btn = document.getElementById("clo1");
	var btn1 = document.getElementById("sub1");

	modal.style.display = "block";
	btn.onclick = function () {
		modal.style.display = "none";
	}

}


function thread() {
	var modal = document.getElementById("thread_modal");

	var btn = document.getElementById("clo1");
	modal.style.display = "block";
	btn.onclick = function () {
		modal.style.display = "none";
	}

}


function open_link() {
	window.open('chat3.shtm', '_blank');
}

function pop_sub1() {
	$("#pop_sub1").show();
	$("#pop_main1").hide();

}

function pop_sub2() {
	$("#pop_sub2").show();
	$("#pop_main1").hide();

}

function pop_main1() {

	$("#pop_sub1").hide();
	$("#pop_sub2").hide();
	$("#pop_main1").show();

}

function input_sub() {


	var pop_a1 = $("#supplier_dropdown1").html();
	var pop_a2 = $("#inputproductcode_dropdown1").html();
 
	var pop_a3 = document.getElementById("coil_run").value;
	var pop_a4 = document.getElementById("inp_qty1").value;

	if ((pop_a1 == "") || (pop_a2 == "") || (pop_a3 == "")) {
		swal({
			title: "Complete todos los campos",
			text: "Asegúrese de que todos los campos se hayan completado correctamente.",
			type: "warning",
			showCancelButton: true,
			confirmButtonClass: 'btn-warning',
			confirmButtonText: 'Ok'
		});
	} else {
		document.getElementById("pop_inp_pro1").value = pop_a2;
		document.getElementById("pop_sup_1").value = pop_a1;
		document.getElementById("pop_inp_coil1").value = pop_a3;
		document.getElementById("pop_inop_coil1").value = pop_a3;
		document.getElementById("pop_inop_qty").value = pop_a4;



		swal({
			title: "Producto de entrada ingresado correctamente",
			type: "success",
			showCancelButton: true,
			confirmButtonClass: 'btn-success',
			confirmButtonText: 'Success!'
		});
		setTimeout(function () {
			$("#pop_input_enter1").submit();
		}, 500);

	}

}

function input_sub2() {


	var pop_a1 = $("#supplier_dropdown2").html();
	var pop_a2 = $("#inputproductcode_dropdown2").html();
 
	var pop_a3 = document.getElementById("coil_run1").value;
	var pop_a4 = document.getElementById("inp_qty2").value;
	if ((pop_a1 == "") || (pop_a2 == "") || (pop_a3 == "")) {
		swal({
			title: "Complete todos los campos",
			text: "Asegúrese de que todos los campos se hayan completado correctamente.",
			type: "warning",
			showCancelButton: true,
			confirmButtonClass: 'btn-warning',
			confirmButtonText: 'Ok'
		});
	} else {
		document.getElementById("pop_inp_pro1").value = pop_a2;
		document.getElementById("pop_sup_1").value = pop_a1;
		document.getElementById("pop_inp_coil1").value = pop_a3;
		document.getElementById("pop_inop_coil1").value = pop_a3;
		document.getElementById("pop_inop_qty").value = pop_a4;
		swal({
			title: "Producto de entrada ingresado correctamente",
			type: "success",
			showCancelButton: true,
			confirmButtonClass: 'btn-success',
			confirmButtonText: 'Success!'
		});
		setTimeout(function () {
			$("#pop_input_enter1").submit();
		}, 500);


	}

}

function pop_sub3() {
	$("#pop_sub3").show();
	$("#pop_sub4").hide();
	$("#pop_sub5").hide();
	$("#pop_main2").hide();
}

function pop_sub4() {
	$("#pop_sub4").show();
	$("#pop_sub3").hide();
	$("#pop_sub5").hide();
	$("#pop_main2").hide();
}

function pop_sub5() {
	$("#pop_sub5").show();
	$("#pop_sub4").hide();
	$("#pop_sub3").hide();
	$("#pop_main2").hide();
}

function pop_main2() {
	$("#pop_sub5").hide();
	$("#pop_sub4").hide();
	$("#pop_sub3").hide();
	$("#pop_main2").show();
}



function restrict(tis) {
	var prev = tis.getAttribute("data-prev");
	prev = (prev != '') ? prev : '';
	if (Math.round(tis.value * 10000) / 10000 != tis.value)
		tis.value = prev;
	tis.setAttribute("data-prev", tis.value)
}


function operator1() {
	swal({
		title: "El nombre del operador se actualizó correctamente",
		type: "success",
		showCancelButton: true,
		confirmButtonClass: 'btn-success',
		confirmButtonText: 'Success!'
	});
	setTimeout(function () {
		$("#operator_sub1").submit();
	}, 1000);
}

function operator_sub2() {
	swal({
		title: "El nombre del operador se actualizó correctamente",
		type: "success",
		showCancelButton: true,
		confirmButtonClass: 'btn-success',
		confirmButtonText: 'Success!'
	});
	setTimeout(function () {
		$("#operator_sub2").submit();
	}, 1000);
}


function reason_sub()
{
       var reason1=document.getElementById("down_major").innerHTML;
       var reason2=document.getElementById("id_child").value;
       var reason3=document.getElementById("id_parent2").value;
       var reason4=document.getElementById("id_child2").value;
         document.getElementById("error1").value=reason1;
              document.getElementById("error2").value=reason2;
              document.getElementById("error3").value=reason3;
              document.getElementById("error4").value=reason4;
       document.getElementById("reason_alt").value=1;
       if((reason1=="")||(reason2=="")||(reason3=="")||(reason4==""))
       {
              swal({
                                      title: "Seleccione todos los campos de la razón",
                                                text: "Seleccione las 4 razones del tiempo de inactividad",         
                                                 type: "warning",
                                          showCancelButton: true,
          confirmButtonClass: 'btn-warning',
          confirmButtonText: 'Ok'
        });
       }
       else
       {
            
       
       swal({
          title: "Razón del tiempo de inactividad guardado con éxito",
          type: "success",
          showCancelButton: true,
          confirmButtonClass: 'btn-success',
          confirmButtonText: 'Success!'
        }); 
        setTimeout(function(){  $("#reason_form").submit(); }, 1000);                    




            
       }


}
function reason_sub1()
{
       var reason1=document.getElementById("down_major").innerHTML;
       var reason2=document.getElementById("id_child").value;
       var reason3=document.getElementById("id_parent2").value;
       var reason4=document.getElementById("id_child2").value;
       document.getElementById("error11").value=reason1;
          document.getElementById("error21").value=reason2;
          document.getElementById("error31").value=reason3;
          document.getElementById("error41").value=reason4;
       document.getElementById("major_rd111").value=Math.random()*1000;
       document.getElementById("reason_alt1").value=0;
       if((reason1=="")||(reason2=="")||(reason3=="")||(reason4==""))
       {
                swal({
                                      title: "Seleccione todos los campos de la razón",
                                                text: "Seleccione las 4 razones del tiempo de inactividad",         
                                                 type: "warning",
                                          showCancelButton: true,
          confirmButtonClass: 'btn-warning',
          confirmButtonText: 'Ok'
        });
       }
       else
       {
          
          swal({
         title: "Razón del tiempo de inactividad guardado con éxito",
          type: "success",
          showCancelButton: true,
          confirmButtonClass: 'btn-success',
          confirmButtonText: 'Success!'
        }); 
        setTimeout(function(){  $("#reason_form2").submit();  }, 1000); 
              
       }
       

}
