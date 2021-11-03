// IP: 165.227.47.243
// PORT: 50541
const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log('Successfully connected to game server');
    conn.write('Name: nnw');
    
    // conn.write('Move: up');
    // setTimeout(() => conn.write('Move: up'), 100);
    // setInterval(() => conn.write('Move: up'), 100);
  });

  // conn.on('connect', () => {
  //   conn.write('Move: up');
  // });

  return conn;
};

module.exports = connect;