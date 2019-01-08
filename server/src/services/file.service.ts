import * as path from 'path';
import * as archiver from 'archiver';
import { promisify } from 'util';

import {
  createWriteStream,
  createReadStream,
  ReadStream,
  WriteStream,
  exists as existsFn,
} from 'fs';
const exists = promisify(existsFn);

import { IMedia } from '../types/media.interface';

export const buildPathFile = fileName =>
  path.join(__dirname, '../../downloads/', fileName);

export const buildFileName = (title: string, extension: string) =>
  `${title.replace(/\W+/g, '_').toLocaleLowerCase()}.${extension}`;

export const buildStream = (file: string, streamer: any, options?: any): any =>
  streamer(file, options);

export const buildReadStream = (media: IMedia): ReadStream =>
  buildStream(buildPathFile(media.filenameInternal), createReadStream);

export const buildWriteStream = (media: IMedia): WriteStream =>
  buildStream(buildPathFile(media.filenameInternal), createWriteStream);

const zipMedias = async (medias: IMedia[]): Promise<ReadStream> =>
  new Promise((resolve: any) => {
    const fileNameZip = `${Date.now()}.zip`;
    const zipMedia: IMedia = {
      filename: fileNameZip,
      filenameInternal: fileNameZip,
      url: '',
      title: '',
      video_id: '',
    };
    const compressFile = buildWriteStream(zipMedia);
    const archive = archiver('zip', { zlib: { level: 9 } });
    compressFile.on('close', () => {
      compressFile.close();
      resolve(buildReadStream(zipMedia));
    });
    archive.pipe(compressFile);
    medias.forEach(({ stream, filename: name }) =>
      archive.append(stream, { name }),
    );
    archive.finalize();
  });

const checkFileExist = async filepath => !(await exists(filepath));

export const checkMediaExist = async media =>
  await checkFileExist(buildPathFile(media.filenameInternal));

export const compressMedias = async (medias: IMedia[]) =>
  await zipMedias(
    medias.map(media => ({ ...media, stream: buildReadStream(media) })),
  );

const asyncFilter = async (array: any[], filter: any): Promise<IMedia[]> => {
  const newArray = [];
  for (const item of array) {
    if (await filter(item)) newArray.push(item);
  }

  return newArray;
};

export const filterNewMedias = async array =>
  await asyncFilter(array, checkMediaExist);
