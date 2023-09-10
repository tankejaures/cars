export const Toto = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      {props.leState.messageMaman !== null ? (
        <button onClick={props.response}>Réponse</button>
      ) : (
        <button disabled>Réponse</button>
      )}
      <p>{props.leState.messageToto}</p>
    </div>
  );
};
