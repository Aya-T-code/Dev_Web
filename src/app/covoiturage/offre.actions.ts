import { createAction, props } from '@ngrx/store';

import { Offre } from './models/offre';

export const appendOffre = createAction('[Offre] Append Offre', props<{ offre: Offre }>());
export const replaceOffre = createAction('[Offre] Replace Offre', props<{ offre: Offre }>());
export const deleteOffre = createAction('[Offre] Delete Offre', props<{ offreId: number }>());
export const editOffre = createAction('[Offre] Edit Offre', props<{ offreId: number }>());
export const cancelOffre = createAction('[Offre] Cancel Offre');