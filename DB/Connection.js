const mongooes = require('mongoose');

mongooes.set('strictQuery', false);

mongooes.connect("mongodb+srv://karanvd2002:jwt1234@jwttoken.b07ekim.mongodb.net/JWTdemo", {
    useNewUrlParser: true,
}).then(() => {
    console.log('DB connection Done');
}).catch((error) => {
    console.log(error);
})