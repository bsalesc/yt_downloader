import { PassThrough } from 'stream';
import { VideoInterface } from '../types/video.interface';

class DataExtender extends PassThrough {
  filename: string;

  constructor(video: VideoInterface) {
    super(video.stream);
    this.filename = video.filename;
  }

  emit(ev, ...args) {
    if (ev === 'data') return super.emit(ev, this.filename, ...args);
    super.emit(ev, this.filename, ...args);
  }
}

const streamUtil = {
  createStream: video => new DataExtender(video),
};

export default streamUtil;
