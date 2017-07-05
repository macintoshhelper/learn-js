
const API_ROOT = 'https://jsonplaceholder.typicode.com/posts/1';


const requests = {
  get: url => fetch(url).then(res => res.body),
  post: (url, body) => fetch(url, { method: 'POST', body }).then(res => res.body),
};
