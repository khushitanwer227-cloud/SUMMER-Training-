
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;



const requestLogger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.url}`);
    next(); 
};

app.use(requestLogger);

const corsOptions = {
    origin: [/localhost:\d+$/, /127\.0\.0\.1:\d+$/], 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));


app.use(express.json());


app.get('/', (req, res) => {
  console.log(" I m router handler ");

  res.send('Hello World!');
});


app.get('/api/status', (req, res) => {
    res.json({ status: 'Server is running perfectly' });
});

app.post('/api/data', (req, res) => {
      console.log(req.body);
    const receivedData = req.body;
    res.json({ 
        message: 'Payload received successfully', 
        data: receivedData 
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});






