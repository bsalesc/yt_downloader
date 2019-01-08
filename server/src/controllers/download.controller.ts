import { Request, Response } from 'express';
import {
  buildYoutubeStreams,
  getDetails,
  saveMedias,
} from '../services/downloader.service';
import { convert } from '../services/convert.service';
import { compressMedias } from '../services/file.service';

import { Extension } from '../types/media.types';

export const download = async (req: Request, res: Response) => {
  const { extension: extensionValue } = req.params;
  const urls = req.body;

  const extension = Extension[extensionValue.toUpperCase()];

  try {
    if (!extension) throw Error('Invalid extension');

    let medias = await getDetails(urls);
    await saveMedias(buildYoutubeStreams(medias));
    medias = await convert(medias, extension);
    const compressedFile = await compressMedias(medias);

    compressedFile.on('end', () => res.end());
    compressedFile.pipe(res);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
