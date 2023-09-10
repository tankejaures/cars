import { Wrapper } from "./Wrapper";

const Car = ({ children, color }) => {
  return (
    <Wrapper>
      {children ? (
        <div>
          <p>Marque : {children} </p>
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
