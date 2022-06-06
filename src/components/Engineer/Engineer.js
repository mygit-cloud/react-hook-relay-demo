
import React from 'react';
import { graphql, useFragment } from 'react-relay';
// import EngineerProjects from './EngineerProjects';
import EngineerProject from './EngineerProject';

export default function Engineer(props) {
    const data = useFragment(
        graphql`
        fragment Engineer_engi on Engineer {
            id
            name
            department
            projects {
                edges {
                    node {
                        ...EngineerProject_proj
                    }
                }
            }
            }
        `,
        props.engi,
    );

    return (
        <div>
            <div>{data.id} - {data.name} - {data.department} </div>
            <div>
            {data.projects.edges.map(
                ({node}) => node && <EngineerProject proj={node}/>
            )}
            </div>
            
        </div>
    )
}