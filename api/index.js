import matter from "gray-matter";
import yaml from "js-yaml";
import marked from "marked";
import { format } from "date-fns";

export async function getAllPosts() {
  const context = require.context("../_posts", false, /\.md$/);
  const posts = [];

  for (const key of context.keys()) {
    const post = key.slice(2);
    const content = await import(`../_posts/${post}`);
    const meta = matter(content.default);
    posts.push({
      slug: post.replace(".md", ""),
      title: meta.data.title,
      date: format(new Date(meta.data.date), "dd/MM/yyyy"),
      description: meta.data.description,
    });
  }
  return posts;
}

export async function getPostBySlug(slug) {
  const fileContent = await import(`../_posts/${slug}.md`);
  const meta = matter(fileContent.default);
  const content = marked(meta.content);
  return {
    title: `${meta.data.title}`,
    content: content,
  };
}

export async function getConfig() {
  const config = await import("../config.yml");
  return yaml.load(config.default);
}
