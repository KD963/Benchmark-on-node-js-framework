'use strict'

//require('make-promises-safe')

const Hapi = require('@hapi/hapi')

async function start() {
  const server = Hapi.server({ port: 3002, debug: false })

  server.route({
    method: 'GET',
    path: '/',
    config: {
      cache: false,
      response: {
        ranges: false
      },
      state: { parse: false }
    },
    handler: function (request, h) {
      return { hello: 'hapi world' }
    }
  });

  server.route({
    method: 'GET',
    path: '/add',
    config: {
      handler: (request, h) => {
        let result = 0;
        for (let i = 0; i < 5; i++) {
          result += i;
        }
        return result;
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/petya',
    config: {
      handler: (request, h) => {
        let a, b;
        a = "abcdefg", b = "AbCdEfF"
        let a1, b1;
        for (let i = 0; i < a.length; i++) {
          a1 = a.toLowerCase();
          b1 = b.toLowerCase();
          if (a1 < b1) {
            return "-1";
          }
          else if (a1 > b1) {
            return "1";
          }
          else if (a1 == b1) {
            return "0";
          }
        }
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/year',
    config: {
      handler: (request, h) => {
        let w1, w2, year = 0;
        w1 = 4, w2 = 7
        while (w1 <= w2) {
          w1 = w1 * 3;
          w2 = w2 * 2;
          year++;
        }
        return year;
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/math',
    config: {
      handler: (request, h) => {
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
        return arr;
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/balancedarray',
    config: {
      handler: (request, res) => {
        let n = 8;

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
        return result;
      }
    }
  });


  server.route({
    method: 'GET',
    path: '/getodd',
    config: {
      handler: (request, h) => {
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
      }
    }
  })

  await server.start()
}

start()