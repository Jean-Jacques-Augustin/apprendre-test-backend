export default function ReactComponents() {
    return (
        <div>
            <h5 id={"title"}>Connexion</h5>
            <div>
                <input className={"username"} type="mail" id={"username"} placeholder={"Adresse e-mail"}/>
                <input className={"password"} type="text" id={"mot_de_passe"} placeholder={"Mot de passe"}/>
            </div>
            <div>
                <button className={"se_connecter"} type="submit" id={"se_connect_btn"}>
                    Se connecter
                </button>
            </div>
        </div>
    )
}