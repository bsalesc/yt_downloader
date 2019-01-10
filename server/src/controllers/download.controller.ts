import { Request, Response } from 'express';

import { downloadMedias } from '../services/download.service';

import { Extension } from '../types/media.types';

export const download = async (req: Request, res: Response) => {
  const { extension: extensionValue } = req.params;
  const urls = req.body;

  const extension = Extension[extensionValue.toUpperCase()] as Extension;

  try {
    if (!extension) throw Error('Invalid extension');

    const zippedFile = await downloadMedias(urls, extension);

    zippedFile.on('end', () => res.end());
    zippedFile.pipe(res);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
