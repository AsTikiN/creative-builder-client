import { createListenerMiddleware } from '@reduxjs/toolkit';
import { api } from '@store/api';
import { logout } from '@store/features/auth';

export const cacheResetMiddleware = createListenerMiddleware();

cacheResetMiddleware.startListening({
  actionCreator: logout,
  effect: (_, listenerApi) => {
    listenerApi.dispatch(api.util.resetApiState());
  },
});
