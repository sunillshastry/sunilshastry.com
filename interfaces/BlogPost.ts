import { BlogMeta } from './BlogMeta';

interface BlogPost {
	content?: string;
	data?: BlogMeta;
	excerpt?: string;
	isEmpty?: boolean;
	orig?: string | Buffer<ArrayBufferLike> | undefined;
}

export type { BlogPost };
