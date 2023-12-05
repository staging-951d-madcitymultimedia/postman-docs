import React from "react";
import { StaticQuery, graphql } from "gatsby";


const BulletList = () => (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(filter: { frontmatter: { early_access: { eq: true } } }) {
            edges {
              node {
                frontmatter {
                  early_access
                  title
                }
                fields {
                    slug
                }
              }
            }
          }
        }
      `}
      render={data => {
        const earlyAccessPages = data.allMarkdownRemark.edges;
        return (
          <div>
            <ul className="mb-5">
              {earlyAccessPages.map(edge => (
                <li key={edge.node.id}><a href={edge.node.fields.slug}>{edge.node.frontmatter.title}</a></li>
              ))}
            </ul>
          </div>
        );
      }}
    />
   );
   


export default BulletList;
