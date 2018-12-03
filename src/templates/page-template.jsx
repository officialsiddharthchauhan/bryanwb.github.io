import React from "react";
import Helmet from "react-helmet";
import { graphql } from 'gatsby';
import Layout from '../layouts';

export default function PageTemplate({
  data
}) {
  const post = data.markdownRemark;
  return (
    <Layout>
        <div className="blog-post-container">
            <Helmet title={`Hot Air - ${post.frontmatter.title}`} />
            <div className="blog-post">
                <h1>{post.frontmatter.title}</h1>
                <div
                  className="blog-post-content"
                  dangerouslySetInnerHTML={{ __html: post.html }}
                />
            </div>
        </div>
    </Layout>
  );
}

export const pageTemplateQuery = graphql`
  query pagesByPath($path: String!) {
              markdownRemark(frontmatter: {path: {eq: $path } }) {
              html
      frontmatter {
              date(formatString: "MMMM DD, YYYY")
          path
          title
          tags
        }
      }
    }
  `
  ;
