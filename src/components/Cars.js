import { Wrapper } from "./Wrapper";

const Car = ({ name, color, year }) => {
  return (
    <Wrapper>
      {name ? (
        <div>
          <p>Marque : {name} </p>
          <p>Âge : {year} </p>
          {color ? <p>Couleur: {color}</p> : <p>Couleur : Néant</p>}
        </div>
      ) : (
        <div>
          <p>Pas de data !</p>
        </div>
      )}
    </Wrapper>
  );
};

export default Car;
