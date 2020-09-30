const { Kafka } = require("kafkajs");
require("dotenv/config");
const kafka = new Kafka({
    clientId: process.env.KAFKA_CLIENT,
    brokers: [process.env.KAFKA_BROKER],
});
const producer = kafka.producer();
const init = async () => {
    
    await producer.connect();
}
const sendMessages = async (topic, messages) => {
    return producer.send({
        topic,
        messages: messages,
    });
};

module.exports = {
    init,
    sendMessages
}

