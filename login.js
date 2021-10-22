'use strict'


const getLocalStorage = () => JSON.parse(localStorage.getItem("db_usuario")) ?? [];
const setLocalStorage = (dbUsuario) => localStorage.setItem("db_usuario", JSON.stringify(dbUsuario));

//#region Crud
const readUsuario = () => getLocalStorage();


const deleteUsuario = (index) => {
    const dbUsuario = readUsuario();
    dbUsuario.splice(index, 1);
    setLocalStorage(dbUsuario);
}

const updateUsuario = (index, usuario) => {
    const dbUsuario = readUsuario();
    dbUsuario[index] = usuario;
    setLocalStorage(dbUsuario);
}

const createUsuario = (usuario) => {
    const dbUsuario = getLocalStorage();
    dbUsuario.push(usuario);
    setLocalStorage(dbUsuario);
}
//#endregion

//#region  Funçoes Globais
function usuarioExiste(usuario) {
    
    const usuariosLista = readUsuario()
    
    for (var i = 0; i < usuariosLista.length; i++) {
        if (usuario == usuariosLista[i].usuario) {
            return true
        } 
    }
        return false
        
    
}
//#endregion

const saveUser = async() => {

    const usuario = {
        usuario: document.getElementById("usuario").value,
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value,
    }


    if(usuario.usuario == "" || usuario.email == "" || usuario.senha == ""){
        alert("Informaçoes inseridas invalidas")
        return 'erro'
    } else if (usuarioExiste(usuario.usuario) == true){
        alert("Usuario ja cadastrado")
        return 'erro'
    }
    else{
        createUsuario(usuario)
    }

   
}

const Login = () => {


    const login = document.getElementById("usuarioL").value
    const senha = document.getElementById("senhaL").value

    const usuario = usuarioExiste(login);

    
    if (usuario == false || usuario.senha != senha){
        return alert("error")
    }

    if(usuario.senha == senha && usuario.usuario == login){
        alert("Logado")
    } 

}

const deleteUsuarioEspecifico = () => {

    const usuario = document.getElementById("usuarioL").value
    const usuariosLista = readUsuario()

    

    if(usuario.usuario == ""){
        alert("Informaçoes inseridas invalidas")
        return 'erro'
    } else if (usuarioExiste(usuario) == false ){
        alert("Nao existe usuario com esse nome")
        return 'erro'
    } else if(usuarioExiste(usuario) == undefined){
        alert("Nao existe usuarios")
        return 'erro'
    }

    for (var i = 0; i < usuariosLista.length; i++) {
        if (usuario == usuariosLista[i].usuario) {
            deleteUsuario(i)
        }
    }
}

const createRow = (usuario , index) => {

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${usuario.nome}</td>
        <td>${usuario.senha}</td>
        <td>${usuario.email}</td>
        <td>
            <button type="button" class="button green" data-action = "edit-${index}">editar</button>
            <button type="button" class="button red" data-action = "delete-${index}">excluir</button>
        </td>    
    `
    document.querySelector("#tableClient>tbody").appendChild(newRow);
    
}