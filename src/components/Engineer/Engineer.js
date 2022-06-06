
import React, {useState} from 'react';
import { graphql, useFragment, useMutation } from 'react-relay';
// import EngineerProjects from './EngineerProjects';
import EngineerProject from './EngineerProject';

export default function Engineer(props) {
    const [add, setAdd] = useState(false);
    const [projectID, setProjectID] = useState("");

    const data = useFragment(
        graphql`
        fragment Engineer_engi on Engineer {
            id
            name
            department
            projects {
                edges {
                    node {
                        id
                        ...EngineerProject_proj
                    }
                }
            }
            }
        `,
        props.engi,
    );

    window.data = data;

    const [commit] = useMutation(graphql`
    mutation EngineerChangeProjectMutation($input:updateEngineerInput!) {
        updateEngineer(input:$input) {
          engineer {
            id
            name
            projects {
              edges {
                node {
                    id
                  ...EngineerProject_proj
                }
              }
            }
          }
        }
      }
      `)

    const UpdateEngineerProjectMutation = (engineerID, projectIDs, callback) => {
        const variables = {
            input: {
                "id": engineerID,
                "projects": projectIDs,
            }
        }

        commit({
            variables,
            onCompleted: (data) => {
                callback(data);
            },
        })
    }

    const deleteEngineerProject = (id) => {
        var projectIDs = new Set();
        data.projects.edges.forEach(e => {
            if (e && e.node && e.node.id !== id) {
                projectIDs.add(e.node.id);
            }
        });
        const updateProjectIDList = [...projectIDs];
        UpdateEngineerProjectMutation(data.id, updateProjectIDList, mutationCallback)
    }

    const addEngineerProject = (id) => {
        var projectIDs = new Set();
        data.projects.edges.forEach(e => {
            if (e && e.node) {
                projectIDs.add(e.node.id);
            }
        });
        const updateProjectIDList = [...projectIDs, id];
        UpdateEngineerProjectMutation(data.id, updateProjectIDList, mutationCallback)
        setProjectID("");
        setAdd(false);
    }

    const mutationCallback = (data) => {
        console.log("mutation successful");
        console.log(data);
    }

    return (
        <div>
            <div>{data.id} - {data.name} - {data.department} </div>
            <div>
                {data.projects.edges.map(
                    ({ node }) => node && <EngineerProject key={node.id} proj={node}
                     deleteProj={deleteEngineerProject} 
                     addProj={addEngineerProject}/>
                )}
            </div>
            {add ? (<div>
                    <input placeholder='project id' type='text'
                    value={projectID}
                    onChange={event => setProjectID(event.target.value)}/>
                    <button onClick={() => {addEngineerProject(projectID)}}>submit</button>
                    <button onClick={() => {setAdd(false)}}>back</button>
                </div>) : 
                (<button onClick={() => {setAdd(true)}}>add</button>)}
        </div>
    )
}