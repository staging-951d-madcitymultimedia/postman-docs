import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { v4 as uuidv4 } from 'uuid';
import { useLocation } from '@reach/router';


const EarlyAccessList = () => (
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
        const location = useLocation();
        
        return (
          <div key={uuidv4()}>
            <ul className="mb-5">
              {earlyAccessPages.map(edge => (
                <>
                {/* Do not show the current page in the list */}
                {edge.node.fields.slug === location.pathname ? null : 
                  <li key={uuidv4()}><a href={edge.node.fields.slug}>{edge.node.frontmatter.title}</a></li>
                }
                </>
              ))}
            </ul>
          </div>
        );
      }}
    />
   );
   


export default EarlyAccessList;
