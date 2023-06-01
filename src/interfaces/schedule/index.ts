import { TeamInterface } from 'interfaces/team';

export interface ScheduleInterface {
  id?: string;
  event_name: string;
  event_date: Date;
  team_id: string;

  team?: TeamInterface;
  _count?: {};
}
