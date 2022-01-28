const { application } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const routes = ('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/socialnetwork', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('debug', true);

application.use(require('./routes'));

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));