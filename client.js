const { IP, PORT } = require('./constants');

const net = require("net");
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log('Successfully connected to game server');
    conn.write('Name: nnw');
    conn.write('Say: Hello🔆');
    // Hard-codec move commands:
    // conn.write('Move: up');
    // setTimeout(() => conn.write('Move: up'), 100);
    // setInterval(() => conn.write('Move: up'), 100);
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};

module.exports = { connect };