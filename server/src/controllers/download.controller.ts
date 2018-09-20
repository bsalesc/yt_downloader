import { Request, Response } from 'express';
import downloaderService from '../services/downloader.service';
import { WriteStream } from 'fs';

const getTitle = async (req: Request, res: Response) => {
  const ids = req.body;
  try {
    const videos = await downloaderService.getNames(ids);
    const stream = downloaderService.downloadVideos(videos);
    let writeStream: WriteStream = null;
    stream.pipe((writeStream = downloaderService.saveVideos()));

    res.status(200).json(videos.map(video => video.title));
  } catch (e) {
    res.status(400).json(e.message);
  }
};

const downloadController = {
  getTitle,
};

export default downloadController;
