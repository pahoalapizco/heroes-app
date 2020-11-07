import React, { useMemo } from 'react';
import queryString from 'query-string';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from './../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHerosBySuperHero } from './../../selectors/getHeros';

export const SearchScreen = ({ history }) => {
  const location = useLocation();  
  // q = Query o bien el nombdre el super heroe que estamos buscando.
  const { q } = queryString.parse(location.search);
  
  const superHeroQuery = !q ? '' : q;

  const [formValues, setFormValues] = useForm({
    searchText: superHeroQuery
  });
  const { searchText } = formValues;
  
  // Recuerda el valor de q, para que la función no se este disparando 
  // cuando cambia el Input
  const heroesFiltered = useMemo(() =>  getHerosBySuperHero(superHeroQuery), [superHeroQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
  }
  return (
    <div>
      <h1> SearchScreen </h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4> Busqueda </h4>

          <form onSubmit={ handleSubmit }>
            <input 
              type="text"
              name="searchText"
              placeholder="Encuentra a tu heroe"
              className="form-control"
              value={ searchText }
              onChange={ setFormValues }
            />
            <button 
              type="submit"
              className="btn btn-outline-success btn-block m-1"
            >
              Buscar
            </button>
          </form>
        </div>

        <div className="col-7">
            <h4> Resultados </h4>
            <hr />

            {
              (superHeroQuery === '')
                && <div className="alert alert-info">
                    Busca a un super heroe...!
                  </div>
            }

            {
              (superHeroQuery !== '' && heroesFiltered.length  === 0)
                && <div className="alert alert-warning">
                    Lo sentimos, no encontramos a { superHeroQuery } :(
                  </div>
            }

            {
                heroesFiltered.map(hero => (
                  <HeroCard key={hero.id} {...hero} />
                ))
            }
        </div>
      </div>
    </div>
  );
}
