const express = require('express');
const app = express();
const port = 4200;

app.get('/', (req: any, res: any) => res.send('Hello 4'))

app.listen(port)
