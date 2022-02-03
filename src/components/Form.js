// ===> ici les props reçues par Form sont en destructuring
const Form = ({
  nom,
  mail,
  mdp,
  confirmationMdp,
  setNom,
  setMail,
  setMdp,
  setConfirmationMdp,
  setEtape,
}) => {
  // ===>créons ensuite la fonction permettant d'envoyer les données entrées dans les différents champs du formulaire (aka. ce qui se passe lors du 'submit'  */

  const handleSubmit = (event) => {
    // empêcher le rafraîchissement par défaut de la page
    event.preventDefault();
    // faire une requête pour envoyer les données du formulaire au serveur...

    // ===> vérifions dans notre console que les informations entrées par l'utilisateur sont bien reçues
    console.log("nom===> ", nom);
    console.log("mail ===>", mail);
    console.log("mdp ===>", mdp);
    console.log("confirmationMdp ===> ", confirmationMdp);

    if (mdp !== confirmationMdp) {
      // alert("Vous n'avez pas entré le même mot de passe");

      <p className="red_p">Les mots de passes ne sont pas identiques</p>;
    } else {
      setEtape(2);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form_div">
      <div className="title_div">
        <h1 className="title_h1">Create account</h1>
      </div>
      <div className="fields_div">
        <h2 className="title_h2">Name</h2>
        <input
          value={nom}
          type="text"
          placeholder="Mme Drums"
          // la fonction de onChange sera déclencée à chaque modification dans l'input
          onChange={(event) => {
            // console.log(event.target.value);
            setNom(event.target.value);
          }}
        />
        <h2>Email</h2>
        <input
          value={mail}
          type="email"
          placeholder="unebatterieausousol@dureacteur.fr"
          onChange={(event) => {
            // console.log(event.target.value);
            setMail(event.target.value);
          }}
        />

        {/* {mdp !== confirmationMdp && h1 } ; */}

        <h2>Password</h2>
        <input
          className={mdp !== confirmationMdp && "red_button"}
          value={mdp}
          type="password"
          placeholder="create your own password here"
          onChange={(event) => {
            // console.log(event.target.value);
            setMdp(event.target.value);
          }}
        />

        <h2>Confirm your password</h2>

        <input
          className={mdp !== confirmationMdp && "red_button"}
          value={confirmationMdp}
          type="password"
          placeholder="confirm your password"
          onChange={(event) => {
            // console.log(event.target.value);
            setConfirmationMdp(event.target.value);
          }}
        />
        {/* {mdp !== confirmationMdp && (
          <p className="red_p">Les mots de passes ne sont pas identiques</p>
        )} */}
      </div>

      <button type="submit">Register</button>
    </form>
  );
};
export default Form;
