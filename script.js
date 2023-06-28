window.onload = function () {

    const selectElement = document.forms[0].vendedor;

    const container = document.getElementById("container");

    const sendButton = document.getElementById("send-button");

    // const finish = document.getElementById("finish");

    sendButton.addEventListener('click', validate);


    // finish.addEventListener('click', completarcompra);

    product_list = [];
    let ids = 0;

    let elementos = document.forms[0].elements;

    function validate(e) {
        e.preventDefault();
        let vendedor = elementos[0].value;
        let acua = elementos[1].value;
        let emocion = elementos[2].value;
        let alegria = elementos[3].value;
        let frescura = elementos[4].value;

        if (vendedor.selectedIndex == 0) {

            return false;
        }
        else if (acua == null || isNaN(acua) || acua < 0 || acua > 99) {
            return false;
        }
        else if (emocion == null || isNaN(emocion) || emocion < 0 || emocion > 99) {
            return false;
        }
        else if (alegria == null || isNaN(alegria) || alegria < 0 || alegria > 99) {
            return false;
        }
        else if (frescura == null || isNaN(frescura) || frescura < 0 || frescura > 99) {
            return false;
        } else {
            addVenta();
        }

    }

function addVenta() {
    let id = ids;
    let vendedor = elementos[0];
    let acua = elementos[1].value;
    let emocion = elementos[2].value;
    let alegria = elementos[3].value;
    let frescura = elementos[4].value;

    let venta = new Venta (id, vendedor, acua, emocion, alegria, frescura);
    // console.log("venta.id");
    // console.log(id, vendedor, acua,emocion,alegria,frescura);
    ids += 1;

    const element = document.createElement('div');
    element.className = "container2";

    // element.innerHTML =
    //     `<p>
    //     <strong>${vendedor}</strong>
    //     <br>
    //     Ventas tipo Acua: ${acua}   
    //     Ventas tipo Emocion: ${emocion}   
    //     Ventas tipo Alegria: ${alegria}
    //     Ventas tipo Frescura: ${frescura}
    //     Total de Ventas ${venta.getTotal()}
    // </p>
    // <input type="button" class="button" name="delete" value="Eliminar">
    // `;

    container.appendChild(element);
    product_list.push(venta);
    document.forms[0].reset();
    console.log(product_list);

    // this.id = ids;
    // this.vendedor = vendedor;
    // this.acua = acua;
    // this.emocion = emocion;
    // this.alegria = alegria;
    // this.frescura = frescura;

    // console.log("ID:"+ this.id);

}
}
















