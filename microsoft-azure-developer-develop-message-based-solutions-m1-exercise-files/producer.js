const { QueueServiceClient } = require("@azure/storage-queue");
const { StorageSharedKeyCredential } = require("@azure/storage-queue");


// Get connection string (for the associated storage account)
const account = "psmessagingjj";
const sharedKeyCredential = new StorageSharedKeyCredential(account, "Z5IKNnZ6vUn32wxfi1KT5ezR8MP5jchpo6aSLNA0BJ7ZbEqFAF9+4gD0SN8nvVDsUoi52j2bzuRf+AStDD2aYw==");


const queueServiceClient = new QueueServiceClient("https://psmessagingjj.queue.core.windows.net/", sharedKeyCredential);
const queueClient = queueServiceClient.getQueueClient('testqueue');

// This function inserts a message (based on the message argument) into the queue
const insertMessageIntoQueue = async (message) => {
  try {
    await queueClient.sendMessage(message);
    console.log(`${message} inserted...`);
  } catch(err) {
    console.error(err);
  }
}

// This is a utility function that just allows us to insert a delay (using
// promises) before we check for messages again
const delay = async (ms) => {
  return new Promise(res => setTimeout(res, ms));
}

// This is our main function for this program
let messageNumber = 1;
const main = async () => {
  await insertMessageIntoQueue(`Message ${messageNumber}`);
  messageNumber++;
  await delay(2000);
  await main();
}

main();
