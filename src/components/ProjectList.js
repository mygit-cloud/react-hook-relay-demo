import React from 'react';
import { graphql, useFragment } from 'react-relay';
import Project from "./Project"

export default function ProjectList(props) {
    const data = useFragment(
        graphql`
        fragment ProjectList_projects on ProjectConnection {
            edges {
                node {
                    ...Project_proj
                }
            }  
        }
        `,
        props.projects,
    );

// todo 这里的key有什么问题？为什么总是报警告？？
    return (
        <div>
            {data.edges.map(({ node }) =>
                <Project key={node.id} proj={node}/>
            )}
        </div>
    )
}