const http = require('http');
const SocketIO = require('socket.io');
const { SerialPort } = require('serialport');
const { DelimiterParser } = require('@serialport/parser-delimiter')
import app from "../../app";

const server = http.createServer(app);
  const io = SocketIO(server);

const port = new SerialPort({
  path: "COM4", 
  baudRate: 9600
});

export const parser = port.pipe(new DelimiterParser({ delimiter: '\n' }));