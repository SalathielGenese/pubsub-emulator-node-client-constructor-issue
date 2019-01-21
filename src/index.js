const { PubSub } = require( '@google-cloud/pubsub' );




console.log({
    GOOGLE_CLOUD_PROJECT: process.env.GOOGLE_CLOUD_PROJECT,
    PUBSUB_EMULATOR_HOST: process.env.PUBSUB_EMULATOR_HOST,
});
( async () =>
{
    const pubsub = new PubSub();

    await pubsub.topic(
        Date.now().toString( 36 ) ).get({ autoCreate: true });
})();
