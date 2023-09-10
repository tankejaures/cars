const Car = ({ name, color, year }) => {
  return (
    <>
      {name ? (
        <tr>
          <td>{name} </td>
          <td>{year} </td>
          <td>{color ?? 'Néant'}</td> 
        </tr>
      ) : (
        <tr>
          <td colSpan="3">Pas de data !</td>
        </tr>
      )}
    </>
  );
};

export default Car;
