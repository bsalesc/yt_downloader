import { Application, Router } from 'express';

import downloadController from '../controllers/download.controller';

const downloadRouter = (app: Application) => {
  const router = Router();

  router.post('/', downloadController.getTitle);

  app.use('/download', router);
};

export default downloadRouter;
