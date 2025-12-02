document.addEventListener("DOMContentLoaded", () => {
    let storedUser;

    //LOGIN
    auth.onAuthStateChanged((user) => {
        if (user) {
            storedUser = JSON.parse(localStorage.getItem("user"));

            if (!storedUser || storedUser.rol !== "QUITO") {
                alert("Acceso denegado.");
                window.location.href = "../index.html";
            }else{
                document.getElementById("user-name").textContent = storedUser.nombre || "Usuario";
            }
        } else {
            window.location.href = "../index.html";
        }
    });

    //VENTAS
    const btnSell = document.getElementById("sell_product_btn");
    const txtScanSell = document.getElementById("txtScanSell");
    txtScanSell.focus();
    const divStock = document.getElementById("stock");
    const divVentas = document.getElementById("ventas");
    const imgSell = document.getElementById("imgSell");
    const txtNameSell = document.getElementById("txtNameSell");
    const txtSizeSell = document.getElementById("txtSizeSell");
    const txtLeatherSell = document.getElementById("txtLeatherSell");
    const txtConstructionSell = document.getElementById("txtConstructionSell");
    const txtPriceSell = document.getElementById("txtPriceSell");
    const txtObservationSell = document.getElementById("txtObservationSell");
    const txtAmountSell = document.getElementById("txtAmountSell");
    const cheshowDiscount = document.getElementById("cheshowDiscount");
    const txtDis1Sell = document.getElementById("txtDis1Sell");
    const txtDis2Sell = document.getElementById("txtDis2Sell");
    const txtDis3Sell = document.getElementById("txtDis3Sell");
    const cheDis1Sell = document.getElementById("cheDis1Sell");
    const cheDis2Sell = document.getElementById("cheDis2Sell");
    const cheDis3Sell = document.getElementById("cheDis3Sell");
    const txtDisTot = document.getElementById("txtDisTot");
    const txtTotalSell = document.getElementById("txtTotalSell");
    const txtClientSell = document.getElementById("txtClientSell");
    const btnSearchClient = document.getElementById("btnSearchClient");
    const btnAddClient = document.getElementById("btnAddClient");
    const txtIdentificationClient = document.getElementById("txtIdentificationClient");
    const txtNameClient = document.getElementById("txtNameClient");
    const btnAddProduct = document.getElementById("btnAddProduct");
    const txtAmountRes = document.getElementById("txtAmountRes");
    const txtSubtotalRes = document.getElementById("txtSubtotalRes");
    const txtDiscountRes = document.getElementById("txtDiscountRes");
    const txtTotalRes = document.getElementById("txtTotalRes");
    const txtAbonoRes = document.getElementById("txtAbonoRes");
    const txtObservacionRes = document.getElementById("txtObservacionRes");
    let listProductsSell = [];
    const btnConfirmSell = document.getElementById("btnConfirmSell");
    const modalAddClient = document.getElementById("modalAddClient");
    const txtIdentificationClientAdd = document.getElementById("txtIdentificationClientAdd");
    const txtNameClientAdd = document.getElementById("txtNameClientAdd");
    const txtDirectionClientAdd = document.getElementById("txtDirectionClientAdd");
    const txtTelephoneClientAdd = document.getElementById("txtTelephoneClientAdd");
    const txtEmailClientAdd = document.getElementById("txtEmailClientAdd");
    const btnSaveClient = document.getElementById("btnSaveClient");
    const btnCancelAddClient = document.getElementById("btnCancelAddClient");
    const btnAbono = document.getElementById("btnAbono");
    const btnCambio = document.getElementById("btnCambio");
    const btnDevolucion = document.getElementById("btnDevolucion");
    const modalAbono = document.getElementById("modalAbono");
    const txtBuscarClienteAbono = document.getElementById("txtBuscarClienteAbono");
    const txtIdentificacionAbono = document.getElementById("txtIdentificacionAbono");
    const txtClienteAbono = document.getElementById("txtClienteAbono");
    const txtValorAbono = document.getElementById("txtValorAbono");
    const cheNuevoAbono = document.getElementById("cheNuevoAbono");
    const txtObservacionAbono = document.getElementById("txtObservacionAbono");
    const btnConfirmarAbono = document.getElementById("btnConfirmarAbono");
    const btnCancelarAbono = document.getElementById("btnCancelarAbono");
    const modalCambio = document.getElementById('modalCambio');
    const txtBuscarVentaCambio = document.getElementById('txtBuscarVentaCambio');
    const btnBuscarVentaCambio = document.getElementById('btnBuscarVentaCambio');
    const elegirVenta = document.getElementById('elegirVenta');
    const tablaVentasRealizadas = document.getElementById('tablaVentasRealizadas');
    const txtClienteBuscarCambio = document.getElementById('txtClienteBuscarCambio');
    const txtCodAnteriorCambio = document.getElementById('txtCodAnteriorCambio');
    const txtNombreAnteriorCambio = document.getElementById('txtNombreAnteriorCambio');
    const txtTallaAnteriorCambio = document.getElementById('txtTallaAnteriorCambio');
    const txtTotalAnteriorCambio = document.getElementById('txtTotalAnteriorCambio');
    const txtEscanearNuevoCambio = document.getElementById('txtEscanearNuevoCambio');
    const txtCodNuevoCambio = document.getElementById('txtCodNuevoCambio');
    const txtNombreNuevoCambio = document.getElementById('txtNombreNuevoCambio');
    const txtTallaNuevoCambio = document.getElementById('txtTallaNuevoCambio');
    const txtTotalNuevoCambio = document.getElementById('txtTotalNuevoCambio');
    const txtTotalCambio = document.getElementById('txtTotalCambio');
    const btnConfirmarCambio = document.getElementById('btnConfirmarCambio');
    const btnCancelarCambio = document.getElementById('btnCancelarCambio');
    const modalDevolucion = document.getElementById('modalDevolucion');
    const txtBuscarVentaDevolucion = document.getElementById('txtBuscarVentaDevolucion');
    const btnBuscarVentaDevolucion = document.getElementById('btnBuscarVentaDevolucion');
    const elegirVentaDevolucion = document.getElementById('elegirVentaDevolucion');
    const txtClienteBuscarDevolucion = document.getElementById('txtClienteBuscarDevolucion');
    const tablaVentasRealizadasDevolucion = document.getElementById('tablaVentasRealizadasDevolucion');
    const txtCodDevolucion = document.getElementById('txtCodDevolucion');
    const txtNombreDevolucion = document.getElementById('txtNombreDevolucion');
    const txtTallaDevolucion = document.getElementById('txtTallaDevolucion');
    const txtTotalDevolucion = document.getElementById('txtTotalDevolucion');
    const btnConfirmarDevolucion = document.getElementById('btnConfirmarDevolucion');
    const btnCancelarDevolucion = document.getElementById('btnCancelarDevolucion');
    const modalConfirmarVenta = document.getElementById('modalConfirmarVenta');
    const tabConfirmarVenta = document.getElementById('tabConfirmarVenta');
    const txtComprobanteVenta = document.getElementById('txtComprobanteVenta');
    const btnConfirmarVenta = document.getElementById('btnConfirmarVenta');
    const btnCancelarVenta = document.getElementById('btnCancelarVenta');
    const tabStockDisponible = document.getElementById('tabStockDisponible');
    const txtTotalAbono = document.getElementById('txtTotalAbono');

    btnSell.addEventListener("click", function() {
        divStock.style.display = "none";
        divRecibir.style.display = "none";
        divVentas.style.display = "flex";
        btnReceiveProducts.disabled = false;
        btnVerStock.disabled = false;
        btnSell.disabled = true;
        listProductsSell.length = 0;
        txtNameClient.textContent = "";
        txtIdentificationClient.textContent = "";
        txtAmountRes.textContent = 0;
        txtSubtotalRes.textContent = 0;
        txtDiscountRes.textContent = 0;
        txtAbonoRes.textContent = 0;
        txtDisTot.textContent = 0;
        txtScanSell.style.display = "flex";
        divReportes.style.display = 'none';
        btnReportes.disabled = false;
        divClientes.style.display = "none";
        btnClientes.disabled = false;
        txtScanSell.focus();
    });

    txtScanSell.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            showAlert("Cargando...", "L");
            divVentas.style.display = "none";
            const code = txtScanSell.value.substring(0, 5);
            const size = txtScanSell.value.substring(5,7);

            db.collection("QUITO").doc(code.toString()).get()
            .then((doc) => {
                if(doc.exists){
                    const product = doc.data();
                    imgSell.src = product.foto;
                    txtNameSell.textContent = product.nombre;
                    txtSizeSell.textContent = size.toString();
                    txtLeatherSell.textContent = product.cuero;
                    txtConstructionSell.textContent = product.construccion;
                    txtPriceSell.textContent = "$" + product.precio;
                    txtObservationSell.textContent = product.observacion;
                    txtAmountSell.disabled = false;
                    txtAmountSell.value = 1;
                    txtDis1Sell.textContent = product.d1 + "%";
                    txtDis2Sell.textContent = "$" + product.d2;
                    txtDis3Sell.textContent = "$" + product.d3;
                    txtDisTot.textContent = "$0";
                    txtTotalSell.textContent = "$" + product.precio;
                    btnAddProduct.setAttribute("data_id", code);
                    btnConfirmSell.setAttribute("data_id", code);
                    divVentas.style.display = "flex";
                    mostrarStockDisponible(product);
                    showAlert("", "C");
                    txtScanSell.value = "";
                    txtClientSell.focus();
                }else{
                    showAlert("El producto escaneado no existe", "E");
                    divVentas.style.display = "none";
                    txtScanSell.value = "";
                    txtScanSell.focus();
                }
            }).catch((error) => {
                showAlert(error.message, "E");
                imgSell.removeAttribute("src");
                txtNameSell.value = "";
                txtSizeSell.value = "";
                txtLeatherSell.value = "";
                txtConstructionSell.value = "";
                txtPriceSell.value = "";
                txtObservationSell.value = "";
                txtAmountSell.disabled = true;
                txtAmountSell.value = "";
                txtDis1Sell.value = "";
                txtDis2Sell.value = "";
                txtDis3Sell.value = "";
                txtTotalSell.value = "";
                cheDis1Sell.checked = false;
                cheDis2Sell.checked = false;
                cheDis3Sell.checked = false;
            });
        }
    });
    function mostrarStockDisponible(pro){
        tabStockDisponible.innerHTML = '';
        const tallas = [34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44];
        const row1 = document.createElement('tr');
        const row2 = document.createElement('tr');
        tallas.forEach(talla => {
            const stock = pro[`t${talla}`];
            if(stock > 0){
                row1.innerHTML += `<th style='padding:2px; font-size:12px'>${talla}</th>`;
                row2.innerHTML += `<td style='padding:2px; font-size:12px'>${stock}</td>`;
            }
        });
        tabStockDisponible.appendChild(row1);
        tabStockDisponible.appendChild(row2);
    }

    txtAmountSell.addEventListener("change", function({ target }) {
        const act = txtPriceSell.textContent.replace("$", "");
        const tot = act * target.value;
        txtTotalSell.textContent = "$" + tot;
        txtDisTot.textContent = "$0";
        cheDis1Sell.checked = false;
        cheDis2Sell.checked = false;
        cheDis3Sell.checked = false;
    });

    cheshowDiscount.addEventListener("change", function({ target }) {
        const act = txtPriceSell.textContent.replace("$", "") * txtAmountSell.value;
        if(target.checked){
            cheDis1Sell.style.display = "inline";
            cheDis2Sell.style.display = "inline";
            cheDis3Sell.style.display = "inline";
            txtDis1Sell.style.display = "inline";
            txtDis2Sell.style.display = "inline";
            txtDis3Sell.style.display = "inline";
            txtDisTot.style.display = "inline";
        }else{
            cheDis1Sell.style.display = "none";
            cheDis2Sell.style.display = "none";
            cheDis3Sell.style.display = "none";
            txtDis1Sell.style.display = "none";
            txtDis2Sell.style.display = "none";
            txtDis3Sell.style.display = "none";
            txtDisTot.style.display = "none";
            txtTotalSell.textContent = "$" + act;
            txtDisTot.textContent = "$0";
        }
    });

    cheDis1Sell.addEventListener("change", function({ target }) {
        const act = txtPriceSell.textContent.replace("$", "") * txtAmountSell.value;
        if(target.checked){
            const des = txtDis1Sell.textContent.replace("%", "");
            const tot = act - (act * des / 100);
            txtTotalSell.textContent = "$" + tot;
            txtDisTot.textContent = "$" + (act * des / 100);
            cheDis2Sell.checked = false;
            cheDis3Sell.checked = false;
        }else{
            txtTotalSell.textContent = "$" + act;
            txtDisTot.textContent = "$0";
        }
    });

    cheDis2Sell.addEventListener("change", function({ target }) {
        const act = txtPriceSell.textContent.replace("$", "") * txtAmountSell.value;
        if(target.checked){
            const des = txtDis2Sell.textContent.replace("$", "");
            const tot = act - (des * txtAmountSell.value);
            txtTotalSell.textContent = "$" + tot;
            txtDisTot.textContent = "$" + (des * txtAmountSell.value);
            cheDis1Sell.checked = false;
            cheDis3Sell.checked = false;
        }else{
            txtTotalSell.textContent = "$" + act;
            txtDisTot.textContent = "$0";
        }
    });

    cheDis3Sell.addEventListener("change", function({ target }) {
        const act = txtPriceSell.textContent.replace("$", "") * txtAmountSell.value;
        if(target.checked){
            const des = txtDis3Sell.textContent.replace("$", "");
            const tot = act - (des * txtAmountSell.value);
            txtTotalSell.textContent = "$" + tot;
            txtDisTot.textContent = "$" + (des * txtAmountSell.value);
            cheDis1Sell.checked = false;
            cheDis2Sell.checked = false;
        }else{
            txtTotalSell.textContent = "$" + act;
            txtDisTot.textContent = "$0";
        }
    });

    btnSearchClient.addEventListener("click", async function() {
        if(txtClientSell.value == ""){
            showAlert("Debe escribir la cédula antes de realizar la búsqueda","E");
        }else{
            if(txtAmountRes.textContent == 0){
                const doc = await buscarAbono(txtClientSell.value.toString());
                if(doc != null){
                    const abono = doc.data();
                    txtAbonoRes.textContent = abono.abono;
                    btnConfirmSell.setAttribute('abono_id',doc.id);
                }
            }

            db.collection("CLIENTES").doc(txtClientSell.value.toString()).get()
            .then((doc) => {
                if(doc.exists){
                    const client = doc.data();
                    txtIdentificationClient.textContent = txtClientSell.value;
                    txtNameClient.textContent = client.nombre;
                    txtClientSell.value = "";
                }else{
                    showAlert("El cliente buscado no existe", "E");
                    txtIdentificationClient.textContent = "";
                    txtNameClient.textContent = "";
                    txtClientSell.value = "";
                }   
            }).catch((error) => {
                showAlert(error.message, "E");
            });
        }
    });

    btnAddProduct.addEventListener("click", async function () {
        if(txtNameSell.textContent == "" || txtNameClient.textContent == ""){
            showAlert("Debe escanear un producto y elegir un cliente, antes de añadir al carrito", "E");
        }else{
            showAlert("CARGANDO", "L");
            const code = this.getAttribute("data_id");
            try{
                const product = (await db.collection("QUITO").doc(code.toString()).get()).data();
                if(product[`t${txtSizeSell.textContent}`] >= txtAmountSell.value){
                    listProductsSell.push({
                        cod: code,
                        nom: txtNameSell.textContent,
                        cue: txtLeatherSell.textContent,
                        con: txtConstructionSell.textContent,
                        tal: txtSizeSell.textContent,
                        pre: txtPriceSell.textContent.replace("$",""),
                        can: txtAmountSell.value,
                        des: txtDisTot.textContent.replace("$",""),
                        tot: txtTotalSell.textContent.replace("$",""),
                    });
                    txtAmountRes.textContent = parseInt(txtAmountRes.textContent) + parseInt(txtAmountSell.value);
                    txtSubtotalRes.textContent = parseFloat(txtSubtotalRes.textContent) + parseFloat(txtPriceSell.textContent.replace("$",""));
                    txtDiscountRes.textContent = parseFloat(txtDiscountRes.textContent) + parseFloat(txtDisTot.textContent.replace("$",""));
                    txtTotalRes.textContent = (parseFloat(txtSubtotalRes.textContent) - parseFloat(txtDiscountRes.textContent) - parseFloat(txtAbonoRes.textContent)).toFixed(2);
                    imgSell.removeAttribute("src");
                    txtNameSell.textContent = "";
                    txtSizeSell.textContent = "";
                    txtLeatherSell.textContent = "";
                    txtConstructionSell.textContent = "";
                    txtPriceSell.textContent = "";
                    txtObservationSell.textContent = "";
                    txtAmountSell.disabled = true;
                    txtAmountSell.value = "";
                    txtDis1Sell.textContent = "";
                    txtDis2Sell.textContent = "";
                    txtDis3Sell.textContent = "";
                    txtTotalSell.textContent = "";
                    cheDis1Sell.checked = false;
                    cheDis2Sell.checked = false;
                    cheDis3Sell.checked = false;
                    cheshowDiscount.checked = false;
                    cheDis1Sell.style.display = "none";
                    cheDis2Sell.style.display = "none";
                    cheDis3Sell.style.display = "none";
                    txtDis1Sell.style.display = "none";
                    txtDis2Sell.style.display = "none";
                    txtDis3Sell.style.display = "none";
                    txtDisTot.style.display = "none";
                    txtDisTot.textContent = "$0";
                    tabStockDisponible.innerHTML = '';
                    txtScanSell.focus();
                    showAlert("", "C");
                }else{
                    showAlert("Stock insuficiente", "E");
                }
            }catch(e){
                showAlert(e, "E");
            }
        }
    });

    btnConfirmSell.addEventListener("click", function() {
        let idAbono = this.getAttribute("abono_id");
        if(idAbono === null){
            idAbono = '';
        }
        if(txtNameClient.textContent == "" || txtAmountRes.textContent == ""){
            showAlert("Debe añadir por lo menos un producto y elegir un cliente, antes de finalizar la venta", "E");
        }else{
            tabConfirmarVenta.innerHTML = '';
            let subtotal = 0;
            for(const p of listProductsSell){
                subtotal += parseFloat(p.tot);
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td style = 'font-size: 12px'>${p.nom}</td>
                    <td style = 'font-size: 12px'>${p.cue}</td>
                    <td style = 'font-size: 12px'>${p.tal}</td>
                    <td style = 'font-size: 12px'>${p.can}</td>
                    <td style = 'font-size: 12px'>${p.pre}</td>
                    <td style = 'font-size: 12px'>${p.des}</td>
                    <td style = 'font-size: 12px'>${p.tot}</td>
                `;
                tabConfirmarVenta.appendChild(row);
            }
            const rowSub = document.createElement('tr');
            rowSub.innerHTML = `
                <td colspan='5'></td>
                <td style = 'font-size: 12px; text-align: right'>Subtotal($):</td>
                <td style = 'font-size: 12px; text-align: right'>${parseFloat(subtotal).toFixed(2)}</td>
            `;
            tabConfirmarVenta.appendChild(rowSub);
            const rowAbo = document.createElement('tr');
            rowAbo.innerHTML = `
                <td colspan='5'></td>
                <td style = 'font-size: 12px; text-align: right'>Abono($):</td>
                <td style = 'font-size: 12px; text-align: right'>${parseFloat(txtAbonoRes.textContent).toFixed(2)}</td>
            `;
            tabConfirmarVenta.appendChild(rowAbo);
            const rowTot = document.createElement('tr');
            rowTot.innerHTML = `
                <td colspan='5'></td>
                <td style = 'font-size: 13px; text-align: right'><b>Total($):</b></td>
                <td style = 'font-size: 13px; text-align: right'><b>${txtTotalRes.textContent}</b></td>
            `;
            tabConfirmarVenta.appendChild(rowTot);
            btnConfirmarVenta.setAttribute('abonoVenta', idAbono);
            modalConfirmarVenta.style.display = 'flex';
        }
    });

    btnAddClient.addEventListener("click", function() {
        modalAddClient.style.display = "flex";
    });
    
    btnSaveClient.addEventListener("click", function() {
        if(txtIdentificationClientAdd.value == "" || txtNameClientAdd.value == "" || 
            txtDirectionClientAdd.value == "" || txtTelephoneClientAdd.value == "" ||
            txtEmailClientAdd.value == ""
        ){
            showAlert("Debe llenar los campos obligatorios", "E");
        }else{
            db.collection("CLIENTES").doc(txtIdentificationClientAdd.value).set({
                nombre: txtNameClientAdd.value,
                direccion: txtDirectionClientAdd.value,
                telefono: txtTelephoneClientAdd.value,
                correo: txtEmailClientAdd.value
            }).then(() => {
                showAlert("Cliente agregado con éxito", "S");
                modalAddClient.style.display = "none";
                txtIdentificationClientAdd.value = "";
                txtNameClientAdd.value = "";
                txtDirectionClientAdd.value = "";
                txtTelephoneClientAdd.value = "";
                txtEmailClientAdd.value = "";
            }).catch((error) => {
                showAlert(error.message, "E");
            })
        }
    });

    btnCancelAddClient.addEventListener("click", function() {
        modalAddClient.style.display = "none";
        txtIdentificationClientAdd.value = "";
        txtNameClientAdd.value = "";
        txtDirectionClientAdd.value = "";
        txtTelephoneClientAdd.value = "";
        txtEmailClientAdd.value = "";
    });

    btnAbono.addEventListener("click", function() {
        modalAbono.style.display = "flex";
    })
    txtBuscarClienteAbono.addEventListener('keypress', async function(event) {
        if(event.key === 'Enter'){
            if(txtBuscarClienteAbono.value == ""){
                showAlert('Debe escribir la cédula antes de realizar la búsqueda','E');
            }else{
                try{
                    showAlert('Buscando cliente...', 'L');
                    const doc = await db.collection('CLIENTES').doc(txtBuscarClienteAbono.value).get();
                    if(doc.exists){
                        const cliente = doc.data();
                        txtIdentificacionAbono.textContent = txtBuscarClienteAbono.value;
                        txtClienteAbono.textContent = cliente.nombre;
                        txtBuscarClienteAbono.value = "";
                        showAlert('', 'C');
                    }else{
                        showAlert('El cliente buscado no existe', 'E');
                    }
                }catch(e){
                    showAlert(e.message, 'E');
                }
            }
        }
    })
    cheNuevoAbono.addEventListener("change", function({ target }) {
        if(target.checked){
            txtTotalAbono.disabled = false;
            txtTotalAbono.focus();
        }else{
            txtTotalAbono.value = '';
            txtTotalAbono.disabled = true;
        }
    })
    btnConfirmarAbono.addEventListener("click", async function() {
        if(txtClienteAbono.textContent == '' || txtValorAbono.value == ''){
            showAlert('Debe llenar los campos obligatorios', 'E');
        }else{
            try{
                showAlert('Creando abono', 'L');
                const pago = document.querySelector('input[name="txtPagoAbo"]:checked')?.value;
                const fecha = obtenerFechaHora();
                await db.collection('ABONOS').add({
                    fecha: fecha[0],
                    mes: fecha[2],
                    hora: fecha[1],
                    local: "Quito",
                    identificacion: txtIdentificacionAbono.textContent,
                    abono: txtValorAbono.value,
                    total: txtTotalAbono.value,
                    nuevo: cheNuevoAbono.checked ? 'X' : '',
                    pago: pago,
                    observacion: txtObservacionAbono.value,
                    tratado: ''
                });
                resetearAbono();
                showAlert('Abono creado con éxito', 'S');
            }catch(e){
                showAlert(e.message, 'E');
            }
        }
    })
    btnCancelarAbono.addEventListener("click", function() {
        resetearAbono();
    })
    function resetearAbono(){
        modalAbono.style.display = "none";
        txtBuscarClienteAbono.value = '';
        txtIdentificacionAbono.textContent = '';
        txtClienteAbono.textContent = '';
        txtValorAbono.value = '';
        cheNuevoAbono.checked = false;
        txtTotalAbono.value = '';
        txtObservacionAbono.value = '';
    }
    function obtenerFechaHora(){
        const n = new Date();
        const fecha = `${n.getDate().toString().padStart(2, '0')}-${(n.getMonth()+1).toString().padStart(2, '0')}-${n.getFullYear()}`;
        const mes = `${(n.getMonth()+1).toString().padStart(2, '0')}-${n.getFullYear()}`;
        const ani = `${n.getFullYear()}`;
        const hora = `${n.getHours().toString().padStart(2, '0')}:${n.getMinutes().toString().padStart(2, '0')}:${n.getSeconds().toString().padStart(2, '0')}`;
        return [fecha, hora, mes, ani];
    }
    async function buscarAbono(cliente){
        try{
            const abono = await db.collection('ABONOS').where('identificacion', '==', cliente).where('tratado', '==', '').get();
            if(!abono.empty){
                if(abono.size > 1){
                    showAlert('Existe mas de un abono se tomará solo el primero', 'E');
                }
                return abono.docs[0];
            }
        }catch(e){
            showAlert(e.message, 'E');
        }
    }

    btnCambio.addEventListener('click', function() {
        modalCambio.style.display = 'flex';
        txtBuscarVentaCambio.focus();
    })
    btnBuscarVentaCambio.addEventListener('click', async function() {
        if(txtBuscarVentaCambio.value == '' ){
            showAlert('Debe escribir la identificacion para buscar las ventas', 'E');
        }else{
            showAlert('Cargando ventas...', 'L');
            const ventas = await buscarVentas(txtBuscarVentaCambio.value);
            if(ventas != null){
                tablaVentasRealizadas.innerHTML = '';
                txtClienteBuscarCambio.textContent = ventas.docs[0].data().nombre;
                ventas.forEach((doc) =>{
                    const venta = doc.data();
                    const row = document.createElement('tr');
                    row.innerHTML = `<td colspan='4' style='text-align: center'><b>${venta.fecha}</b></td>`;
                    tablaVentasRealizadas.appendChild(row);
                    venta.zdetalles.forEach((det) => {
                        const row = document.createElement('tr');
                        row.innerHTML = `
                            <td>${det.nom}</td>
                            <td>${det.tal}</td>
                            <td>${det.tot}</td>
                            <td>
                                <button class="btnElegirVenta" 
                                    data-cod="${det.cod}" 
                                    data-nom="${det.nom}" 
                                    data-tal="${det.tal}" 
                                    data-tot="${det.tot}" 
                                    title="Tomar venta"
                                >
                                    <i class="fa fa-chevron-right"></i>
                                </button>
                            </td>
                        `;
                        tablaVentasRealizadas.appendChild(row);
                    });
                    
                });
                eventosBuscarVentas();
                elegirVenta.style.display = 'block';
            }
            showAlert('', 'C');
        }
    })
    function eventosBuscarVentas() {
        document.querySelectorAll(".btnElegirVenta").forEach(button => {
            button.addEventListener("click", function () {
                txtCodAnteriorCambio.textContent = this.dataset.cod;
                txtNombreAnteriorCambio.textContent = this.dataset.nom;
                txtTallaAnteriorCambio.textContent = this.dataset.tal;
                txtTotalAnteriorCambio.textContent = this.dataset.tot;
                if(txtTotalAnteriorCambio.textContent != '' && txtTotalNuevoCambio.textContent != ''){
                    txtTotalCambio.textContent = (txtTotalNuevoCambio.textContent - txtTotalAnteriorCambio.textContent).toFixed(2);
                }
                elegirVenta.style.display = 'none';
            });
        });
    }
    txtEscanearNuevoCambio.addEventListener('keypress', async function(event) {
        if (event.key === 'Enter') {
            showAlert('Buscando producto...' , 'L');
            const cod = event.target.value.substring(0, 5);
            const siz = event.target.value.substring(5,7);
            const pro = await buscarProducto(cod);
            if(pro != null){
                txtCodNuevoCambio.textContent = cod;
                txtNombreNuevoCambio.textContent = pro.nombre;
                txtTallaNuevoCambio.textContent = siz;
                txtTotalNuevoCambio.textContent = pro.precio;
                if(txtTotalAnteriorCambio.textContent != '' && txtTotalNuevoCambio.textContent != ''){
                    txtTotalCambio.textContent = (txtTotalNuevoCambio.textContent - txtTotalAnteriorCambio.textContent).toFixed(2);
                }
            }
            txtEscanearNuevoCambio.value = '';
            showAlert('', 'C');
        }
    })
    btnConfirmarCambio.addEventListener('click', async function(){
        if(txtTotalAnteriorCambio.textContent == '' || txtTotalNuevoCambio.textContent == ''){
            showAlert('Debe escoger un producto anterior y nuevo para realizar el cambio', 'E');
        }else{
            showAlert('Realizando cambio...', 'L');
            const fecha = obtenerFechaHora();
            try{
                await db.collection('CAMBIOS').add({
                    fecha: fecha[0],
                    local: 'Quito',
                    identificacion: txtBuscarVentaCambio.value,
                    codAnt: txtCodAnteriorCambio.textContent,
                    tallaAnt: txtTallaAnteriorCambio.textContent, 
                    totalAnt: txtTotalAnteriorCambio.textContent, 
                    codNue: txtCodNuevoCambio.textContent, 
                    tallaNue: txtTallaNuevoCambio.textContent, 
                    totalNue: txtTotalNuevoCambio.textContent, 
                    total: txtTotalCambio.textContent
                });
                await actualizarStockCambio(txtCodAnteriorCambio.textContent, txtTallaAnteriorCambio.textContent, 1);
                await actualizarStockCambio(txtCodNuevoCambio.textContent, txtTallaNuevoCambio.textContent, -1);
                resetearCambio();
                showAlert('Cambio realizado con éxito', 'S');
            }catch(e){
                showAlert(e.message, 'E');
            }
        }
    })
    btnCancelarCambio.addEventListener('click', function(){
        resetearCambio();
    })
    function resetearCambio(){
        modalCambio.style.display = 'none';
        txtBuscarVentaCambio.value = '';
        elegirVenta.style.display = 'none';
        txtNombreAnteriorCambio.textContent = '';
        txtTallaAnteriorCambio.textContent = '';
        txtTotalAnteriorCambio.textContent = '';
        txtTotalCambio.textContent = '';
    }
    async function buscarVentas(cliente){
        const ventas = await db.collection('VENTAS').where('identificacion','==',cliente).get();
        if(ventas.empty){
            showAlert('No existen ventas para el cliente buscado', 'E');
            return null;
        }else{
            return ventas; 
        }
    }
    async function buscarProducto(cod){
        const doc = await db.collection('QUITO').doc(cod).get();
        if(!doc.exists){
            showAlert('No existe el producto buscado', 'E');
            return null;
        }else{
            return doc.data(); 
        }
    }
    async function actualizarStockCambio(cod, tal, can){
        const talla = `t${tal}`;
        const doc = await db.collection("QUITO").doc(cod).get();
        const pro = doc.data();
        const act = pro[talla] + can;
        await db.collection("QUITO").doc(cod).update({
            [talla]: act
        });
    }

    btnDevolucion.addEventListener('click', function() {
        modalDevolucion.style.display = 'flex';
        txtBuscarVentaDevolucion.focus();
    })
    btnBuscarVentaDevolucion.addEventListener('click', async function() {
        if(txtBuscarVentaDevolucion.value == '' ){
            showAlert('Debe escribir la identificacion para buscar las ventas', 'E');
        }else{
            showAlert('Cargando ventas...', 'L');
            const ventas = await buscarVentas(txtBuscarVentaDevolucion.value);
            if(ventas != null){
                tablaVentasRealizadasDevolucion.innerHTML = '';
                txtClienteBuscarDevolucion.textContent = ventas.docs[0].data().nombre;
                ventas.forEach((doc) =>{
                    const venta = doc.data();
                    const row = document.createElement('tr');
                    row.innerHTML = `<td colspan='4' style='text-align: center'><b>${venta.fecha}</b></td>`;
                    tablaVentasRealizadasDevolucion.appendChild(row);
                    venta.zdetalles.forEach((det) => {
                        const row = document.createElement('tr');
                        row.innerHTML = `
                            <td>${det.nom}</td>
                            <td>${det.tal}</td>
                            <td>${det.tot}</td>
                            <td>
                                <button class="btnElegirVentaDev" 
                                    data-cod="${det.cod}" 
                                    data-nom="${det.nom}" 
                                    data-tal="${det.tal}" 
                                    data-tot="${det.tot}" 
                                    title="Tomar venta"
                                >
                                    <i class="fa fa-chevron-right"></i>
                                </button>
                            </td>
                        `;
                        tablaVentasRealizadasDevolucion.appendChild(row);
                    });
                    
                });
                eventosBuscarVentasDevolucion();
                elegirVentaDevolucion.style.display = 'block';
            }
            showAlert('', 'C');
        }
    })
    function eventosBuscarVentasDevolucion() {
        document.querySelectorAll(".btnElegirVentaDev").forEach(button => {
            button.addEventListener("click", function () {
                txtCodDevolucion.textContent = this.dataset.cod;
                txtNombreDevolucion.textContent = this.dataset.nom;
                txtTallaDevolucion.textContent = this.dataset.tal;
                txtTotalDevolucion.textContent = this.dataset.tot;
                elegirVentaDevolucion.style.display = 'none';
            });
        });
    }
    btnConfirmarDevolucion.addEventListener('click', async function(){
        if(txtTotalDevolucion.textContent == ''){
            showAlert('Debe escoger un producto para realizar la devolución', 'E');
        }else{
            showAlert('Realizando devolución...', 'L');
            const fecha = obtenerFechaHora();
            try{
                await db.collection('DEVOLUCIONES').add({
                    fecha: fecha[0],
                    local: 'Quito',
                    identificacion: txtBuscarVentaDevolucion.value,
                    cod: txtCodDevolucion.textContent,
                    talla: txtTallaDevolucion.textContent, 
                    total: txtTotalDevolucion.textContent
                });
                await actualizarStockCambio(txtCodDevolucion.textContent, txtTallaDevolucion.textContent, 1);
                resetearDevolucion();
                showAlert('Devolución realizada con éxito', 'S');
            }catch(e){
                showAlert(e.message, 'E');
            }
        }
    })
    btnCancelarDevolucion.addEventListener('click', function(){
        resetearDevolucion();
    })
    function resetearDevolucion(){
        modalDevolucion.style.display = 'none';
        txtBuscarVentaDevolucion.value = '';
        elegirVentaDevolucion.style.display = 'none';
        txtNombreDevolucion.textContent = '';
        txtTallaDevolucion.textContent = '';
        txtTotalDevolucion.textContent = '';
    }

    btnConfirmarVenta.addEventListener('click', async function() {
        const idAbono = this.getAttribute("abonoVenta");

        if(txtComprobanteVenta.value == ""){
            showAlert("Debe escribir el número de comprobante, antes de confirmar la venta", "E");
        }else{
            showAlert("Realizando venta...", "L");
            const fechaHora = obtenerFechaHora();
            const pago = document.querySelector('input[name="txtPagoRes"]:checked')?.value;
            try {
                await db.collection("VENTAS").add({
                    fecha: fechaHora[0],
                    mes: fechaHora[2],
                    anio: fechaHora[3],
                    hora: fechaHora[1],
                    identificacion: txtIdentificationClient.textContent,
                    nombre: txtNameClient.textContent,
                    vendedor: storedUser.nombre,
                    local: "Quito",
                    cantidad: txtAmountRes.textContent,
                    subtotal: txtSubtotalRes.textContent,
                    descuento: txtDiscountRes.textContent,
                    abono: txtAbonoRes.textContent,
                    total: txtTotalRes.textContent,
                    pago: pago,
                    comprobante: txtComprobanteVenta.value,
                    observacion: txtObservacionRes.value,
                    zdetalles: listProductsSell
                });

                if(idAbono != ''){
                    await db.collection('ABONOS').doc(idAbono.toString()).update({
                        tratado: 'X'
                    });
                }
                
                for(const p of listProductsSell){
                    const product = (await db.collection('QUITO').doc(p.cod.toString()).get()).data();
                    if(product.temporal == 'X'){
                        await eliminarDocumento('PRODUCTOS', p.cod);
                        await eliminarDocumento('CUENCA', p.cod);
                        await eliminarDocumento('QUITO', p.cod);
                        await eliminarDocumentos('HISTORIAL', p.cod);
                        await eliminarFoto(product.foto);
                    }else{
                        const act = product[`t${p.tal}`] - p.can;
                        const talla = `t${p.tal}`;
                        await db.collection('QUITO').doc(p.cod.toString()).update({
                            [talla]: act
                        });
                    }
                }
                
                imgSell.removeAttribute("src");
                txtNameSell.textContent = "";
                txtSizeSell.textContent = "";
                txtLeatherSell.textContent = "";
                txtConstructionSell.textContent = "";
                txtPriceSell.textContent = "";
                txtObservationSell.textContent = "";
                txtAmountSell.disabled = true;
                txtAmountSell.value = "";
                txtDis1Sell.textContent = "";
                txtDis2Sell.textContent = "";
                txtDis3Sell.textContent = "";
                txtTotalSell.textContent = "";
                cheDis1Sell.checked = false;
                cheDis2Sell.checked = false;
                cheDis3Sell.checked = false;
                cheshowDiscount.checked = false;
                cheDis1Sell.style.display = "none";
                cheDis2Sell.style.display = "none";
                cheDis3Sell.style.display = "none";
                txtDis1Sell.style.display = "none";
                txtDis2Sell.style.display = "none";
                txtDis3Sell.style.display = "none";
                txtDisTot.style.display = "none";
                txtDisTot.textContent = "$0";
                listProductsSell.length = 0;
                txtNameClient.textContent = "";
                txtIdentificationClient.textContent = "";
                txtAmountRes.textContent = 0;
                txtSubtotalRes.textContent = 0;
                txtDiscountRes.textContent = 0;
                txtAbonoRes.textContent = 0;
                txtTotalRes.textContent = 0;
                txtComprobanteVenta.value = '';
                modalConfirmarVenta.style.display = 'none';
                txtScanSell.focus();
                showAlert("Venta realizada con éxito", "S");
            } catch (e) {
                console.log(e.message);
                showAlert(e.message, "E");
            }
        }
    })
    btnCancelarVenta.addEventListener('click', function() {
        txtComprobanteVenta.value = '';
        modalConfirmarVenta.style.display = 'none';
    })

    //RECIBIR PRODUCTOS
    const btnReceiveProducts = document.getElementById("btnReceiveProducts");
    const divRecibir = document.getElementById("recibir");
    const tablaRecibidos = document.getElementById("listaRecibidos");
    const modalDetalleRecibidos = document.getElementById("modalDetalleRecibidos");
    const listaDetalleRecibidos = document.getElementById("listaDetalleRecibidos");
    const btnConfirmarRecibido = document.getElementById("btnConfirmarRecibido");
    const btnCancelarRecibido = document.getElementById("btnCancelarRecibido");

    btnReceiveProducts.addEventListener("click", function(){
        divStock.style.display = "none";
        divVentas.style.display = "none";
        divRecibir.style.display = "flex";
        btnVerStock.disabled = false;
        btnSell.disabled = false;
        btnReceiveProducts.disabled = true;
        txtScanSell.style.display = "none";
        divReportes.style.display = 'none';
        btnReportes.disabled = false;
        divClientes.style.display = "none";
        btnClientes.disabled = false;
        cargarEnvios();
    });

    async function cargarEnvios() {
        try{
            showAlert("Cargando datos sobre envíos pendientes...", "L");
            tablaRecibidos.innerHTML = "";
            const datos = await db.collection("ENVIOS").where("tratado", "==", "").where("destino", "==", "Quito").get();
            if(datos.empty){
                divRecibir.style.display = "none";
                showAlert("No existen envios pendientes de tratamiento", "E");
            }else{
                tablaRecibidos.innerHTML = "";
                datos.forEach((doc) => {
                    const envio = doc.data();
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${envio.origen}</td>
                        <td>${envio.fecha}</td>
                        <td>${envio.responsable}</td>
                        <td class="action-buttons-table">
                            <button class="btnTratarEnvio" data-id="${doc.id}" title="Tratar envio">
                                <i class="fa fa-chevron-right"></i>
                            </button>
                        </td>
                    `;
                    tablaRecibidos.appendChild(row);
                });
                eventosRecibir();
                showAlert("", "C");
            }
        }catch(e){
            showAlert(e, "E");
        }
    }

    function eventosRecibir() {
        document.querySelectorAll(".btnTratarEnvio").forEach(button => {
            button.addEventListener("click", function () {
                mostrarRecibidos(this.dataset.id);
                btnConfirmarRecibido.setAttribute("data-id", this.dataset.id);
            });
        });
    }

    async function mostrarRecibidos(id){
        modalDetalleRecibidos.style.display = "flex";
        try{
            let {zdetalles = {}} = (await db.collection("ENVIOS").doc(id).get()).data();
            const aux = Object.fromEntries(
                Object.entries(zdetalles)
                  .filter(([_, d]) =>
                    d.devuelto === "" &&
                    d.recibido === "" &&
                    d.reingreso === ""
                  )
            );
            zdetalles = aux;
            const len = Object.keys(zdetalles).length;
            if(len == 0){
                btnCancelarRecibido.disabled = true;
                btnConfirmarRecibido.disabled = false;
            }
            dibujarDetalleRecibidos(zdetalles, id);
        }catch(e){
            showAlert(e, "E");
        }
    }

    function dibujarDetalleRecibidos(zdetalles, id){
        listaDetalleRecibidos.innerHTML = "";
        Object.entries(zdetalles).forEach(([key, detalle]) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${detalle.nombre}</td>
                <td>${detalle.cuero}</td>
                <td>${detalle.talla}</td>
                <td>
                    <button class="btnRecibirProductoDetalle" 
                        data-id="${id}" 
                        data-index="${key}" 
                        data-cod="${detalle.cod}" 
                        data-talla="${detalle.talla}" 
                        title="Recibir producto"
                    >
                        <i class="fa fa-check"></i>
                    </button>
                </td>
                <td style="display: flex">
                    <button class="btnDevolverProductoDetalle" 
                        data-id="${id}" 
                        data-index="${key}" 
                        data-talla="${detalle.talla}" 
                        title="Devolver producto"
                    >
                        <i class="fa fa-share"></i>
                    </button>
                    <input 
                        type = "text"
                        class = "txtMotivoDevolverDetalle"
                        style = "padding: 2px; font-size: 12px; margin-left: 10px; border-radius: 0px"
                        placeholder="Escriba la razón de la devolución" 
                    />
                </td>
            `;
            listaDetalleRecibidos.appendChild(row);
        });
        eventosDetalleRecibidos();
    }

    function eventosDetalleRecibidos() {
        document.querySelectorAll(".btnRecibirProductoDetalle").forEach(button => {
            button.addEventListener("click", function () {
                showAlert("Debe dar doble clic para recibir el producto, no existe como revertir esta accion", "I");
            });

            button.addEventListener("dblclick", function () {
                showAlert("", "C");
                const id = this.dataset.id;
                const ind = this.dataset.index;
                const cod = this.dataset.cod;
                const tal = this.dataset.talla;
                actualizarStock(id, ind, cod, tal);
            });
        });

        document.querySelectorAll(".btnDevolverProductoDetalle").forEach(button => {
            button.addEventListener("click", async function () {
                const id = this.dataset.id;
                const ind = this.dataset.index;
                const tex = this.closest("td").querySelectorAll(".txtMotivoDevolverDetalle")[0].value;
                if(tex == ""){
                    showAlert("Debe ingresar un motivo para devolver el producto", "E");
                    console.log(tex);
                }else{
                    try{
                        showAlert("Devolviendo producto...", "L");
                        const dev = `zdetalles.${ind}.devuelto`;
                        const mot = `zdetalles.${ind}.motivo`;
                        await db.collection("ENVIOS").doc(id).update({
                            [dev]: "X",
                            [mot]: tex
                        });
                        mostrarRecibidos(id);
                        showAlert("", "C");
                    }catch(e){
                        console.log(e);
                        showAlert(e, "E");
                    }
                }
            });
        });
    }

    async function actualizarStock(id, ind, cod, tal){
        try{
            showAlert("Actualizando stock...", "L");
            const talla = `t${tal}`;
            const doc = await db.collection("QUITO").doc(cod).get();
            if(doc.exists){
                const pro = doc.data();
                const act = pro[talla] + 1;
                await db.collection("QUITO").doc(cod).update({
                    [talla]: act
                });
            }else{
                const pro = (await db.collection("PRODUCTOS").doc(cod).get()).data();
                await db.collection("QUITO").doc(cod).set({
                    nombre: pro.nombre,
                    cuero: pro.cuero,
                    construccion: pro.construccion,
                    precio: pro.precio,
                    descuento: pro.descuento,
                    d1: pro.d1,
                    d2: pro.d2,
                    d3:pro.d3,
                    observacion: pro.observacion,
                    foto: pro.foto,
                    t34: 0,
                    t35: 0,
                    t36: 0,
                    t37: 0,
                    t38: 0,
                    t39: 0,
                    t40: 0,
                    t41: 0,
                    t42: 0,
                    t43: 0,
                    t44: 0
                });
                await db.collection("QUITO").doc(cod).update({
                    [talla]: 1
                });
            }
            const env = `zdetalles.${ind}.recibido`;
            await db.collection("ENVIOS").doc(id).update({
                [env]: "X"
            });
            mostrarRecibidos(id);
            showAlert("", "C");
        }catch(e){
            showAlert(e, "E");
        }
    }

    btnConfirmarRecibido.addEventListener("click", async function(){
        try{
            await db.collection("ENVIOS").doc(this.dataset.id).update({
                tratado: "X"
            });
            modalDetalleRecibidos.style.display = "none";
            cargarEnvios();
        }catch(e){
            showAlert(e, "E");
        }
    });

    btnCancelarRecibido.addEventListener("click", function(){
        modalDetalleRecibidos.style.display = "none";
        listaDetalleRecibidos.innerHTML = "";
    });

    //VER STOCK ACTUAL
    const productList = document.getElementById("product-list");
    const btnVerStock = document.getElementById("btnVerStock");
    const btnStockCuenca = document.getElementById('btnStockCuenca');
    const btnStockQuito = document.getElementById('btnStockQuito');
    const btnStockAmbato = document.getElementById('btnStockAmbato');

    btnVerStock.addEventListener("click", function(){
        divVentas.style.display = "none";
        divRecibir.style.display = "none";
        divStock.style.display = "block";
        btnReceiveProducts.disabled = false;
        btnSell.disabled = false;
        btnVerStock.disabled = true;
        txtScanSell.style.display = "none";
        divReportes.style.display = 'none';
        btnReportes.disabled = false;
        divClientes.style.display = "none";
        btnClientes.disabled = false;
        loadProducts("QUITO");
    })
    function loadProducts(local) {
        productList.innerHTML = "";
        db.collection(local).onSnapshot((querySnapshot) => {
            if(querySnapshot.empty){
                showAlert('No existen datos para el local seleccionado', 'E');
            }else{
                querySnapshot.forEach((doc) => {
                    const product = doc.data();
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${product.nombre}</td>
                        <td>${product.cuero}</td>
                        <td>${product.t34}</td>
                        <td>${product.t35}</td>
                        <td>${product.t36}</td>
                        <td>${product.t37}</td>
                        <td>${product.t38}</td>
                        <td>${product.t39}</td>
                        <td>${product.t40}</td>
                        <td>${product.t41}</td>
                        <td>${product.t42}</td>
                        <td>${product.t43}</td>
                        <td>${product.t44}</td>
                        <td class="action-buttons-table">
                            <button class="view_btn" data-id="${doc.id}" title="Ver mas detalles">
                                <i class="fa-solid fa-eye"></i>
                            </button>
                        </td>
                    `;
                    productList.appendChild(row);
                });
                attachEventListeners();
            }
        });
    }
    btnStockCuenca.addEventListener("click", function(){
        btnStockCuenca.disabled = true;
        btnStockQuito.disabled = false;
        btnStockAmbato.disabled = false;
        loadProducts("CUENCA");
    })
    btnStockQuito.addEventListener("click", function(){
        btnStockQuito.disabled = true;
        btnStockCuenca.disabled = false;
        btnStockAmbato.disabled = false;
        loadProducts("QUITO");
    })
    btnStockAmbato.addEventListener("click", function(){
        btnStockAmbato.disabled = true;
        btnStockQuito.disabled = false;
        btnStockCuenca.disabled = false;
        loadProducts("PRODUCTOS");
    })
    
    const detailImage = document.getElementById("detail_image");
    const detailName = document.getElementById("detail_name");
    const detailLeather = document.getElementById("detail_leather");
    const detailConstruction = document.getElementById("detail_construction");
    const detailPrice = document.getElementById("detail_price");
    const detailDiscount = document.getElementById("detail_discount");
    const detailObservation = document.getElementById("detail_observation");
    const detailTxt34 = document.getElementById("t34");
    const detailTxt35 = document.getElementById("t35");
    const detailTxt36 = document.getElementById("t36");
    const detailTxt37 = document.getElementById("t37");
    const detailTxt38 = document.getElementById("t38");
    const detailTxt39 = document.getElementById("t39");
    const detailTxt40 = document.getElementById("t40");
    const detailTxt41 = document.getElementById("t41");
    const detailTxt42 = document.getElementById("t42");
    const detailTxt43 = document.getElementById("t43");
    const detailTxt44 = document.getElementById("t44");
    const detailModal = document.getElementById("detail_modal");
    const closeDetail = document.getElementById("close_detail");

    function attachEventListeners() {
        document.querySelectorAll(".view_btn").forEach(button => {
            button.addEventListener("click", function () {
                showProductDetails(this.dataset.id);
            });
        });
    }

    function showProductDetails(productId) {
        db.collection("QUITO").doc(productId).get().then((doc) => {
            if (doc.exists) {
                const product = doc.data();
                detailImage.src = product.foto;
                detailName.textContent = product.nombre;
                detailLeather.textContent = product.cuero;
                detailConstruction.textContent = product.construccion;
                detailPrice.textContent = product.precio;
                detailDiscount.textContent = product.descuento;
                detailDis1.textContent = product.d1 + "%";
                detailDis2.textContent = "$" + product.d2;
                detailDis3.textContent = "$" + product.d3;
                detailObservation.textContent = product.observacion;
                detailTxt34.textContent = product.t34;
                detailTxt35.textContent = product.t35;
                detailTxt36.textContent = product.t36;
                detailTxt37.textContent = product.t37;
                detailTxt38.textContent = product.t38;
                detailTxt39.textContent = product.t39;
                detailTxt40.textContent = product.t40;
                detailTxt41.textContent = product.t41;
                detailTxt42.textContent = product.t42;
                detailTxt43.textContent = product.t43;
                detailTxt44.textContent = product.t44;
                detailModal.style.display = "flex";
            }
        });
    }

    closeDetail.addEventListener("click", function() {
        detailModal.style.display = "none";
    });

    //ENVIAR PRODUCTOS
    const sendModal = document.getElementById("send_modal");
    const btnOpenSend = document.getElementById("send_product_btn");
    const btnConfirmSend = document.getElementById("confirm_send_btn");
    const btnCancelSend = document.getElementById("cancel_send_btn");
    const txtScan = document.getElementById("code_scan");
    const tableBody = document.querySelector("#listScans");
    let productSendList = {};
    const localSend = document.getElementById("localSend");

    btnOpenSend.addEventListener("click", function(){
        sendModal.style.display = "flex";
        txtScan.textContent = "";
        txtScan.focus();
    });

    txtScan.addEventListener("keydown", async function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            const code = txtScan.value.substring(0, 5);
            const size = txtScan.value.substring(5,7);

            try{
                const product = await obtenerStock("QUITO", code);
                const stock = product[`t${size}`];
                const enviar = cantidadPendienteEnviar(code, size);
                if(stock >= enviar + 1){
                    const len = Object.keys(productSendList).length;
                    productSendList[len] = {
                        cod: code,
                        nombre: product.nombre,
                        talla: size,
                        cuero: product.cuero,
                        recibido: "",
                        devuelto: "",
                        motivo: "",
                        reingreso: ""
                    };
                    refreshTable();
                    txtScan.value = "";
                    txtScan.focus();
                }else{
                    showAlert(`Stock insuficiente: ${product.nombre} ${size}`, "E");
                }
            }catch(e){
                showAlert("No se puedo escanear el producto para el envio", "E");
            }
        }
    });
    function cantidadPendienteEnviar(cod, talla) {
        let count = 0;
        for (const key in productSendList) {
            if (
                productSendList[key].cod === cod &&
                productSendList[key].talla === talla
            ) {
                count++;
            }
        }
        return count;
    }

    function refreshTable() {
        tableBody.innerHTML = "";

        Object.values(productSendList).forEach((product, index) => {
            const fila = document.createElement("tr");

            fila.innerHTML = `
                <td>${product.nombre}</td>
                <td>${product.cuero}</td>
                <td>${product.talla}</td>
                <td><button class="btnDeleteSend" data-id="${index}"><i class="fa-solid fa-trash"></i></button></td>
            `;

            tableBody.appendChild(fila);
        });

        document.querySelectorAll(".btnDeleteSend").forEach(button => {
            button.addEventListener("click", function () {
                delete productSendList[this.dataset.id];
                refreshTable();
            });
        });
    }

    btnConfirmSend.addEventListener("click", function(){
        if(localSend.value == ""){
            showAlert("Debe elegir un local para generar el envío", "E");
            return;
        };
        if(Object.keys(productSendList).length == 0){
            showAlert("Debe escanear al menos un producto", "E");
            return;
        };
        showAlert("Cargando...", "L");
        const now = new Date();
        const fechaFormateada = `${now.getDate().toString().padStart(2, '0')}-${(now.getMonth()+1).toString().padStart(2, '0')}-${now.getFullYear()}`;
        db.collection("ENVIOS").add({
            fecha: fechaFormateada,
            origen: "Quito",
            destino: localSend.value,
            responsable: storedUser.nombre,
            tratado: "",
            zdetalles: productSendList
        }).then(async () => {
            Object.values(productSendList).forEach(async (p, index) => {
                const product = (await db.collection("QUITO").doc(p.cod.toString()).get()).data();
                const act = product[`t${p.talla}`] - 1;
                const talla = `t${p.talla}`;
                await db.collection("QUITO").doc(p.cod.toString()).update({
                    [talla]: act
                });
            });
            sendModal.style.display = "none";
            txtScan.textContent = "";
            productSendList.length = {};
            tableBody.innerHTML = "";
            localSend.value = "";
            showAlert("El envió ha sido generado con éxito", "S");
            loadProducts();
        }).catch((error) => {
            showAlert(error.message, "E");
        }).finally(() => showAlert("", "C"));
    });

    btnCancelSend.addEventListener("click", function() {
        sendModal.style.display = "none";
        txtScan.textContent = "";
        productSendList.length = {};
        tableBody.innerHTML = "";
        localSend.value = "";
    });

    //REPORTES
    const btnReportes = document.getElementById('btnReportes');
    const divReportes = document.getElementById('divReportes');
    const btnVentasDiario = document.getElementById('btnVentasDiario');
    const btnVentasMensual = document.getElementById('btnVentasMensual');
    const txtFechaRep = document.getElementById('txtFechaRep');
    const btnBuscarRep = document.getElementById('btnBuscarRep');
    const divVentasDia = document.getElementById('divVentasDia');
    const etiFechaVentasDia = document.getElementById('etiFechaVentasDia');
    const tabVentasDia = document.getElementById('tabVentasDia');
    const divVentasMen = document.getElementById('divVentasMen');
    const etiFechaVentasMen = document.getElementById('etiFechaVentasMen');
    const tabVentasMen = document.getElementById('tabVentasMen');
    const tabParesTal = document.getElementById('tabParesTal');
    const tabParesCon = document.getElementById('tabParesCon');
    const divCierre = document.getElementById('divCierre');
    const divMensajeCierre = document.getElementById('divMensajeCierre');
    const etiMensajeCierre = document.getElementById('etiMensajeCierre');
    const txtDocumentoCierre = document.getElementById('txtDocumentoCierre');
    const btnCierre = document.getElementById('btnCierre');

    btnReportes.addEventListener('click', function () {
        divReportes.style.display = 'block';
        btnSell.disabled = false;
        btnVerStock.disabled = false;
        divVentas.style.display = 'none';
        divRecibir.style.display = 'none';
        divStock.style.display = 'none';
        btnReportes.disabled = true;
        txtScanSell.style.display = 'none';
        divClientes.style.display = "none";
        btnClientes.disabled = false;
    })
    btnVentasDiario.addEventListener('click', function () {
        divVentasDia.style.display = 'block';
        btnVentasMensual.disabled = false;
        divVentasMen.style.display = 'none';
        btnVentasDiario.disabled = true;
    })
    btnVentasMensual.addEventListener('click', function () {
        divVentasMen.style.display = 'block';
        btnVentasDiario.disabled = false;
        divVentasDia.style.display = 'none';
        btnVentasMensual.disabled = true;
    })
    btnBuscarRep.addEventListener('click', async function () {
        if(txtFechaRep.value == ''){
            showAlert('Debe escoger una fecha para generar el reporte', 'E');
        }else{
            try{
                showAlert('Cargando...', 'L');
                if(btnVentasDiario.disabled){
                    await reporteDiario();
                }
                if(btnVentasMensual.disabled){
                    await reporteMensual();
                }
            }catch(e){
                showAlert(e.message, 'E');
            }
        }
    })
    async function reporteDiario(){
        divCierre.style.display = 'none';
        tabVentasDia.innerHTML = '';
        const ventas = await obtenerVentas('DI', 'Quito', txtFechaRep.value);
        const abonos = await obtenerAbonos('DI', 'Quito', txtFechaRep.value);
        if(ventas == null && abonos == null){
            showAlert('No existen datos para los filtos seleccionados', 'E');
            return;
        }
        let tot = 0;
        let efe = 0;
        let tra = 0;
        let tar = 0;
        if(ventas != null){
            ventas.forEach((doc) => {
                const venta = doc.data();
                let pago;
                let abo = parseFloat(venta.abono);
                switch (venta.pago) {
                    case 'EF':
                        pago = 'Efectivo';
                        break;
                    case 'TR':
                        pago = 'Transferencia';
                        break;
                    case 'TA':
                        pago = 'Tarjeta';
                        break;
                }
                venta.zdetalles.forEach((det) => {
                    switch (venta.pago) {
                        case 'EF':
                            efe = parseFloat(efe) + parseFloat(det.tot) - abo;
                            break;
                        case 'TR':
                            tra = parseFloat(tra) + parseFloat(det.tot) - abo;
                            break;
                        case 'TA':
                            tar = parseFloat(tar) + parseFloat(det.tot) - abo;
                            break;
                    }
                    const row = document.createElement('tr');
                    tot = parseFloat(tot) + parseFloat(det.tot) - abo;
                    row.innerHTML = `
                        <td style='font-size: 14px'>${det.nom}</td>
                        <td style='font-size: 14px'>${det.cue}</td>
                        <td style='font-size: 14px'>${det.tal}</td>
                        <td style='font-size: 14px'>${det.pre}</td>
                        <td style='font-size: 14px'>${det.des}</td>
                        <td style='font-size: 14px'>${abo}</td>
                        <td style='font-size: 14px; text-align: right'>${(det.tot - abo).toFixed(2)}</td>
                        <td style='font-size: 14px'>${pago}</td>
                        <td style='font-size: 14px'>${venta.comprobante}</td>
                        <td style='font-size: 14px'>${venta.observacion}</td>
                        <td style='font-size: 14px'>${venta.hora}<span style='display:none'>${doc.id}</span></td>
                    `;
                    tabVentasDia.appendChild(row);
                    abo = 0;
                });
            });
        }
        if(abonos != null){
            abonos.forEach((doc) => {
                const abono = doc.data();
                switch (abono.pago) {
                    case 'Efectivo':
                        efe = parseFloat(efe) + parseFloat(abono.abono);
                        break;
                    case 'Transferencia':
                        tra = parseFloat(tra) + parseFloat(abono.abono);
                        break;
                    case 'Tarjeta':
                        tar = parseFloat(tar) + parseFloat(abono.abono);
                        break;
                }
                    
                const row = document.createElement('tr');
                tot = parseFloat(tot) + parseFloat(abono.abono);
                row.innerHTML = `
                    <td style='font-size: 14px'>Abono</td>
                    <td style='font-size: 14px'></td>
                    <td style='font-size: 14px'></td>
                    <td style='font-size: 14px'></td>
                    <td style='font-size: 14px'></td>
                    <td style='font-size: 14px'>${abono.abono}</td>
                    <td style='font-size: 14px; text-align: right'>${parseFloat(abono.abono).toFixed(2)}</td>
                    <td style='font-size: 14px'>${abono.pago}</td>
                    <td style='font-size: 14px'></td>
                    <td style='font-size: 14px'>${abono.nuevo == 'X' ? 'Producto nuevo' : 'Producto existente'}</td>
                    <td style='font-size: 14px'>${abono.hora}<span style='display:none'>${doc.id}</span></td>
                `;
                tabVentasDia.appendChild(row);
            });
        }

        const row = document.createElement('tr');
        row.innerHTML = `
            <td colspan='6'>Total($)</td>
            <td style = 'text-align: right'><b>${tot.toFixed(2)}</b></td>
            <td colspan='4'></td>
        `;
        tabVentasDia.appendChild(row);
        const rowEfe = document.createElement('tr');
        rowEfe.innerHTML = `
            <td colspan='6' style='font-size: 14px'>Efectivo($)</td>
            <td style='font-size: 14px; text-align: right'>${efe.toFixed(2)}</td>
            <td colspan='4'></td>
        `;
        tabVentasDia.appendChild(rowEfe);
        const rowTra = document.createElement('tr');
        rowTra.innerHTML = `
            <td colspan='6' style='font-size: 14px'>Transferencia($)</td>
            <td style='font-size: 14px; text-align: right'>${tra.toFixed(2)}</td>
            <td colspan='4'></td>
        `;
        tabVentasDia.appendChild(rowTra);
        const rowTar = document.createElement('tr');
        rowTar.innerHTML = `
            <td colspan='6' style='font-size: 14px'>Tarjeta($)</td>
            <td style='font-size: 14px; text-align: right'>${tar.toFixed(2)}</td>
            <td colspan='4'></td>
        `;
        tabVentasDia.appendChild(rowTar);
        etiFechaVentasDia.textContent = txtFechaRep.value;
        await verificarCierre();
        showAlert('', 'C');
    }
    async function reporteMensual(){
        tabVentasMen.innerHTML = '';
        const ventas = await obtenerVentas('ME', 'Quito', txtFechaRep.value);
        const abonos = await obtenerAbonos('ME', 'Quito', txtFechaRep.value);
        
        if(ventas == null && abonos == null){
            showAlert('No existen datos para los filtos seleccionados', 'E');
            return;
        }
        const tallas = {};
        let can = 0;
        let tot = 0;
        let cem = 0;
        let god = 0;
        let pre = 0;
        if(ventas != null){
            ventas.forEach((doc) => {
                const venta = doc.data();
                let abo = parseFloat(venta.abono);
                venta.zdetalles.forEach((det) => {
                    const row = document.createElement('tr');
                    tot = parseFloat(tot) + parseFloat(det.tot) - abo;
                    can++;
                    if (!tallas[det.tal]) {
                        tallas[det.tal] = {
                            cantidad: 0,
                            total: 0
                        };
                    }
                    tallas[det.tal].cantidad += 1;
                    tallas[det.tal].total += parseFloat(det.tot);
                    switch(det.con){
                        case 'Cementado':
                            cem += 1;
                            break;
                        case 'Good Year Welt':
                            god += 1;
                            break;
                        case 'Prefabricado':
                            pre += 1;
                            break;
                    }
                    row.innerHTML = `
                        <td style='font-size: 14px'>${det.nom}</td>
                        <td style='font-size: 14px'>${det.cue}</td>
                        <td style='font-size: 14px'>${det.tal}</td>
                        <td style='font-size: 14px'>${det.con}</td>
                        <td style='font-size: 14px'>${det.tot}</td>
                        <td style='font-size: 14px'>${abo}</td>
                        <td style='font-size: 14px; text-align: right''>${(det.tot - abo).toFixed(2)}</td>
                    `;
                    tabVentasMen.appendChild(row);
                    abo = 0;
                });
            });
        }
        if(abonos != null){
            abonos.forEach((doc) => {
                const abono = doc.data();
                const row = document.createElement('tr');
                tot = parseFloat(tot) + parseFloat(abono.abono);
                row.innerHTML = `
                    <td style='font-size: 14px'>Abono</td>
                    <td style='font-size: 14px'>${abono.nuevo == 'X' ? 'Producto nuevo' : 'Producto existente'}</td>
                    <td style='font-size: 14px'></td>
                    <td style='font-size: 14px'></td>
                    <td style='font-size: 14px'></td>
                    <td style='font-size: 14px'>${abono.abono}</td>
                    <td style='font-size: 14px; text-align: right''>${parseFloat(abono.abono).toFixed(2)}</td>
                `;
                tabVentasMen.appendChild(row);
            });
        }
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td colspan='6'>Total($)</td>
            <td style='text-align: right''><b>${tot.toFixed(2)}</b></td>
        `;
        tabVentasMen.appendChild(row);
        const aux = txtFechaRep.value.split('-');
        etiFechaVentasMen.textContent = aux[1] + '-' + aux[0];
        if(can > 0){
            reporteTallas(tallas, can);
            reporteConstruccion(cem, god, pre, can);
        }
        showAlert('', 'C');
    }
    function reporteTallas(tallas, can){
        tabParesTal.innerHTML = '';
        for (const tal in tallas) {
            const cantidad = tallas[tal].cantidad;
            tallas[tal].porcentaje = cantidad / can * 100 + '%';
        }
        for (const [tal, data] of Object.entries(tallas)) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td style='font-size: 14px; padding: 4px'>${tal}</td>
                <td style='font-size: 14px; padding: 4px'>${data.cantidad}</td>
                <td style='font-size: 14px; padding: 4px'>${Math.round(parseFloat(data.porcentaje))}%</td>
            `;
            tabParesTal.appendChild(row);
        }
    }
    function reporteConstruccion(cem, god, pre, can){
        tabParesCon.innerHTML = '';
        const row1 = document.createElement('tr');
        row1.innerHTML = `
            <td style='font-size: 14px; padding: 4px'>Cementado</td>
            <td style='font-size: 14px; padding: 4px'>${Math.round(cem)}</td>
            <td style='font-size: 14px; padding: 4px'>${Math.round(cem / can * 100)}%</td>
        `;
        tabParesCon.appendChild(row1);
        const row2 = document.createElement('tr');
        row2.innerHTML = `
            <td style='font-size: 14px; padding: 4px'>Good Year Welt</td>
            <td style='font-size: 14px; padding: 4px'>${Math.round(god)}</td>
            <td style='font-size: 14px; padding: 4px'>${Math.round(god / can * 100)}%</td>
        `;
        tabParesCon.appendChild(row2);
        const row3 = document.createElement('tr');
        row3.innerHTML = `
            <td style='font-size: 14px; padding: 4px'>Prefabricado</td>
            <td style='font-size: 14px; padding: 4px'>${Math.round(pre)}</td>
            <td style='font-size: 14px; padding: 4px'>${Math.round(pre / can * 100)}%</td>
        `;
        tabParesCon.appendChild(row3);
    }
    async function verificarCierre(){
        const data = await buscarCierre('Cuenca', txtFechaRep.value);
        if(data == null){
            divMensajeCierre.style.background = '#ef9a9a';
            etiMensajeCierre.textContent = 'Cierre de caja pendiente';
            txtDocumentoCierre.value = '';
            txtDocumentoCierre.disabled = false;
            txtDocumentoCierre.style.color = '#000000';
            btnCierre.disabled = false;
        }else{
            divMensajeCierre.style.background = '#5ccb5f';
            etiMensajeCierre.textContent = 'Cierre de caja realizado';
            txtDocumentoCierre.value = data.documento;
            txtDocumentoCierre.disabled = true;
            txtDocumentoCierre.style.color = '#ffffff';
            btnCierre.disabled = true;
        }
        divCierre.style.display = 'flex';
    }
    btnCierre.addEventListener("click", async function() {
        const doc = txtDocumentoCierre.value;
        try{
            showAlert('Realizando cierre...', 'L');
            const fecha = obtenerFechaHora();
            await insertarCierre(txtFechaRep.value, fecha[0], fecha[1], 'Cuenca', txtDocumentoCierre.value);
            divMensajeCierre.style.background = '#5ccb5f';
            etiMensajeCierre.textContent = 'Cierre de caja realizado';
            txtDocumentoCierre.disabled = true;
            btnCierre.disabled = true;
            showAlert('', 'C');
        }catch(e){
            showAlert(e.message, 'E');
        }
    });

    //CLIENTES 
    const btnClientes = document.getElementById('btnClientes');
    const divClientes = document.getElementById('divClientes');
    const tabClientes = document.getElementById('tabClientes');
    const divEditarCliente = document.getElementById('divEditarCliente');
    const txtIdentificacionClienteEdi = document.getElementById('txtIdentificacionClienteEdi');
    const txtNombreClienteEdi = document.getElementById('txtNombreClienteEdi');
    const txtDireccionClienteEdi = document.getElementById('txtDireccionClienteEdi');
    const txtTelefonoClienteEdi = document.getElementById('txtTelefonoClienteEdi');
    const txtEmailClienteEdi = document.getElementById('txtEmailClienteEdi');
    const btnConfirmarEditarCli = document.getElementById('btnConfirmarEditarCli');
    const btnCancelarEditarCli = document.getElementById('btnCancelarEditarCli');

    btnClientes.addEventListener('click', function() {
        divClientes.style.display = 'block';
        btnSell.disabled = false;
        btnReceiveProducts.disabled = false;
        btnVerStock.disabled = false;
        btnReportes.disabled = false;
        divVentas.style.display = 'none';
        divRecibir.style.display = 'none';
        divStock.style.display = 'none';
        divReportes.style.display = 'none';
        txtScanSell.style.display = 'none';
        btnClientes.disabled = true;
        cargarClientes();
    })
    async function cargarClientes(){
        tabClientes.innerHTML = '';
        try{
            showAlert('Cargando clientes...', 'L');
            const clientes = await obtenerDocumentos('CLIENTES');
            if(clientes == null){
                divClientes.style.display = 'none';
                showAlert('No existen clientes registrados', 'E');
            }else{
                clientes.forEach((doc) => {
                    const cliente = doc.data();
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${doc.id}</td>
                        <td>${cliente.nombre}</td>
                        <td>${cliente.direccion}</td>
                        <td>${cliente.telefono}</td>
                        <td>${cliente.correo}</td>
                        <td class='action-buttons-table'>
                        </td>
                    `;
                    const btn = document.createElement('button');
                    btn.className = 'btnEditarCliente';
                    btn.title = 'Tratar envio';
                    btn.innerHTML = `<i class='fa-solid fa-pen'></i>`;
                    btn.dataset.id = doc.id;
                    btn.dataset.cliente = JSON.stringify(cliente);
                    row.querySelector('.action-buttons-table').appendChild(btn);
                    tabClientes.appendChild(row);
                });
                eventosClientes();
                showAlert("", "C");
            }
        }catch(e){
            showAlert(e, "E");
        }
    }
    function eventosClientes() {
        document.querySelectorAll('.btnEditarCliente').forEach(button => {
            button.addEventListener('click', function () {
                const id = this.dataset.id;
                const cliente = JSON.parse(this.dataset.cliente);
                mostrarEditarClientes(id, cliente);
            });
        });
    }
    function mostrarEditarClientes(id, cliente) {
        txtIdentificacionClienteEdi.value = id;
        txtNombreClienteEdi.value = cliente.nombre;
        txtDireccionClienteEdi.value = cliente.direccion;
        txtTelefonoClienteEdi.value = cliente.telefono;
        txtEmailClienteEdi.value = cliente.correo;
        divEditarCliente.style.display = 'flex';
        btnConfirmarEditarCli.setAttribute('data-id', id);
    }
    btnConfirmarEditarCli.addEventListener('click', async function() {
        const id = this.dataset.id;
        try{
            showAlert('Editando cliente...', 'L');
            if(id == txtIdentificacionClienteEdi.value){
                await actualizarCliente(txtIdentificacionClienteEdi.value, txtNombreClienteEdi.value, txtDireccionClienteEdi.value, txtTelefonoClienteEdi.value, txtEmailClienteEdi.value);
            }else{
                await eliminarDocumento('CLIENTES', id);
                await insertarCliente(txtIdentificacionClienteEdi.value, txtNombreClienteEdi.value, txtDireccionClienteEdi.value, txtTelefonoClienteEdi.value, txtEmailClienteEdi.value);
            }
            resetearEditarClientes();
            cargarClientes();
            showAlert('', 'C');
        }catch(e){
            showAlert(e.message, 'E');
        }
    })
    btnCancelarEditarCli.addEventListener('click', function() {
        resetearEditarClientes();
    })
    function resetearEditarClientes(){
        txtIdentificacionClienteEdi.value = '';
        txtNombreClienteEdi.value = '';
        txtDireccionClienteEdi.value = '';
        txtTelefonoClienteEdi.value = '';
        txtEmailClienteEdi.value = '';
        divEditarCliente.style.display = 'none';
    }

    //LOGOUT
    const logoutBtn = document.getElementById("logout_btn");

    logoutBtn.addEventListener("click", function () {
        showConfirmationModal("¿Está seguro de que desea cerrar sesión?", function () {
            auth.signOut().then(() => {
                localStorage.removeItem("user");
                window.location.href = "../index.html";
            }).catch((e) => {
                showAlert(e,  "E");
            });
        });
    });

    //CONFIRMAR
    const confirmationModal = document.getElementById("confirmation_modal");
    const confirmAction = document.getElementById("confirm_action");
    const cancelAction = document.getElementById("cancel_action");
    const confirmationMessage = document.getElementById("confirmation-message");

    function showConfirmationModal(message, callback) {
        confirmationMessage.textContent = message;
        confirmationModal.style.display = "flex";

        confirmAction.onclick = function () {
            callback();
            confirmationModal.style.display = "none";
        };

        cancelAction.onclick = function () {
            confirmationModal.style.display = "none";
        };
    }

    //ALERTAS
    const alertMessage = document.getElementById("alert");

    function showAlert(message, type) {
        alertMessage.innerText = message;
        alertMessage.style.display = "block";
        if(type == "S"){
            alertMessage.style.background = "#5ccb5f";
            setTimeout(() => {
                alertMessage.style.display = "none";
            }, 3000);
        }else if(type == "E"){
            alertMessage.style.background = "#ef9a9a";
            setTimeout(() => {
                alertMessage.style.display = "none";
            }, 3000);
        }else if(type == "I"){
            alertMessage.style.background = "#fff9c4";
            setTimeout(() => {
                alertMessage.style.display = "none";
            }, 3000);
        }else if(type == "L"){
            alertMessage.style.background = "#e0e0e0";
        }else if(type == "C"){
            alertMessage.style.display = "none";
        }
    }
})