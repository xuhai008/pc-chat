import MediaMessageContent from './mediaMessageContent'
import { ContentMediaType_Image } from './messageContentMediaTypes';
export default class ImageMessageContent extends MediaMessageContent {
    // base64 encoded
    thumbnail;

    digest() {
        return '[图片]';
    }

    encode() {
        let payload = super.encode();
        payload.mediaType = ContentMediaType_Image;
        payload.binaryContent = thumbnail;
    };

    decode(payload) {
        super.decode(payload);
        this.thumbnail = payload.binaryContent;
    }
}
