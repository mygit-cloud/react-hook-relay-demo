import React from 'react';
import { graphql, useFragment } from 'react-relay';

export default function Project(props) {
    const data = useFragment(
        graphql`
        fragment Project_proj on Project {
            id
            leader
            }
        `,
        props.proj,
    );

    return (
        <div>
            <div>{data.id} - {data.leader}</div>
        </div>
    )
}