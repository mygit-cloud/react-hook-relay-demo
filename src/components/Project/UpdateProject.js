import React, { useState } from 'react';
import { graphql, useMutation } from 'react-relay';

export default function UpdateProject(props) {
    const [leader, setLeader] = useState(props.project.leader);
    const [commit, isInFlight] = useMutation(graphql`
    mutation UpdateProjectMutation($input:updateProjectInput!) {
        updateProject(input:$input) {
          project {
            id
            leader
          }
        }
      }`)

    const UpdateProjectMutation = (id, leader, callback) => {
        const variables = {
            input: {
                id,
                leader
            }
        };
        commit({
            variables,
            onCompleted: (data) => {
                callback(data);
            },
            // optimisticResponse: {
            //     "updateProject":
            //     {
            //         "project":
            //         {
            //             "id": id,
            //             "leader": leader,
            //         }
            //     }
            // },
        });


    };


    const updateProject = () => {
        UpdateProjectMutation(props.project.id, leader, updateCallback);
    }

    const updateCallback = (data) => {
        console.log("update successful");
        console.log(data);
        props.setUpdate(false);
    }

    return (
        <div>
            <label>Leader </label>
            <input
                value={leader}
                onChange={(event) => { setLeader(event.target.value) }} />
            {isInFlight ? <div></div> : (<button onClick={updateProject}>Submit</button>)}
        </div>
    )

}
