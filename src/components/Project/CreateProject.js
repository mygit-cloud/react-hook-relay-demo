import React, { useState } from 'react';
import { graphql, useMutation } from 'react-relay';

export default function CreateProject(props) {
    const [leader, setLeader] = useState("");
    const [content, setContent] = useState("");
    const [date, setDate] = useState("");
    const [commit, isInFlight] = useMutation(graphql`
    mutation CreateProjectMutation(
        $connections: [ID!]!
        $input:createProjectInput!
        ) {
        createProject(input:$input) {
          project @appendNode(connections: $connections,edgeTypeName:"ProjectEdge"){
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
            },
            connections: [props.connectionID],
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
            //用@appendNode 替代
            // updater: (store) => {
                // const rootField = store.get('client:root');
                // const connection = store.get(props.connectionID);
                // window.connection = connection;
                // const oldEdges = rootField.getLinkedRecord('projects').getLinkedRecords('edges');
                // const payload = store.getRootField('createProject');
                // const newProject = payload.getLinkedRecord('project');
                // const newID = payload.getDataID();
                // const newEdge = store.create('edge'+ newID, 'ProjectEdge');
                // newEdge.getOrCreateLinkedRecord('node', 'Project');
                // newEdge.setLinkedRecord(newProject, 'node');
                // const newEdges = [newEdge, ...oldEdges];
                // rootField.getLinkedRecord('projects').setLinkedRecords(newEdges, 'edges');
            // },
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
