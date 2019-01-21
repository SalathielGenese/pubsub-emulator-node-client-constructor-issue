# pubsub-emulator-node-client-constructor-issue

This repository showcase a potential issue :
[@google-cloud/pubsub](https://www.npmjs.com/package/@google-cloud/pubsub) constructor don't seems to
account environmennt variable and this is weird.

I however discovered that the error triggers in the **app** container to at constructor initialization,
but ASAP you play with topics and subscriptions. That we had to attempt a topic creation.

Here's what the error log looks like :

```text
app_1_3630a27386b4 | (node:1) UnhandledPromiseRejectionWarning: Error: Sorry, we cannot connect to Cloud Services without a project
app_1_3630a27386b4 |  ID. You may specify one with an environment variable named
app_1_3630a27386b4 |  "GOOGLE_CLOUD_PROJECT".
app_1_3630a27386b4 |     at replaceProjectIdToken (/opt/app/node_modules/@google-cloud/projectify/build/src/index.js:45:19)
app_1_3630a27386b4 |     at Object.replaceProjectIdToken (/opt/app/node_modules/@google-cloud/projectify/build/src/index.js:38:30)
app_1_3630a27386b4 |     at getClient_ (/opt/app/node_modules/@google-cloud/pubsub/build/src/index.js:638:36)
app_1_3630a27386b4 |     at PubSub.getClient_ (/opt/app/node_modules/@google-cloud/pubsub/build/src/index.js:615:9)
app_1_3630a27386b4 |     at PubSub.request (/opt/app/node_modules/@google-cloud/pubsub/build/src/index.js:632:14)
app_1_3630a27386b4 |     at Topic.getMetadata (/opt/app/node_modules/@google-cloud/pubsub/build/src/topic.js:338:14)
app_1_3630a27386b4 |     at Topic.wrapper (/opt/app/node_modules/@google-cloud/promisify/build/src/index.js:44:35)
app_1_3630a27386b4 |     at Topic.get (/opt/app/node_modules/@google-cloud/pubsub/build/src/topic.js:284:14)
app_1_3630a27386b4 |     at PromiseCtor (/opt/app/node_modules/@google-cloud/promisify/build/src/index.js:71:28)
app_1_3630a27386b4 |     at new Promise (<anonymous>)
app_1_3630a27386b4 | (node:1) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 2)
app_1_3630a27386b4 | (node:1) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
pubsub-emulator-node-client-constructor-issue_app_1_3630a27386b4 exited with code 0
```
