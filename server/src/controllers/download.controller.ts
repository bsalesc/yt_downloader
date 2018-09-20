import * as path from 'path';
import { Request, Response } from 'express';
import downloaderService from '../services/downloader.service';
import { createWriteStream } from 'fs';

const getTitle = async (req: Request, res: Response) => {
  const ids = req.body;
  try {
    const videos = await downloaderService.getNames(ids);
    downloaderService
      .downloadVideos(videos)
      .pipe(
        createWriteStream(path.join(__dirname, '../../downloads/', 'video.mp4')),
      );

    res.status(200).json(videos.map(video => video.title));
  } catch (e) {
    res.status(400).json(e.message);
  }
};

const downloadController = {
  getTitle,
};

export default downloadController;
