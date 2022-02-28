import styles from './Article.module.scss';

import BlogLayout from '@/layouts/BlogLayout';

import { categoryPathBySlug } from '@/lib/categories';
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/posts';

export default function Post({ post }) {
  return (
    <BlogLayout post={post}>
      <div
        className={styles.Content}
        dangerouslySetInnerHTML={{
          __html: post.content,
        }}
      />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  const { posts } = await getAllPosts();

  const paths = posts
    .filter(({ slug }) => typeof slug === 'string')
    .map(({ slug }) => ({
      params: {
        slug,
      },
    }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { post } = await getPostBySlug(params?.slug);

  //const socialImage = `${process.env.OG_IMAGE_DIRECTORY}/${params?.slug}.png`;

  const { categories, databaseId: postId } = post;
  const category = categories.length && categories[0];
  let { name, slug } = category;

  return {
    props: {
      post,
      //socialImage,
      relatedPosts: {
        posts: await getRelatedPosts(category, postId),
        title: {
          name: name || null,
          link: categoryPathBySlug(slug),
        },
      },
    },
  };
}