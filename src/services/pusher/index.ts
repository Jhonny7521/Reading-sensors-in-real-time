import Pusher from "pusher";

export default new Pusher({
  appId: process.env.PUSHER_APP_ID || '',
  key: process.env.PUSHER_KEY || '',
  secret: process.env.PUSHER_SECRET || '',
  cluster: "us2",
  useTLS: true,
});

// export default new Pusher({
//   appId: "1541510",
//   key: "5c803d95f54b1d5a48e6",
//   secret: "aee864b925d025ca76a5",
//   cluster: "us2",
//   useTLS: true
// });