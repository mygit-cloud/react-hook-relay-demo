import React from 'react';
import { graphql, useFragment } from 'react-relay';
import Project from "./Project"

export default function ProjectList(props) {
    const data = useFragment(
        graphql`
        fragment ProjectList_projects on ProjectConnection {
            
                edges {
                    node {
                        id
                        ...Project_proj
                    }
                }
             
        }
        `,
        props.projects,
    );

    // todo 这里删除的时候根据projectid只能删除node，但是边还在，还会render，所以
    //加上了node的判断。不知道这么处理是否可行？？
    return (
        <div>
           
            {data.edges
            // .filter(node => !!node)
            .map(({ node }) =>
                node && <Project key={node.id} proj={node}/>
            )}
        </div>
    )
}