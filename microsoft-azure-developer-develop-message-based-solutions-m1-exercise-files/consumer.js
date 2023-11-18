const { QueueServiceClient } = require("@azure/storage-queue");
const { StorageSharedKeyCredential } = require("@azure/storage-queue");

// Get connection string (for the associated storage account)
const account = "psmessagingjj";
const sharedKeyCredential = new StorageSharedKeyCredential(account, "Z5IKNnZ6vUn32wxfi1KT5ezR8MP5jchpo6aSLNA0BJ7ZbEqFAF9+4gD0SN8nvVDsUoi52j2bzuRf+AStDD2aYw==");
const queueServiceClient = new QueueServiceClient("https://psmessagingjj.queue.core.windows.net/", sharedKeyCredential);

const queueClient = queueServiceClient.getQueueClient('testqueue');

// This is a utility function that just allows us to insert a delay (using
// promises) before we check for messages again
const delay = async (ms) => {
  return new Promise(res => setTimeout(res, ms));
}

// Each message received gets passed into this function which logs the message
// and deletes it
const processMessage = async (message) => {
  console.dir(message);
  queueClient.deleteMessage(message.messageId, message.popReceipt);
}

// This is our main function for this program
const main = async () => {
  const receivedMessages = await queueClient.receiveMessages();
  receivedMessages.receivedMessageItems.forEach(processMessage);
  await delay(1000);
  await main();
}

main();
