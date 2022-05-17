const mongoose = require("mongoose")


const password = "dGX5PjcIFmlWBQQA"
const librery = "librery"
const uri = `mongodb+srv://MSDiego:${password}@cluster0.uzqub.mongodb.net/${librery}?retryWrites=true&w=majority`
                // mongodb+srv://MSDiego:<password>@cluster0.uzqub.mongodb.net/?retryWrites=true&w=majority    30bda
// const uri = `mongodb+srv://msdiego:${password}@cluster0.30bda.mongodb.net/?retryWrites=true&w=majority`
module.exports= ()=> mongoose.connect(uri, {useNewUrlParser: true,useUnifiedTopology: true})
// Tambien se puede igualar a una variable pero asi nos ahorramos codigo const connection = ()=> mongoose.connect(uri, {userNewUrlParser: true,useUnifiedTopology: true}) module.export = connection
