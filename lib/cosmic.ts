import { createBucketClient } from '@cosmicjs/sdk';
import { Post } from '../lib/types';

const cosmic = createBucketClient({
  // @ts-ignore
  bucketSlug: process.env.NEXT_PUBLIC_COSMIC_BUCKET_SLUG ?? '',
  // @ts-ignore
  readKey: process.env.NEXT_PUBLIC_COSMIC_READ_KEY ?? '',
});
export async function getAllPosts(): Promise<Post[]> {
    try {
      // Get all posts
      const data: any = await Promise.resolve(
        cosmic.objects
          .find({
            type: 'posts',
          })
          .props('id,type,slug,title,metadata,created_at')
          .depth(1)
      );
      const posts: Post[] = await data.objects;
      return Promise.resolve(posts);
    } catch (error) {
      console.log('Oof', error);
    }
    return Promise.resolve([]);
  }

export default cosmic;