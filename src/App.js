import "./App.css";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  /* 
  ===> création de différents 'états' et initialisation de ceux-ci 
  ===> aka. initialisation des valeurs entrées dans les différents champs du formulaire 
  ===> les champs du formulaire sont des chaines de caractères vides.   */

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState(1);

  return (
    // ===> A partir d'ici, nous devons utiliser seulement du JSX

    <div className="App">
      <main>
        <Form
          // ===> passons des props à l'enfant de App, soit le composant Form

          // ===> premièrement passons en props les différents états initialisés
          nom={username}
          mail={email}
          mdp={password}
          confirmationmdp={confirmpassword}
          // ===> puis passons en props les différents appel de fonction
          setNom={setUsername}
          setMail={setEmail}
          setMdp={setPassword}
          setConfirmationMdp={setConfirmPassword}
          setEtape={setStep}
        />
      </main>

      <footer>
        <p>
          Made with <span>React</span> at{" "}
          <a href="https://www.lereacteur.io/">Le Réacteur </a>
          by
          <span> Emilie Leury</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
