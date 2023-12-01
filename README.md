# azure-message-service-bus

## purpose of application message
    - User order > Pre-Order Queue Storage> Func App Service > Post-Order Queue Storage> Analitic Ingestion Func App

## Azure Queue Storage
    - https://pluralsight.queue.core.windows.net/pluralsight-queue where pluralsight is storage acciunt and pluralsight-queue is the queue name

## Creating a azure queue storage queue
    - https://psmessagingjj.queue.core.windows.net/testqueue

## key to access the queue
    - Storage account > Access keys

## Service Buss capabilities 
    - Azure Service Bus > Namespace > Queue (Producers/Compumers)
    - Azure Service Bus > Namespace > Topics (Producers/ Many subscribers (with filter))

## DLQ Dead-letter queue
    - This enable you to capture messages in that were not processed

## Azure message solutions 
    - Azure queue store VS Azure Service Bus Queue

## Using service bus with SDK
    - `npm run queue:producer`
    - `npm run queue:consumer`