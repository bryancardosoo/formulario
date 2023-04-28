function Verifica(){
    let user = document.getElementById('username').value
    let lastname = document.getElementById('lastname').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let Confirmpassword = document.getElementById('Confirmpassword').value

    if(!user || !senha ){
        alert("Campos de preenchimento obrigátorio.")
    } else {
        alert("Campos preenchidos com sucesso")
    }
}