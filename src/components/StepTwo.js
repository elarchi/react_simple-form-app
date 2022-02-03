const StepTwo = ({ nom, mail, mdp, setEtape }) => {
  return (
    <div>
      <h1>Results</h1>

      <div className="result_div">
        <p>Name : {nom}</p>
        <p>Email : {mail}</p>
        <p>Password-super-secret : {mdp}</p>
      </div>

      <button
        onClick={() => {
          setEtape(0);
        }}
      >
        Edit your informations
      </button>
    </div>
  );
};

export default StepTwo;
