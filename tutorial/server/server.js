const webPush = require("web-push");
//const vapidKeys = webPush.generateVAPIDKeys();

const vapidKeys = {
  publicKey:
    "BJLmNQn5bQ3op-iGk1WtNkFfaF8wGdiY5LdZytLT8_9_yRWmuzIIJGwVsyFFLZ9zjCS0bkPXxJNqSa9w1X8Zuno",
  privateKey: "6YVJGDNEcWsexBCwPrrlY0JWthAN00yljLYkcN5AFpg",
};

const subscriber = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/cAC4CqYdtrQ:APA91bHrbmfQCPjAhdVcV1no1OpyRe_JDwH-lcm-dMBucvUBi_sl9oDbMlGGVhGvFLIj-AQF99YsqIdS6VUYLEdAB5yryrxZKUvsnrwEPoeOzHF6er5v-60flyXaV5qJ3DagAJduqOXl",
  expirationTime: null,
  keys: {
    p256dh:
      "BMCmd5JDJMJcQG5etPK_u36C4_kT2myy9fFd9F22lBnkCvZFqfXsNVxHo80ZGQhQ7GLUlTus4NaP3DH2XCvoxXc",
    auth: "O1TbDmO6QYuNEtdShFb4Xg",
  },
};

webPush.setVapidDetails(
  "mailto:cobanyasin1998@gmail.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

webPush.sendNotification(subscriber, "This is a push notification from server");

console.log(vapidKeys);
