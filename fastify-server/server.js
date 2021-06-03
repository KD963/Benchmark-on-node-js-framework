'use strict'

// const fastify = require('fastify')({
//   logger: true
// })

// fastify.get('/', async (request, reply) => {
//   reply.type('application/json').code(200)
//   return { hello: 'fastify world' }
// })

// fastify.listen(3001, (err, address) => {
//   if (err) throw err
//   fastify.log.info(`server listening on ${address}`)
// })

const fastify = require('fastify')()
const schema = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          hello: {
            type: 'string'
          }
        }
      }
    }
  }
}

fastify.get('/', schema, function (req, reply) {
  reply.send({ hello: 'fastify world' })
})

fastify.get('/add', function (req, reply) {
  let result = 0;
  for (let i = 0; i < 5; i++) {
    result += i;
  }
  reply.send(result.toString());
})

fastify.get('/year', function (req, reply) {
  let w1, w2, year = 0;
  w1 = 4, w2 = 7
  while (w1 <= w2) {
    w1 = w1 * 3;
    w2 = w2 * 2;
    year++;
  }
  reply.send(year.toString())
})


fastify.get('/petya', function (req, reply) {
  let a, b;
  a = "abcdefg", b = "AbCdEfF"
  let a1, b1;
  for (let i = 0; i < a.length; i++) {
    a1 = a.toLowerCase();
    b1 = b.toLowerCase();
    if (a1 < b1) {
      reply.send({ result: "-1" });
    }
    else if (a1 > b1) {
      reply.send({ result: "1" });
    }
    else if (a1 == b1) {
      reply.send({ result: "0" });
    }
  }
})


fastify.get('/math', function (req, reply) {
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
  reply.send(arr);
  return 0;
})

fastify.get('/balancedarray', function (req, reply) {
  let n = 6;

  n /= 2;
  if (n & 1) {
    return "NO";

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
  reply.send({ result });

})


fastify.get('/getodd', function (req, reply) {
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
      return arr[i];
  }
  return -1;
})



fastify.listen(3001)