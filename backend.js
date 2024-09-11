const mqtt = require('mqtt');
const host = 'telexa.co.in';
const port = '1883';
const connectUrl = `tcp://${host}:${port}`;
const client = mqtt.connect(connectUrl, {
  clean: true,
  username: 'telexa',
  password: 'testpassword',
  reconnectPeriod:1000
});

 let topic = "664cd8c1ece4357464d154af";

    client.subscribe(topic+"_SUB");

    client.publish(topic+"_PUB", "Vivek sharma", { qos: 0, retain: false });
    console.log("done");


// #1*1*5*    