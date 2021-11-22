const express = require('express') ;
const cors = require('cors') ;
const router = require('./routes') ;



const app = express();

app.use(express.json());
app.use(router)
app.use(cors())

app.listen(3333, () => console.log('Server started on port 3333'));






