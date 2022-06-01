import React from 'react';
import { graphql, useMutation } from 'react-relay';

export default function CreateProject() {
    const [commit, isInFlight] = useMutation(graphql`
    mutation CreateProjectMutation($input:createProjectInput!) {
        createProject(input:$input) {
          project {
            id
            content
            leader
          }
        } 
      }
    `);

    return isInFlight? (
        <div>Loading</div>
    ) : (
        <button
        
        onClick={() => {
                      commit({
            variables: {
              input: {
                content: 'c6',
                leader:'l6',
                startDate:'2020/1/1',
              },
            },
            onCompleted(data) {
              console.log(data);
            },
          });
        }}
      >Create</button>
    )
}
