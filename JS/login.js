'use strict'


const getLoginLocalStorage = () => JSON.parse(localStorage.getItem("db_login")) ?? [];
const setLoginLocalStorage = (login) => localStorage.setItem("db_login", JSON.stringify(login));

//#region Crud
const readLoginUsuario = () => getLoginLocalStorage();

const updateLogin = (usuario) => {
    const dbLogin = readLoginUsuario();
    
    dbLogin[0] = usuario;
    
    setLoginLocalStorage(dbLogin)
    
}


const deleteLogin = () => {
    const dbLogin = readLoginUsuario();
    dbLogin.splice(0, 1);
    setLoginLocalStorage(dbLogin);
    console.log(dbLogin.length)
}


//#endregion

//#region  Funçoes Globais
function usuarioExiste(usuario) {
    
    const usuariosLista = readUsuario()
    console.log(usuario)
    console.log(usuariosLista)
    for (var i = 0; i < usuariosLista.length; i++) {
        console.log("for")
        
        if (usuario == usuariosLista[i].nome) {
            console.log("entrou no if")
            return usuariosLista[i]
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
       
        return Swal.fire({
            title: 'Erro!',
            text: 'Usuário ou Senha Inválida',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
    }

    
    if(usuario.senha == senha && usuario.nome == login){
        updateLogin(usuario)
        

        document.location.reload(true)
    } 

}

const LoginExiste = () =>{

    const logado = readLoginUsuario()
    const botao = document.getElementById('login');
    const Crud = document.getElementById('paginas');

    if(logado.length == 1){

        botao.innerHTML = `
        
		<a class="clickable"> ${logado[0].nome} / <a class="clickable" onclick = logOff()> Sair </a>
    
    `

        Crud.innerHTML = `

        <ul>
			<li><a href="desenvolvedoras.html">Desenvolvedoras</a></li>
			<li><a href="review.html">Top Jogos</a></li>
			<li><a href="plataforms.html">Plataformas</a></li>
			<li><a href="CrudLogin.html">Crud Usuarios</a></li>
		</ul>
        
        `
    }else{
        

        botao.innerHTML = `
        
		<a data-toggle="modal"data-target="#modalLogin" class="clickable">Entre</a>
    
        `

        Crud.innerHTML = `

        <ul>
			<li><a href="desenvolvedoras.html">Desenvolvedoras</a></li>
			<li><a href="review.html">Top Jogos</a></li>
			<li><a href="plataforms.html">Plataformas</a></li>
			
		</ul>
        
        `
        
    }
    
    
}

const logOff = () =>
{
   deleteLogin()
   LoginExiste()
   document.location.reload(true)
   
}

LoginExiste()