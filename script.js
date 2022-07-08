function login(){
    var name = document.getElementById('name').value;
    var pass = document.getElementById('password').value;
    if (name == '' || pass == '') {
        alert('Preencha todos os dados!')
    } else{
        window.open('https://andremoreira00.github.io/login/pag1.html')
    }
}