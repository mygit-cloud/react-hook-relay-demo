import React from 'react';
import { graphql, useMutation } from 'react-relay';

export default function DeleteProject(props) {
    const [commitDelete, isInFlight] = useMutation(graphql`
    mutation DeleteProjectMutation($input:deleteProjectInput!) {
        deleteProject(input:$input) {
          project {
            id @deleteRecord
          }
        } 
      }
    `);

    const DeleteProjectMutation = (id, callback) => {
        const variables = {
            input: {
                id,
            },
        };

        commitDelete({
            variables,
            onCompleted: (data) => {
                callback(data);
            },
            // optimisticResponse: {
            //     "deleteProject": {
            //         "project": {
            //             "id": id,
            //         }
            //     }
            // },
            // updater: (store) => {
            //     window.store = store;
            //     console.log(id);
            //     store.delete(id);
            // }

        });
    }

    const deleteProject = () => {
        DeleteProjectMutation(props.id, (data) => { console.log("mutation successful"); console.log(data) })
    }

    return isInFlight ?
        (<div>deleting</div>) :
        (
            <div>
                <button onClick={deleteProject}>Delete</button>
            </div>
        )

}