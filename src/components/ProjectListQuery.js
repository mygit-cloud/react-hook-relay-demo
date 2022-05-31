import React from 'react';
import { graphql, usePreloadedQuery } from 'react-relay';

export default function ProjectListQuery(props) {
    const data = usePreloadedQuery(
        graphql`
        query ProjectListQuery {
            projects {
              edges {
                node {
                 id
                  leader
                }
              }
            }
          }`,
        props.queryRef,
    );
    return (
        <div>
            {data.projects.edges.map(({ node }) =>
                <div key={node.id}>{node.id} - {node.leader}</div>
            )}
        </div>
    )
}