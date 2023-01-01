/**
 * -Problème : Comment tester un composant Réact ?
 *
 * - La solution le plus utilisée → Monter le composant, ensuite le démonter.
 *
 *
 * La documentation officielle de react nous parle sur cette methode :
 *
 * - Pour tester ce composant :
 *  → 1 Monter le composant
 *  → 2 Faire le test
 *
 *  → 3 Et lorsque le test se termine, nous voulons « nettoyer » et démonter l’arbre présent dans le document
 *
 * ****************************************************************
 *  import { unmountComponentAtNode } from "react-dom";
 *
 * let container = null;
 * beforeEach(() => {
 *   // met en place un élément DOM comme cible de rendu
 *   conteneur = document.createElement("div");
 *   document.body.appendChild(container);
 * });
 *
 * afterEach(() => {
 *   // nettoie en sortie de test
 *   unmountComponentAtNode(container);
 *   container.remove();
 *   container = null;
 * });
 *
 * *******************************************************************
 * En plus de librairie de dev, rect test nécessite React et React Dom
 *
 */


import ReactComponents from "../src/ReactComponents";
import {act} from "react-dom/test-utils";
import chai from "chai";

const expect = chai.expect;
import sinon from "sinon";
import sinonChai from "sinon-chai"

chai.use(sinonChai);


let rootContainer // pécision de nom de conteneur


describe('Voir s \' il y a un button et le boutton est effiché', function () {

    // Monter un div avent le test
    beforeEach(() => {
        rootContainer = document.createElement("div");
        document.body.appendChild(rootContainer);

    });


    // Si le test est fini, alors on démonte et rendre le memoire vide
    afterEach(() => {
        document.body.removeChild(rootContainer);
        rootContainer = null;
    });

    it('Verifie s\'il y a un titre dans le composant', function () {

        // rendre le composant de la rootcontainer
        act(() => ReactDOM.render(<ReactComponents/>, rootContainer))

        // selectionner le titre de dans le conteneur
        const titles = rootContainer.getElementById("title");

        // Voir si le titre est OK
        expect(titles).to.eq("Connexion")

        // Ireo no fondamenal, ankoatranzay dia manao simulation sisa

    });
});