import { ContainerModule } from 'inversify';

import {
  AxiosAdapter,
  BrowserCookieAdapter,
  I18nextAdapter,
  LocalStorageAdapter,
  ReactHookFormAdapter,
  SessionStorageAdapter,
  WebLoggerAdapter,
} from 'core/adapters';
import { FormType } from 'core/form';
import { HttpClientType } from 'core/http';
import { I18nType } from 'core/i18n';
import { LoggerType } from 'core/logger';
import { MobxStoreImpl, MobxStoreType } from 'core/mobx-store';
import { CookieStorageName, LocalStorageName, SessionStorageName, StorageType } from 'core/storage';

export const coreModules = new ContainerModule(bind => {
  bind(LoggerType).to(WebLoggerAdapter);
  bind(MobxStoreType).to(MobxStoreImpl).inSingletonScope();
  bind(StorageType).to(BrowserCookieAdapter).whenTargetNamed(CookieStorageName);
  bind(StorageType).to(LocalStorageAdapter).whenTargetNamed(LocalStorageName);
  bind(StorageType).to(SessionStorageAdapter).whenTargetNamed(SessionStorageName);
  bind(HttpClientType).to(AxiosAdapter);
  bind(FormType).to(ReactHookFormAdapter);
  bind(I18nType).to(I18nextAdapter).inSingletonScope();
});
