import { Application, Router } from 'express';

import { download } from '../controllers/download.controller';

export const downloadRouter = (app: Application) => {
  const router = Router();

  router.post('/:extension', download);

  app.use('/download', router);
};
