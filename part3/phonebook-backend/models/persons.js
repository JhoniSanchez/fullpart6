const { default: mongoose } = require("mongoose");

const noteSchema = new mongoose.Schema({
    name: {
      type: String,
      minLength: 3,
      require: true,
    },
    number: {
      type: String,
      minLength: 9,
      validate: {
        validator: function(v) {
          return /^\d{2,3}-\d+$/.test(v);
        },
        message: props => `${props.value} is not a valid phone number!`
      },
      require: true,
    },
  });
  
  noteSchema.set("toJSON", {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id;
      delete returnedObject.__v;
    },
  });
  
  module.exports = mongoose.model("Note", noteSchema);
  
  
  
  