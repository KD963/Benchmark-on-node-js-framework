var Stress = require('ddos-stress');

// Create new instance of DDoS Stress
var stress = new Stress();

// Run stress on server
stress.run('http://192.168.3.44/',10);

server = 'localhost';
port = 9000;