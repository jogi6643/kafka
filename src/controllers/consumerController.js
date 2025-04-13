const kafka = require("kafka-node");
// test topic
const client = new kafka.KafkaClient({ kafkaHost: process.env.KAFKA_BROKER || "localhost:9092" });
const consumer = new kafka.Consumer(client, [{ topic: "test-topic", partition: 0 }], { autoCommit: true });

const messages = [];

consumer.on("message", (message) => {
  messages.push(message.value);
});

consumer.on("error", (err) => {
  console.error("Consumer error:", err);
});
client.on('ready', () => console.log('Kafka client ready'));
client.on('error', (err) => console.error('Kafka client error:', err));

exports.getMessages = (req, res) => {
  res.json({ messages });
};
