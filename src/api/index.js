import fetch from 'isomorphic-fetch';
import Cookies from 'js-cookie';

export const HOST_API = process.env.NODE_ENV === 'production' ? './' : 'api/';

function genertor(response) {
  return response
    .then(res => {
      if ((res.status >= 200 && res.status < 300) || res.status === 400) {
        return res.json ? res.json() : res.bob();
      }
      return { ecode: 1, data: {}, message: '数据异常' };
    })
    .then(res => {
      if (res.ecode === 4) {
        Cookies.remove('SystemToken');
        window.location.href = './#/auth';
        return res;
      }
      return res;
    })
    .catch(() => {
      return { ecode: 1, data: {}, message: '数据异常' };
    });
}

export async function Get(url, option = {}) {
  return genertor(
    fetch(
      HOST_API + url,
      Object.assign(option, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-type': 'application/json',
          token: Cookies.get('SystemToken'),
        },
      }),
    ),
  );
}

export async function Post(url, option = {}) {
  return genertor(
    fetch(HOST_API + url, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
        token: Cookies.get('SystemToken'),
      },
      body: JSON.stringify(option),
    }),
  );
}
export async function Delete(url, option = {}) {
  return genertor(
    fetch(HOST_API + url, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
        token: Cookies.get('SystemToken'),
      },
      body: JSON.stringify(option),
    }),
  );
}
export async function Put(url, option = {}) {
  return genertor(
    fetch(HOST_API + url, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
        token: Cookies.get('SystemToken'),
      },
      body: JSON.stringify(option),
    }),
  );
}
export async function Patch(url, option = {}) {
  return genertor(
    fetch(HOST_API + url, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
        token: Cookies.get('SystemToken'),
      },
      body: JSON.stringify(option),
    }),
  );
}
export default {
  Get,
  Patch,
  Post,
  Put,
  Delete,
  HOST_API,
};
