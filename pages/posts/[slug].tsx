import PostLayout from "@layouts/posts";
import { getPostBySlug, getAllPosts } from "@api";

export default function Post(props) {
  return <PostLayout title={props.title} content={props.content} />;
}

export async function getStaticProps(context) {
  const props = await getPostBySlug(context.params.slug);

  return {
    props,
  };
}

export async function getStaticPaths() {
  let paths = await getAllPosts();
  paths = paths.map((post) => ({
    params: { slug: post.slug },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}
