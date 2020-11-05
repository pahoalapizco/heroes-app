import React from 'react';
import { getHerosByPublisher } from './../../selectors/getHeros';

export const HeroList = ({ publisher }) => {
  const heroes = getHerosByPublisher(publisher);
  
  return (
    <ul>
      {
        heroes.map(hero => (
          <li key={hero.id}>
            { hero.superhero }
          </li>
        ))
      }
    </ul>
  );
}
