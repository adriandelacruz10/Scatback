// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCGebkFrjxii_adCtff6vqSBIZF64dZFLs",
    authDomain: "scatback-cad65.firebaseapp.com",
    projectId: "scatback-cad65",
    storageBucket: "scatback-cad65.firebasestorage.app",
    messagingSenderId: "1026969007651",
    appId: "1:1026969007651:web:4f2440746351ffe899a396"
  };

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Referencias a Firebase services
const auth = firebase.auth();
const db = firebase.firestore();

//Obtener ventas por fecha y local
async function obtenerVentas(tipo, local, fecha){
  let data;
  const aux = fecha.split('-');
  if(tipo == 'DI'){
    const fec = aux[2] + '-' + aux[1] + '-' + aux[0];
    data = await db.collection('VENTAS').where('local', '==', local).where('fecha', '==', fec).get();
  }
  if(tipo == 'ME'){
    const fec = aux[1] + '-' + aux[0];
    data = await db.collection('VENTAS').where('local', '==', local).where('mes', '==', fec).get();
  }

  if(data.empty){
      return null;
  }else{
    return data;
  }
}
//Obtener ventas por año
async function obtenerVentasAnual(fecha){
  let data;
  const aux = fecha.split('-');
  const fec = aux[0];
  data = await db.collection('VENTAS').where('anio', '==', fec).get();

  if(data.empty){
      return null;
  }else{
    return data;
  }
}
//Obtener abonos por fecha y local
async function obtenerAbonos(tipo, local, fecha){
  let data;
  const aux = fecha.split('-');
  if(tipo == 'DI'){
    const fec = aux[2] + '-' + aux[1] + '-' + aux[0];
    data = await db.collection('ABONOS').where('local', '==', local).where('fecha', '==', fec).get();
  }
  if(tipo == 'ME'){
    const fec = aux[1] + '-' + aux[0];
    data = await db.collection('ABONOS').where('local', '==', local).where('mes', '==', fec).get();
  }

  if(data.empty){
      return null;
  }else{
    return data;
  }
}

//Obtener todos los documentos de una base
async function obtenerDocumentos(base){
  const data = await db.collection(base).get();
  if(data.empty){
      return null;
  }else{
    return data;
  }
}
//Eliminar documento de la base de datos por ID
async function eliminarDocumento(base, id){
  await db.collection(base).doc(id).delete();
}
//Eliminar documentos de la base de datos por coincidencia
async function eliminarDocumentos(base, cadena){
  const querySnapshot = await db.collection(base).where("cod", "==", cadena).get();
  if (!querySnapshot.empty) {
      querySnapshot.forEach(async (doc) => {
          await db.collection(base).doc(doc.id).delete();
      });
  }
}

//Obtener abonos de productos nuevos
async function obtenerSolicitudes(){
  const data = await db.collection('ABONOS').where('tratado', '==', '').where('nuevo', '==', 'X').get();

  if(data.empty){
      return null;
  }else{
    return data;
  }
}

//Obtener el cliente segun su cedula
async function obtenerCliente(cedula){
  const data = await db.collection('CLIENTES').doc(cedula).get();
  return data.data();
}
//Insertar cliente
async function insertarCliente(ide, nom, dir, tel, ema){
  await db.collection('CLIENTES').doc(ide).set({
    nombre: nom,
    direccion: dir,
    telefono: tel,
    correo: ema
  });
}
//Actualizar cliente
async function actualizarCliente(ide, nom, dir, tel, ema){
  await db.collection('CLIENTES').doc(ide).update({
    nombre: nom,
    direccion: dir,
    telefono: tel,
    correo: ema
  });
}

//Eliminar foto del storage
async function eliminarFoto(foto){
  const storageRef = firebase.storage().refFromURL(foto);
  await storageRef.delete();
}

//Obtener el cierre
async function buscarCierre(local, fecha){
  let data;
  const aux = fecha.split('-');
  const fec = aux[2] + '-' + aux[1] + '-' + aux[0];
  data = await db.collection('CIERRES').where('local', '==', local).where('fecha', '==', fec).get();

  if(data.empty){
      return null;
  }else{
    return data.docs[0].data();
  }
}
//Insertar el cierre
async function insertarCierre(fecha, cierre, hora, local, documento){
  const aux = fecha.split('-');
  const fec = aux[2] + '-' + aux[1] + '-' + aux[0];
  await db.collection('CIERRES').add({
    fecha: fec,
    cierre: cierre,
    hora: hora,
    local: local,
    documento: documento
  });
}

//Obtener el producto de acuerdo al local y el codigo
async function obtenerStock(local, cod){
  const data = await db.collection(local).doc(cod).get();

  if(data.empty){
      return null;
  }else{
    return data.data();
  }
}
//Actualizar producto de acuerdo a su local
async function actualizarProducto(local, id, nom, cue, con, pre, obs, de1, de2, de3){
  await db.collection(local).doc(id).update({
    nombre: nom,
    cuero: cue,
    construccion: con,
    precio: pre,
    observacion: obs,
    d1: de1,
    d2: de2,
    d3: de3
  });
}
//Agregar producto
async function agregarProducto(local, cod, nom, cue, con, pre, des, de1, de2, de3, obs, tem, fot){
  await db.collection(local).doc(cod).set({
      nombre: nom,
      cuero: cue,
      construccion: con,
      precio: parseFloat(pre),
      descuento: des,
      d1: de1,
      d2: de2,
      d3: de3,
      observacion: obs,
      temporal: tem,
      foto: fot,
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
}