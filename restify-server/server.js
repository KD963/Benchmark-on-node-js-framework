'use strict'

const restify = require('restify')

const server = restify.createServer()
server.get('/', function (req, res) {
  res.send({ hello: 'restify world' })
})

server.get('/add', function (req, res) {
  let result = 0;
  for (let i = 0; i < 5; i++) {
    result += i;
  }
  res.send({ result })
})

server.get('/year', function (req, res) {
  let w1, w2, year = 0;
  w1 = 4, w2 = 7
  while (w1 <= w2) {
    w1 = w1 * 3;
    w2 = w2 * 2;
    year++;
  }
  res.send({ year })

})

server.get('/petya', function (req, res) {
  let a, b;
  a = "abcdefg", b = "AbCdEfF"
  let a1, b1;
  for (let i = 0; i < a.length; i++) {
    a1 = a.toLowerCase();
    b1 = b.toLowerCase();
    if (a1 < b1) {
      res.send({ result: "-1" });
    }
    else if (a1 > b1) {
      res.send({ result: "1" });
    }
    else if (a1 == b1) {
      res.send({ result: "0" });
    }
  }
})

server.get('/math', function (req, res) {
  let i;
  let arr = [];
  for (i = 0; i < 20; i++) {
    switch (i) {
      case 0:
        i += 5;
      case 1:
        i += 2;
      case 5:
        i += 5;
      default:
        i += 4;
        break;
    }
    arr.push(i);
  }
  res.send({ arr });
  return 0;
})

server.get('/balancedarray', function (req, res) {
  let n = 8;

  n /= 2;
  if (n & 1) {
    res.send("NO");

  }

  let a;
  let arr = [];
  for (let i = 1; i <= n; ++i) {
    a = i * 2;
    arr.push(a);

  }
  let b;
  let arrb = [];
  for (let i = 1; i < n; ++i) {
    b = i * 2 - 1;
    arrb.push(b);
  }
  let c = 3 * n - 1;
  let arrc = [];
  arrc.push(c);
  let result = [arr, arrb, arrc];
  res.send(result);


})

server.get('/getodd', function (req, res) {
  let arr = [2, 3, 5, 4, 5, 2,
    4, 3, 5, 2, 4, 4, 2];
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (arr[i] == arr[j])
        count++;
    }
    if (count % 2 != 0)
      res.send({ val: arr[i] });
  }
  return -1;
})



server.listen(3003)