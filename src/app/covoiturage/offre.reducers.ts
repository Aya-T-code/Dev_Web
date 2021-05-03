import {
    appendOffre, replaceOffre, deleteOffre,
    editOffre, cancelOffre,
  } from './offre.actions';
  
  import { createReducer, on } from '@ngrx/store';
  
  import { Offre } from './models/offre';
  
  const initialOffres: Offre[] = [
    { id: 1, proposePar: 'Mohamed', v_Depart: 'Alger', v_Arrivee: 'Boumerdes', date: '2021-12-22' },
    { id: 2, proposePar: 'Amina', v_Depart: 'Oran', v_Arrivee: 'Chlef', date: '2021-10-01' },
  ];
  
  export const offresReducer = createReducer<Offre[]>(initialOffres,
    on(appendOffre, (state, action) => state.concat({
      ...action.offre,
      id: Math.max(...state.map(c => c.id), 0) + 1,
    })),
    on(replaceOffre, (state, action) => {
      const newOffres = state.concat();
      newOffres[newOffres.findIndex(o => o.id === action.offre.id)] = action.offre;
      return newOffres;
    }),
    on(deleteOffre, (state, action) => state.filter(
      o => o.id !== action.offreId)),
  );
  
  export const editOffreIdReducer = createReducer<number>(-1,
      on(editOffre, (_, action) => action.offreId),
      on(replaceOffre, () => -1),
      on(deleteOffre, () => -1),
      on(cancelOffre, () => -1),
    );
  