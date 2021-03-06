
import { heroes } from '../data/heroes';

export const getHerosByPublisher = ( publisher ) => {
  const validPublishers = ['DC Comics', 'Marvel Comics'];

  if(!validPublishers.includes(publisher)) {
    throw new Error(`Publisher "${ publisher }" no es valido.`);
  }

  return heroes.filter(hero => hero.publisher === publisher);
}

export const getHeroById = (heroId) => {
  return heroes.find(hero => hero.id === heroId);
}

export const getHerosBySuperHero = superhero => {
  if (superhero === '') return [];
  superhero = superhero.toUpperCase();
  return heroes.filter(hero => hero.superhero.toUpperCase().includes(superhero));
}