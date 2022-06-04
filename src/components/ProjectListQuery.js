import React from 'react';
import { graphql, usePreloadedQuery } from 'react-relay';
import ProjectList from "./ProjectList"

export default function ProjectListQuery(props) {
    const data = usePreloadedQuery(
        graphql`
        query ProjectListQuery {
            projects {
              ...ProjectList_projects
            }
          }`,
        props.queryRef,
    );

    return (
        <div>
            <ProjectList projects={data.projects} />
        </div>
    )
}