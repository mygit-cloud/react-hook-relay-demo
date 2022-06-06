import React from 'react';
import { graphql, useFragment } from 'react-relay';


export default function EngineerProject(props) {

    const data = useFragment(
        graphql`
        fragment EngineerProject_proj on Project {
            id
            leader
            content
            }
        `,
        props.proj,
    );

    
    return (
        <div>
            <li>
                {data.id} - {data.leader} - {data.content}
                <button onClick={() => props.deleteProj(data.id)}>delete</button>
            </li>
        </div>
    )
}