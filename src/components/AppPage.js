import React, { useState } from 'react';
import { graphql, usePreloadedQuery } from 'react-relay';
import ProjectList from "./Project/ProjectList"
import EngineerList from './Engineer/EngineerList';

export default function AppPage(props) {
    const ProjectPage = "ProjectPage"
    const EngineerPage = "EngineerPage"
    const [page, setPage] = useState(ProjectPage);

    //todo add engineers
    const data = usePreloadedQuery(
        graphql`
        query AppPageQuery ($count:Int, $cursor:String) {
            ...ProjectList_projects
            ...EngineerList_engineers
          }`,
        props.queryRef,
    );

    return (

        <div>
            App page
            {page === ProjectPage && 
            <div>
            <button onClick={() => setPage(EngineerPage)}>Engineer</button>
            <ProjectList projects={data} />
            </div>
            }
            {page === EngineerPage &&
            <div>
                <button onClick={() => setPage(ProjectPage)}>Project</button>
                <EngineerList engineers={data} />
            </div>
            }  
        </div>
    )
}