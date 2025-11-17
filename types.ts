export type LawHistoryEventType = 'publication' | 'modification' | 'challenge' | 'end_of_life' | 'landmark';

export interface LawHistoryEvent {
  date: string;
  event: string;
  description: string;
  type?: LawHistoryEventType;
}

export type LawStatus = 'vigente' | 'modificada' | 'demandada' | 'derogada';

export interface Law {
  id: number | string;
  title: string;
  description: string; // Short description for cards
  summary: string; // Detailed summary for detail view
  authority: string; // Authority that issued the norm
  purpose: string; // Main purpose of the norm
  status: LawStatus;
  history: LawHistoryEvent[];
  modifiedBy?: string; // Optional: Link to the law that modified this one
}