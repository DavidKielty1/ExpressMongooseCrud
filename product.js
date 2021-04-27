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

const productScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: [String],
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
});

const Product = mongoose.model("Product", productScheme);

// const bike = new Product({
//   name: "Tire Pump",
//   price: "19.50",
//   categories: ["Cycling", "Safety"],
// });
// bike.save()
//   .then((data) => {
//     console.log("SUCCESS!");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("FAILURE!");
//     console.log(err);
//   });

Product.findOneAndUpdate(
  { name: "Tire Pump" },
  { price: -99.99 },
  { new: true, runValidators: true }
)
  .then((data) => {
    console.log("SUCCESS!");
    console.log(data);
  })
  .catch((err) => {
    console.log("FAILURE!");
    console.log(err);
  });
