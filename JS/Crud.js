'use strict'


const getLocalStorage = () => JSON.parse(localStorage.getItem("db_usuario")) ?? [];
const setLocalStorage = (dbUsuario) => localStorage.setItem("db_usuario", JSON.stringify(dbUsuario));

//Crud - Create Read Update Delete

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

const readUsuario = () => getLocalStorage();

const createUsuario = (usuario) => {
    const dbUsuario = getLocalStorage();
    dbUsuario.push(usuario);
    setLocalStorage(dbUsuario);
}

const isValidFields = () => {
    return document.getElementById("form").reportValidity();
}

//interaçao com layout

const clearFields = () => {
    const fields = document.querySelectorAll(".modal-field");
    fields.forEach(field => field.value = "");
}

const saveUsuario = () => {
    

        const usuario = {
            nome: document.getElementById("nome").value,
            email: document.getElementById("email").value,
            senha: document.getElementById("senha").value,
            
        }
        console.log(usuario)

        const index = document.getElementById("nome").dataset.index
        console.log(index)
    
            createUsuario(usuario)
            updateTable();
            clearFields();
        
    }



const createRow = (usuario , index) => {

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${usuario.nome}</td>
        <td>${usuario.senha}</td>
        <td>${usuario.email}</td>
        
        <td>
            <button type="button" class="button green" data-toggle="modal" data-target="#modalEdit" >editar</button>
            <button type="button" class="button red" data-action = "delete-${index}">excluir</button>
        </td>    
    `
    document.querySelector("#tableUsuario>tbody").appendChild(newRow);
    
}

const clearTable = () => {
    const rows = document.querySelectorAll("#tableUsuario> tbody tr");
    rows.forEach(row => row.parentNode.removeChild(row));
}


const updateTable = () => {
    
    const dbUsuario = readUsuario();


    clearTable()
    dbUsuario.forEach(createRow);

    

}

const fillFields = (usuario) => {
    document.getElementById("nome").value = usuario.nome;
    document.getElementById("senha").value = usuario.senha;
    document.getElementById("email").value = usuario.email;
    document.getElementById("nome").dataset.index = usuario.index;
    
}


const editUsuario = () => {
    
    
    const usuario = readUsuario()[index];
    usuario.index = index;
    fillFields(usuario);
    openModal();
}

const indiceUser = (usuario) => {

const dbUsuario = readUsuario()
    
    for(let i = 0; i< dbUsuario.length; i++){
        if (usuario == dbUsuario[i].usuario) {
            return i
        } 
    }
        return false
    }


const editDelete = (event) => {
    if (event.target.type == "button") {
        
            const [action , index] = event.target.dataset.action.split("-");
            
            if(action == "edit") {
                editUsuario(index);
            } else {
                const usuario = readUsuario()[index];
                const response = confirm(`Deseja realmente excluir o Usuarioe: ${usuario.nome}`)
                if (response){
                deleteUsuario(index);
                updateTable();
                }
            }
        }
            
    }

    
    




//Event


document.querySelector("#tableUsuario> tbody")
    .addEventListener("click", editDelete);

    updateTable();