let usuario="admin"
let contraseña=123

if (usuario==="admin") {
    if (contraseña===123) {
        console.log("ACCESO PERMITIDO")
    } else {
        console.log("CONTRASEÑA INCORRECTA")
    }
} else {
    console.log("USUARIO NO ENCONTRADO")
}