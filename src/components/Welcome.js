const Welcome = () => {
  const bonjour = () => console.log("Bonjour");
  const bonjourArg = (value) => console.log(value);

  return (
    <div>
      <button onClick={bonjour}>Invoquer une fontion</button>
      <button onClick={()=>bonjourArg("Bonsoir")}>
        Invoquer une fontion ave arg "Bonsoir"
      </button>
      <button onClick={() => console.log("Bonne Nuit")}>
        CLog sur le bouton
      </button>
    </div>
  );
};

export default Welcome;
