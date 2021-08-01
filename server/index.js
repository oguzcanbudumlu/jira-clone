const express = require('express');
const app = express();
const PORT = 4000;
const cors = require('cors')


app.use(cors())
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.listen(PORT, function() {
    console.log(`Server is running on port ${PORT}`);
})