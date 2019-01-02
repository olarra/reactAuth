// src/actions/AuthActions.js

import AppDispatcher from './dispatcher';
import AuthConstants from './auth.constants';

export default {

  logUserIn: (profile, token) => {
    AppDispatcher.dispatch({
      actionType: AuthConstants.LOGIN_USER,
      profile: profile,
      token: token
    });
  },

  logUserOut: () => {
    AppDispatcher.dispatch({
      actionType: AuthConstants.LOGOUT_USER
    });
  }

}
