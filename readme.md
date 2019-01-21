# pubsub-emulator-node-client-constructor-issue

This repository showcase a potential issue :
[@google-cloud/pubsub](https://www.npmjs.com/package/@google-cloud/pubsub) constructor don't seems to
account environmennt variable and this is weird.

I however discovered that the error triggers in the **app** container to at constructor initialization,
but ASAP you play with topics and subscriptions. That we had to attempt a topic creation.
