import React, { useMemo } from 'react';
import { getHerosByPublisher } from './../../selectors/getHeros';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {
  // const heroes = getHerosByPublisher(publisher);
  const heroes = useMemo(() => getHerosByPublisher(publisher), [ publisher ]);
  return (
    <div className="card-columns">
      {
        heroes.map(heroe => (
          <HeroCard key={heroe.id} {...heroe}/>
        ))
      }
    </div>
  );
}
