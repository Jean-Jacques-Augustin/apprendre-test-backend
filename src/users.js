const axios = require('axios');

/**
 * Ici, on va creer un petit objet qui va nous permettre de faire des requetes dans l'api de github
 * pour recuperer des informations sur un utilisateur
 * Cette va nous permettre de faire des tests unitaires sur de classe et l'introdiction au test avec 
 * wait et une promesse en JavaScript
 * 
 * Notez bien que le code javascript est ecrit en ES6
 * Et que tout les code en javascript est eligible en typescript
 * On fait ce fichier en js pour que vous puissiez le tester avec node
 * sans le casser la tete avec des reglage de typescript
 * 
 */


class User {
    constructor(userName, viewRepos = false) {
        this.userName = userName;
        this.canViewRepos = viewRepos;
    }

    getUserId() {
       return axios.get(`https://api.github.com/users/${this.userName}`)
        .then(response => response.data.id);
    }

    getUserRepo(repoIndex) {
        if (this.canViewRepos) {
            return axios.get(`https://api.github.com/users/${this.userName}/repos`)
                .then(response => response.data[repoIndex])
        }

        return Promise.reject('Cannot view repos');
    }

}

module.exports = {
    User,
};
