import * as path from 'path';
import * as ytdl from 'ytdl-core';

import { PassThrough } from 'stream';
import { VideoInterface } from '../types/video.interface';
import streamUtil from '../utils/stream.util';
import { createWriteStream } from 'fs';

const url = 'https://www.youtube.com/watch?v=';

const getNames = async (ids: string[]) => {
  const infos = await Promise.all(ids.map(id => ytdl.getInfo(url + id)));

  return infos.map(
    ({ title, video_id }): VideoInterface => ({
      title,
      filename: title.replace(' ', '_').toLocaleLowerCase(),
      video_id,
    }),
  );
};

const downloadVideos = (videos: VideoInterface[]) => {
  const output = new PassThrough({ objectMode: false });

  videos.map(video =>
    streamUtil
      .createStream(
        ytdl(url + video.video_id, {
          filter: format => format.container === 'mp4',
        }),
      )
      .pipe(output),
  );

  return output;
};

const saveVideos = () =>
  createWriteStream(path.join(__dirname, '../../downloads/', 'video.mp4'));

const downloaderService = {
  getNames,
  downloadVideos,
  saveVideos,
};

export default downloaderService;
