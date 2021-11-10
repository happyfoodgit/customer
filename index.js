const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const customerRoutes = require('./routes/customerRoutes');
const merchantRoutes = require('./routes/merchantRoutes');


app.use(cors());
app.use(express.json());


const { MONGO_URI } = require('./config');
mongoose.connect(MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));


app.use('xaewlafjheiwnkfnamakjeqyhkeiwu/customer', customerRoutes);

const port = process.env.port || 3000;

app.get("/", (req, res) => console.log("running.."));
app.listen(port, () => console.log(`Running at port ${port}`));