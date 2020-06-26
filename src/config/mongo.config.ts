export const URI =
  process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/analiticachat';

export const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: true,
  useCreateIndex: true,
  useFindAndModify: false,
  reconnectTries: Number.MAX_VALUE, // never stop trying yo reconnect
  reconnectInterval: 500, // try to reconnect every half second
  poolSize: 10, // support until 10 simultanous connections
  bufferMaxEntries: 0, // if not connected, returns error inmediately
  createIndexes: true,
};
