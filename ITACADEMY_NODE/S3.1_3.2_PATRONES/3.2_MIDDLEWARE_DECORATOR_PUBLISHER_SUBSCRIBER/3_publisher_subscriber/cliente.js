// CLIENTE ################################
const amqp = require('amqplib/callback_api');

class Subscriber {
    constructor(queueName, server) {
        this.queue = queueName;
        this.server = server;
        this.consoleColor = "\x1b[36m%s\x1b[0m"; 
    }
    subscribe(){
        amqp.connect(this.server, (error0, connection) => {
            if (error0) {
                throw error0;
            }
            connection.createChannel((error1, channel) => {
                if (error1) {
                    throw error1;
                }
                channel.assertQueue(this.queue, {
                    durable: false
                });
                
                console.log(this.consoleColor,`CLIENT > Waiting for messages in ${this.queue}. To exit press CTRL+C`);

                channel.consume(this.queue, (msg) => {
                    console.log(this.consoleColor, `CLIENT > Received > ${msg.content.toString()}`);
                }, { noAck: true });
            });
        });
    }
}

const subscriber = new Subscriber("Futurama", "amqp://localhost");
subscriber.subscribe();
