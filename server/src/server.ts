import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';

import downloadRouter from './routers/download.router';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

downloadRouter(app);

app.listen(8000, () => console.log('Initiated'));
