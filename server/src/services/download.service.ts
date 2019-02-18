import * as ytdl from 'ytdl-core';

import { IMedia } from '../types/media.interface';
import { Extension } from '../types/media.types';
import { buildFileName, buildStream, saveMedias, compressMedias } from './file.service';
import { convert } from './convert.service';
import pipeline from '../utils/pipeline.utils';

export const getDetails = async (urls: string[], extension: string = Extension.MP4) => {
  const infos = await Promise.all(urls.map(url => ytdl.getInfo(url)));

  return infos.map(
    ({ title, video_id, video_url: url }): IMedia => ({
      title,
      video_id,
      url,
      filename: buildFileName(title, extension),
      filenameInternal: buildFileName(video_id, extension),
    }),
  );
};

const buildYoutubeStream = media => ({
  ...media,
  stream: buildStream(media.url, ytdl, { filter: 'audio', quality: 'highest' }),
});

export const buildYoutubeStreams = (medias: IMedia[]) => medias.map(buildYoutubeStream);

export const downloadMedias = async (urls: string[], extension: Extension) =>
  await pipeline(getDetails, buildYoutubeStreams, saveMedias, convert(extension), compressMedias)(urls);
