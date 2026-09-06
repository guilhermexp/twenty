const getRuntimeEnv = (key: string) =>
  window._env_?.[key] ?? import.meta.env[key];

export const REACT_APP_SERVER_BASE_URL =
  getRuntimeEnv('REACT_APP_SERVER_BASE_URL') || window.location.origin;

export const REACT_APP_PRIVATE_MODE =
  getRuntimeEnv('REACT_APP_PRIVATE_MODE') === 'true';

export const REACT_APP_DEV_AUTO_LOGIN =
  getRuntimeEnv('REACT_APP_DEV_AUTO_LOGIN') === 'true';

export const REACT_APP_DEV_AUTO_LOGIN_EMAIL =
  getRuntimeEnv('REACT_APP_DEV_AUTO_LOGIN_EMAIL') || '';

export const REACT_APP_DEV_AUTO_LOGIN_PASSWORD =
  getRuntimeEnv('REACT_APP_DEV_AUTO_LOGIN_PASSWORD') || '';
