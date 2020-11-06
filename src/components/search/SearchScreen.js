import React from 'react';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from './../../hooks/useForm';
import { heroes } from './../../data/heroes';

export const SearchScreen = () => {
  const heroesFiltered = heroes;
  const [formValues, setFormValues, reset] = useForm({
    searchText: ''
  });
  const { searchText } = formValues;

  const handleSubmit = e => {
    e.preventDefault();
    console.log("SearchScreen -> heroesFiltered", heroesFiltered)
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
                heroesFiltered.map(hero => (
                  <HeroCard key={hero.id} {...hero} />
                ))
            }
        </div>
      </div>
    </div>
  );
}
