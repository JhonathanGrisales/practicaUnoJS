const show_info_card1 = function(){

    let product_info = document.getElementById("product_name").value;
    let product_cant = document.getElementById("cant_product").value;
    let talla_select = document.getElementById("talla_sect").value;

    document.getElementById("show_output").innerHTML = product_info + " " + product_cant + " " + talla_select;
    product_cant == 0
    ? console.log("No selecciono cantidad")
    : console.log("Ha seleccionado ", product_cant, " ", product_info , " la talla es " + talla_select);
};

