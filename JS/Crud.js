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

        if(usuario.nome == "" || usuario.email == ""  || usuario.senha == "" ){
            return Swal.fire({
                title: 'Erro!',
                text: 'Os dados inseridos sao invalidos',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
        }
        const testeUsuario = usuarioExiste(usuario.nome)
        if(testeUsuario != false){
            return Swal.fire({
                title: 'Erro!',
                text: 'Usuário já existente',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
        }
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
             
            <span class="material-icons" data-toggle="modal" data-target="#modalEdit" >edit</span>
            <button type="button" class="button red" data-action = "delete-${index}"><span class="material-icons">delete</span></button>
            
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
                console.log("entrou na function")
                /* const responses = confirm(`Deseja realmente excluir o Usuarioe: ${usuario.nome}`) */
                Swal.fire({
                    title: 'Você tem certaza que quer deletar ' + usuario.nome,
                    text: "Isso não pode ser revertido",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    cancelButtonText: 'Cancelar',
                    confirmButtonText: 'Confirmar'
                  }).then((result) => {
                    if (result.isConfirmed) {
                        console.log("entrou no confirm")
                        deleteUsuario(index);
                        console.log("deletou")
                        updateTable();
                        console.log("deu update")
                        const testeLogin = EstaLogado(usuario.nome)
                        console.log(testeLogin)
                        if(testeLogin == false){
                            logOffCrud()
                            Swal.fire(
                                usuario.nome + ' foi deletado com sucesso',
                              )
                        }
                        
                          if(testeLogin == true){
                            logOffCrud()
                            window.location.assign('index.html');
                        }
                      
                    }
                  })
                }
            }
        }
            
    

    
    




//Event


document.querySelector("#tableUsuario> tbody")
    .addEventListener("click", editDelete);

    updateTable();
    
    