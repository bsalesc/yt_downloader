import { Readable } from 'stream';

export interface IMedia {
  filename: string;
  filenameInternal: string;
  video_id: string;
  title: string;
  url: string;
  stream?: Readable;
}
