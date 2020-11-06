import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeros';

export const HeroScreen = ({ history }) => {

  // Extrae los parametros desde la URL
  const { heroeId } = useParams();
  const heroe = useMemo(() => getHeroById(heroeId), [heroeId]);

  if(!heroe) {
    return <Redirect to="/" />
  }

  const handleReturn = () => {
    history.length <= 2
      ? history.push('/')
      : history.goBack();
  }

  const {
    publisher,
    superhero,
    alter_ego,
    first_appearance,
    characters
  } = heroe;

  return (
    <div className="row mt-5 ">
      <div className="col-4">
        <img 
          src={`../assets/heroes/${heroeId}.jpg`}
          alt={ superhero }
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8">
        <h2> { superhero } </h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Alter ego: </b> {alter_ego} </li>
          <li className="list-group-item"> <b>Publisher: </b> {publisher}</li>
          <li className="list-group-item"> <b>Fisrt appearance: </b> {first_appearance}</li>
        </ul>

        <h5> Characters: </h5>
        <p> { characters } </p>

        <button 
          className="btn btn-success"
          onClick={ handleReturn }  
        >
          Return
        </button>
      </div>
    </div>
  );
}

