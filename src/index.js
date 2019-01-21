const { PubSub } = require( '@google-cloud/pubsub' );



( async () =>
{
    const pubsub = new PubSub();

    await pubsub.topic(
        Date.now().toString( 36 ) ).get({ autoCreate: true });
})().then( () =>
{
    console.log( 'Done...' );
})
