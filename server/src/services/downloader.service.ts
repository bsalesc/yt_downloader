import * as ytdl from 'ytdl-core';

import { IMedia } from '../types/media.interface';
import { WriteStream } from 'fs';
import { Extension } from '../types/media.types';
import {
  buildFileName,
  buildStream,
  filterNewMedias,
  buildWriteStream,
} from './file.service';

export const getDetails = async (
  urls: string[],
  extension: string = Extension.MP4,
) => {
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
  stream: buildStream(media.url, ytdl, { filter: 'audio' }),
});

export const buildYoutubeStreams = (medias: IMedia[]) =>
  medias.map(buildYoutubeStream);

const saveMedia = (media: IMedia) => media.stream.pipe(buildWriteStream(media));

const createPromise = (stream: WriteStream): Promise<WriteStream> =>
  new Promise(resolve => stream.on('finish', () => resolve(stream)));

export const saveMedias = async (medias: IMedia[]): Promise<WriteStream[]> => {
  medias = await filterNewMedias(medias);
  return await Promise.all<WriteStream>(
    medias.map(saveMedia).map(createPromise),
  );
};
