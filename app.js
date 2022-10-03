const express = require('express');
const app = express();
port = 8700;
const { default:mongoose } = require('mongoose');

url = 'mongodb+srv://hussain9596:hesenberg9596@cluster0.ez3una3.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(url);
mongoose.connect(url, {useNewUrlParser: true});

const dbConnect = mongoose.connection;
dbConnect.on('open', () => {
    console.log('Atlas Mongodb is connected');
})

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true}));


const gym = require('./routes/gym');
app.use('/api/v2/gym', gym);



app.listen(port, function() {
    console.log('Gym System Server is Running on', port);
})
