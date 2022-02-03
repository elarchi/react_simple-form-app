const Form = () => {
  return (
    <div className="form_div">
      <h1>Create account</h1>
      <h2>Name</h2>
      <input type="text" placeholder="Petitejam Ausoussol" />
      <h2>Email</h2>
      <input type="email" placeholder="unebatterieausousol@dureacteur.fr" />
      <h2>Password</h2>
      <input type="password" placeholder="create your own password here" />
      <h2>Confirm your password</h2>
      <input classname="submit_input" type="submit" value={"Register"}></input>
    </div>
  );
};
export default Form;
