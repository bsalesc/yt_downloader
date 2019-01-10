import * as ffmpeg from 'fluent-ffmpeg';
import { buildPathFile, filterNewMedias } from './file.service';
import { IMedia } from '../types/media.interface';
import { Extension } from '../types/media.types';

const convertToMP3 = async (medias: IMedia[]): Promise<IMedia[]> => {
  const newMedias = await filterNewMedias(
    (medias = medias.map(renameMediaToMp3)),
  );
  await Promise.all<IMedia>(
    newMedias.map(
      media =>
        new Promise(resolve => {
          const { filenameInternal } = media;
          const sourceMp3 = buildPathFile(filenameInternal);
          const sourceMp4 = buildPathFile(
            filenameInternal.replace('.mp3', '.mp4'),
          );

          const converter: any = new ffmpeg({ source: sourceMp4 });
          converter.setFfmpegPath(
            'C:\\ffmpeg-20190107-e9564f7-win64-static\\bin\\ffmpeg.exe',
          );
          converter
            .toFormat('mp3')
            .save(sourceMp3)
            .on('error', () => resolve(media))
            .on('end', () => resolve(media));
        }),
    ),
  );

  return medias;
};

const renameMediaToMp3 = media => ({
  ...media,
  filename: media.filename.replace('.mp4', '.mp3'),
  filenameInternal: media.filenameInternal.replace('.mp4', '.mp3'),
});

export const convert = (extension: string) => async (medias: IMedia[]) => {
  let mediasConverted = [...medias];
  switch (extension) {
    case Extension.MP3:
      mediasConverted = await convertToMP3(mediasConverted);
      break;
  }

  return mediasConverted;
};
