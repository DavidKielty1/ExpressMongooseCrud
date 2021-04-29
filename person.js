const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/shopApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("OPEN OPEN OPEN");
  })
  .catch((err) => {
    console.log("oh no error");
    console.log(err);
  });

const personSchema = new mongoose.Schema({
  first: String,
  last: String,
});

personSchema.virtual("fullName").get(function () {
  return `${this.first} ${this.last}`;
});

personSchema.pre("save", async function () {
  this.first = "Yo";
  this.last = "Mamma";
  console.log("ABOUT TO SAVE");
});

personSchema.post("save", async function () {
  console.log("JUST SAVED");
});

const Person = mongoose.model("Person", personSchema);
