const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://goku:goku545@cluster0.oln3cei.mongodb.net/?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to Database");
}).catch((e) => {
    console.log("No Connection ->", e);
})