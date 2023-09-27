// API à utiliser pour le travail: https://randomuser.me/api/?results=5



    fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(data => {
    
      let output = '<h2>Fiches des utilisatrices et utilisateurs</h2>';
      
      data.results.forEach(user => {
        output += '<img src="' + user.picture.large + '" alt="Image de l\'utilisateur">';
        output += '<p>Nom: ' + user.name.first + ' ' + user.name.last + '</p>';
        output += '<p>E-mail: ' + user.email + '</p>';
      });
      document.getElementById('container').innerHTML = output;
    })
    .catch(error => console.log(error));
    
