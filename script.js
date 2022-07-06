function login(){
    var name = document.getElementById('name').value;
    var pass = document.getElementById('password').value;
    if (name == '' || pass == '') {
        alert('Preencha todos os dados!')
    } else{
        window.open('http://127.0.0.1:5500/pag1.html')
    }
}