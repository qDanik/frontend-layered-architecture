import { SettingsStore } from 'core/store/settings-store';
import { UserStore } from 'core/store/user-store';

export enum DataStatus {
  NotRequested = 'NotRequested',
  Loading = 'Loading',
  Error = 'Error',
  Received = 'Received',
}

export interface MobxStore {
  user: UserStore;
  settingsStore: SettingsStore;
}
