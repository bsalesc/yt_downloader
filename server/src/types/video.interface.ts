import { Readable } from 'stream';

export interface VideoInterface {
  filename: string;
  video_id: string;
  title: string;
  stream?: Readable;
}
