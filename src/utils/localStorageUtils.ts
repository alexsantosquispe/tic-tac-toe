import type { MatchType } from '../models/types';
import { TIC_TAC_TOE_MATCHES } from './constants';

export const getMatches = (): MatchType[] => {
  const data = localStorage.getItem(TIC_TAC_TOE_MATCHES);

  return data ? JSON.parse(data) : [];
};

export const saveMatch = (match: MatchType) => {
  const matches = getMatches();
  matches.push(match);

  localStorage.setItem(TIC_TAC_TOE_MATCHES, JSON.stringify(matches));
};

export const clearMatches = () => {
  localStorage.removeItem(TIC_TAC_TOE_MATCHES);
};
