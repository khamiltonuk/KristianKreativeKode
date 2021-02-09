import DefaultLayout from "@layouts/default";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const renderers = {
  code: ({ language, value }) => {
    return <SyntaxHighlighter language={language} children={value} />;
  },
  paragraph: (paragraph) => {
    const { node } = paragraph;
    if (node.children[0].type === "image") {
      const image = node.children[0];
      return <Image src={image.url} alt={image.alt} width="400" height="400" />;
    }

    return <p>{paragraph.children}</p>;
  },
};

export default function PostLayout(props) {
  return (
    <DefaultLayout>
      <Head>
        <title>{props.title}</title>
      </Head>
      <article>
        <h1>{props.title}</h1>
        <ReactMarkdown
          children={props.content}
          renderers={renderers}
        />
      </article>
      <Link href="/">
        <a>Back home</a>
      </Link>
    </DefaultLayout>
  );
}
