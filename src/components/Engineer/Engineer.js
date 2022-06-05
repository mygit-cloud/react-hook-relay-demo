
import React from 'react';
import { graphql, useFragment } from 'react-relay';


export default function Engineer(props) {
    const data = useFragment(
        graphql`
        fragment Engineer_engi on Engineer {
            id
            name
            department
            }
        `,
        props.engi,
    );

    return (
        <div>
            <div>{data.id} - {data.name} - {data.department}</div>
        </div>
    )
}