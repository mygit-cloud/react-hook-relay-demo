import React, { useState } from 'react';
import { graphql, useMutation } from 'react-relay';

export default function CreateProject() {
    const [leader, setLeader] = useState("");
    const [content, setContent] = useState("");
    const [date, setDate] = useState("");
    const [commit, isInFlight] = useMutation(graphql`
    mutation CreateProjectMutation($input:createProjectInput!) {
        createProject(input:$input) {
          project {
            id
            leader
          }
        } 
      }
    `)


    const CreateProjectMutation = (content, leader, startDate, callback) => {
        const variables = {
            input: {
                content,
                leader,
                startDate,
            }
        }

        commit({
            variables,
            onCompleted: (data) => {
                callback(data);
            },
            optimisticResponse: {
                "createProject":
                {
                    "project":
                    {
                        "id": "/projects/new",
                        "leader": leader,
                    }
                }
            },
            updater: (store) => {
                const rootField = store.get('client:root');
                const oldEdges = rootField.getLinkedRecord('projects').getLinkedRecords('edges');
                const payload = store.getRootField('createProject');
                const newProject = payload.getLinkedRecord('project');
                const newID = payload.getDataID();
                const newEdge = store.create('edge'+ newID, 'ProjectEdge');
                newEdge.getOrCreateLinkedRecord('node', 'Project');
                newEdge.setLinkedRecord(newProject, 'node');
                const newEdges = [...oldEdges, newEdge];
                rootField.getLinkedRecord('projects').setLinkedRecords(newEdges, 'edges');
            },
        }
        )
    }

    const submitProject = () => {
        CreateProjectMutation(content, leader, date, (data) => { console.log("mutation successful"); console.log(data) });
        clearForm();
    }

    const clearForm = () => {
        setLeader("");
        setContent("");
        setDate("");
    }

    return (
        <div>
            <label>Leader</label>
            <input
                value={leader}
                onChange={(event) => { setLeader(event.target.value) }} />
            <label>content</label>
            <input
                value={content}
                onChange={(event) => { setContent(event.target.value) }} />
            <label>start date</label>
            <input
                value={date}
                onChange={(event) => { setDate(event.target.value) }} />
            {isInFlight ? <div></div> : (<button onClick={submitProject}>Submit</button>)}
        </div>
    )
}
