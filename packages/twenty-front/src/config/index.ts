// window._env_ is injected at serve time; process.env is the build-time
// fallback replaced by vite's define (and the real env under jest, which
// cannot parse import.meta). Keys stay static so define can replace them.
export const REACT_APP_SERVER_BASE_URL =
  (window._env_?.REACT_APP_SERVER_BASE_URL ??
    process.env.REACT_APP_SERVER_BASE_URL) ||
  window.location.origin;

export const REACT_APP_PRIVATE_MODE =
  (window._env_?.REACT_APP_PRIVATE_MODE ??
    process.env.REACT_APP_PRIVATE_MODE) === 'true';

export const REACT_APP_DEV_AUTO_LOGIN =
  (window._env_?.REACT_APP_DEV_AUTO_LOGIN ??
    process.env.REACT_APP_DEV_AUTO_LOGIN) === 'true';

export const REACT_APP_DEV_AUTO_LOGIN_EMAIL =
  (window._env_?.REACT_APP_DEV_AUTO_LOGIN_EMAIL ??
    process.env.REACT_APP_DEV_AUTO_LOGIN_EMAIL) ||
  '';

export const REACT_APP_DEV_AUTO_LOGIN_PASSWORD =
  (window._env_?.REACT_APP_DEV_AUTO_LOGIN_PASSWORD ??
    process.env.REACT_APP_DEV_AUTO_LOGIN_PASSWORD) ||
  '';
