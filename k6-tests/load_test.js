import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 150,
  duration: '5s',
};

export default function () {
  let res = http.get('http://httpbin:80/get');
  check(res, {
    'Succesfully': (r) => r.status === 200,
  });
  sleep(1);
}
