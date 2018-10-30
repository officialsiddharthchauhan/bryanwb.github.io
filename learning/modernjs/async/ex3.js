const fetch = require('node-fetch');
const alert = console.log;

let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'http://no-such-url'
];

let requests = urls.map(url => {
  return new Promise(resolve => {
    fetch(url).then(response => resolve(response.json()))
              .catch(error => resolve(error));
  });
});

// let requests = urls.map(url => fetch(url).catch(err => err));

Promise.all(requests)
       .then(responses => {
         // 3 urls => 3 array members
         for (let r of responses) {
           if (r instanceof Error) {
             alert(r);
           } else {
             alert(r.name);
           }
         }
       });