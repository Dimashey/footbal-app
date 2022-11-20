// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import type { ClubsId } from './Clubs';
import type { CompetitionsId } from './Competitions';

/** Represents the table public.clubs_competitions_relation */
export default interface ClubsCompetitionsRelation {
  club_id: ClubsId;

  competition_id: CompetitionsId;
}

/** Represents the initializer for the table public.clubs_competitions_relation */
export interface ClubsCompetitionsRelationInitializer {
  club_id: ClubsId;

  competition_id: CompetitionsId;
}

/** Represents the mutator for the table public.clubs_competitions_relation */
export interface ClubsCompetitionsRelationMutator {
  club_id?: ClubsId;

  competition_id?: CompetitionsId;
}
