// directory: /models

Messages = new Mongo.Collection("messages");
Messages.allow({
  insert: (userId, doc) => {
    return true;
  },
  update: (userId, doc, fields, modifier) => {
    return true;
  },
  remove: (userId, doc) => {
    return true;
  }
});
