const kafka = require("kafka-node");

const client = new kafka.KafkaClient({ kafkaHost: process.env.KAFKA_BROKER || "localhost:9092" });
const producer = new kafka.Producer(client);

producer.on("ready", () => console.log("Kafka Producer is ready"));
producer.on("error", (err) => console.error("Producer error:", err));

exports.sendMessage = (req, res) => {
  const { message } = req.body;
  const payloads = [{ topic: "test-topic", messages: message }];

  producer.send(payloads, (err, data) => {
    if (err) {
      console.error("Error sending message:", err);
      res.status(500).json({ error: "Failed to send message" });
    } else {
      console.log("Message sent:", data);
      res.json({ success: true, data });
    }
  });
};
