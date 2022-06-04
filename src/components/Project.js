import React, { useState } from 'react';
import { graphql, useFragment } from 'react-relay';
import DeleteProject from './DeleteProject';
import UpdateProject from './UpdateProject';

export default function Project(props) {
    const [isUpdate, setUpdate] = useState(false);

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
            {isUpdate ? (
            <UpdateProject project={data} setUpdate={setUpdate} />
            ):
            (
            <div>{data.id} - {data.leader}
                <button onClick={() => setUpdate(true)}>Update</button>
                <DeleteProject id={data.id} />
            </div>
            )}


        </div>
    )
}