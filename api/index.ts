import matter from "gray-matter";
import yaml from "js-yaml";
import { compareAsc, parse } from "date-fns";

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
      tags: meta.data.tag.split(" ") || [],
      date: meta.data.date,
      description: meta.data.description,
    });
  }

  const sortedPosts = posts.sort((a, b) => {
    return compareAsc(
      parse(b.date, "dd/MM/yyyy", new Date()),
      parse(a.date, "dd/MM/yyyy", new Date())
    );
  });

  return sortedPosts;
}

export async function getPostBySlug(slug: string) {
  const fileContent = await import(`../_posts/${slug}.md`);
  const meta = matter(fileContent.default);
  return {
    title: `${meta.data.title}`,
    content: meta.content,
  };
}

export async function getConfig() {
  const config = await import("../config.yml");
  return yaml.load(config.default);
}
