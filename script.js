window.onload = function () {
    const selectElement = document.forms[0].vendedor;
    const selectElement2 = document.forms[1].vendedor2;


    const sendButton = document.getElementById("send-button");


    sendButton.addEventListener('click', validate);

    let elementos = document.forms[0].elements;
    let elementos2 = document.forms[1].elements;
    const vendedor2 = "Pedro";
    const vendedor = "Juana";

    function validate(_e) {


        let acua = elementos[0].value;
        let emocion = elementos[1].value;
        let alegria = elementos[2].value;
        let frescura = elementos[3].value;

        let acua2 = elementos2[0].value;
        let emocion2 = elementos2[1].value;
        let alegria2 = elementos2[2].value;
        let frescura2 = elementos2[3].value;



        if (acua == null || isNaN(acua) || acua < 0 || acua > 99) {
            return false;
        } else if (emocion == null || isNaN(emocion) || emocion < 0 || emocion > 99) {
            return false;
        } else if (alegria == null || isNaN(alegria) || alegria < 0 || alegria > 99) {
            return false;
        } else if (frescura == null || isNaN(frescura) || frescura < 0 || frescura > 99) {
            return false;
        } else if (acua2 == null || isNaN(acua2) || acua2 < 0 || acua2 > 99) {
            return false;
        } else if (emocion2 == null || isNaN(emocion2) || emocion2 < 0 || emocion2 > 99) {
            return false;
        } else if (alegria2 == null || isNaN(alegria2) || alegria2 < 0 || alegria2 > 99) {
            return false;
        } else if (frescura2 == null || isNaN(frescura2) || frescura2 < 0 || frescura2 > 99) {
            return false;
        } else {
            let resultados = Calculo(vendedor, acua, emocion, alegria, frescura, vendedor2, acua2, emocion2, alegria2, frescura2)
            const container2 = document.getElementById("container");
            const element = document.createElement('div');
            element.className = "container2";
            element.innerHTML =
                `<p>
            <strong>${vendedor}</strong>
            <br>

            Ventas tipo Acua: ${elementos[0].value * 200}   ;
            Ventas tipo Emocion: ${elementos[1].value * 180} ;  
            Ventas tipo Alegria: ${elementos[2].value * 160};
            Ventas tipo Frescura: ${elementos[3].value * 150};
            
            </p>
            <br>
            <p>
            <strong>${vendedor2}</strong>
            <br>
            Ventas tipo Acua: ${elementos2[0].value * 200}   
            Ventas tipo Emocion: ${elementos2[1].value * 180}   
            Ventas tipo Alegria: ${elementos2[2].value * 160}
            Ventas tipo Frescura: ${elementos2[3].value * 150}
            
    </p>
        
        `;

            container2.appendChild(element);

        }
    }

    function Calculo(vendedor, acua, emocion, alegria, frescura, vendedor2, acua2, emocion2, alegria2, frescura2) {

        let totalventas = (acua * 200 + emocion * 180 + alegria * 160 + frescura * 150);
        let totalventas2 = (acua2 * 200 + emocion2 * 180 + alegria2 * 160 + frescura2 * 150);
        let EmpMes;
        if (totalventas > totalventas2) {
            EmpMes = vendedor;
        } else if (totalventas2 > totalventas) {
            EmpMes = vendedor2;
        } else {
            EmpMes = "Ventas Iguales";
        }
        console.log(`las ventas de Juana fueron: ${totalventas}`);
        console.log(`las ventas de pedro fueron: ${totalventas2}`);
        console.log(`el empleado con las mejores ventas este mes es: ${EmpMes}`);
        let arra = [EmpMes, totalventas, totalventas2];
        return arra;
    }
};