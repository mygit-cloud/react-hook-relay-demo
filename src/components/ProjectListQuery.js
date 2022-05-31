import React from 'react';
import { graphql, usePreloadedQuery } from 'react-relay';

export default function ProjectListQuery(props) {
    const data = usePreloadedQuery(
        graphql`
        query ProjectListQuery($id:ID!) {
            project(id:$id) {
              id
              leader
            }
          }`,
        props.queryRef,
    );
    return <h1>{data.project.id} - {data.project.leader}</h1>
}