document.addEventListener('DOMContentLoaded',function(){
    const avatar = document.getElementById('avatar');
    const name = document.getElementById('nome');
    const username = document.getElementById('username');
    const repositorio = document.getElementById('repositorios');
    const seguidores = document.getElementById('seguidores');
    const seguindo = document.getElementById('seguindo');
    const link = document.getElementById('link');

    const endPoint = 'https://api.github.com/users/AlvesThiago';

    fetch(endPoint).then(function(res){
        return res.json();
    })
    .then(function(json){
        avatar.src = json.avatar_url;
        name.innerText = json.name;
        username.innerText = json.login;
        repositorio.innerText = json.public_repos;
        seguidores.innerText = json.followers;
        seguindo.innerText = json.following;
        link.href = json.html_url;
    })
    .catch(function(error) {
        console.log('Ocorreu um erro:', error);
    });
})
