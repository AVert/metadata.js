/**
 * ### Действия и типы действий авторизации в терминах redux
 *
 * @module actions_auth
 *
 * Created by Evgeniy Malyarov on 15.07.2017.
 */

export const TRY_LOG_IN = 'USER_TRY_LOG_IN';     // Попытка авторизации
export const LOG_IN = 'USER_LOG_IN';         // Подтверждает авторизацию
export const DEFINED = 'USER_DEFINED';        // Установить текущего пользователя (авторизация не обязательна)
export const LOG_OUT = 'USER_LOG_OUT';        // Попытка завершения синхронизации
export const LOG_ERROR = 'USER_LOG_ERROR';      // Ошибка авторизации

export const SOCIAL_TRY_LINK = 'USER_SOCIAL_TRY_LINK';    // Попытка привязать аккаунт социальной сети
export const SOCIAL_LINKED = 'USER_SOCIAL_LINKED';      // Пользователь привязан к аккаунту социальной сети
export const SOCIAL_UNLINKED = 'USER_SOCIAL_UNLINKED';    // Пользователь отвязан от аккаунта социальной сети

export function defined(name) {

  return {
    type: DEFINED,
    payload: name
  };
}

/**
 * ### Пользователь авторизован
 * @param name
 * @return {{type: string, payload: *}}
 */
export function log_in(name) {
  return {
    type: LOG_IN,
    payload: name
  };
}

export function try_log_in(adapter, name, password) {

  // Thunk middleware знает, как обращаться с функциями.
  // Он передает метод действия в качестве аргумента функции,
  // т.о, это позволяет отправить действие самостоятельно.

  return function (dispatch) {

    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch({
      type: TRY_LOG_IN,
      payload: {name: name, password: password, provider: 'local'}
    });

    // в зависимости от использования суперлогина, разные действия
    if(adapter.$p.superlogin) {
      return adapter.$p.superlogin.login({
        username: name,
        password: password
      })
        .then((session) => adapter.log_in(session.token, session.password));
    }
    else {
      return adapter.log_in(name, password);
    }

    // In a real world app, you also want to
    // catch any error in the network call.
  };
}

/**
 * Инициирует отключение пользователя
 * @param adapter
 * @return {Function}
 */
export function log_out(adapter) {

  return function (dispatch, getState) {

    const disp_log_out = () => {
      dispatch({
        type: LOG_OUT,
        payload: {name: getState().meta.user.name}
      });
    };

    // в зависимости от использования суперлогина, разные действия
    if(!adapter) {
      disp_log_out();

    }
    else if(adapter.$p.superlogin) {
      adapter.$p.superlogin.logOut()
        .then(disp_log_out);

    }
    else {
      adapter.log_out();
    }
  };
}

export function log_error() {
  return {
    type: LOG_ERROR
  };
}
