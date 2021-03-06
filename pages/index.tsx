import DefaultLayout from "../_layouts/default";
import Link from "next/link";
import { getConfig, getAllPosts } from "@api";

export async function getStaticProps() {
  const config = await getConfig();
  const allPosts = await getAllPosts();
  return {
    props: {
      posts: allPosts,
      title: config.title,
      description: config.description,
    },
  };
}

export default function Blog(props) {
  return (
    <DefaultLayout title={props.title} description={props.description}>
      <ul className="blog-posts">
        {props.posts.map((post, idx) => {
          return (
            <li key={idx}>
              <Link href={"/posts/" + post.slug}>
                <a>{post.title}</a>
              </Link>
              <p>{post.description}</p>
              <p>{post.date}</p>
              <p>
                {post.tags.map((tag, index) => (
                  <span className="tag" key={index}>
                    {tag.replace("-", " ")}
                  </span>
                ))}
              </p>
            </li>
          );
        })}
      </ul>
    </DefaultLayout>
  );
}
