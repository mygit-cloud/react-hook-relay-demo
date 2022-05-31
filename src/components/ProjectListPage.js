import React, {useCallback, Suspense} from 'react';
import {useQueryLoader} from 'react-relay';

import Loading from './Loading';
import ErrorBoundary from './ErrorBoundary';
import ProjectListQueryQL from './__generated__/ProjectListQuery.graphql';
import ProjectListQuery from './ProjectListQuery';

export default function ProjectListPage(props) {
    const [queryRef, loadQuery] = useQueryLoader(ProjectListQueryQL)

    const handleClick = useCallback(() => {
        // Load the query in the event handler, onClick
        loadQuery({id: props.projectID})
      }, [loadQuery, props.projectID]);

    return (
        <div>
            <button onClick={handleClick}> Load data</button>
            {
                queryRef != null ?
                <div>
                   <ProjectListQuery queryRef={queryRef}/>
                </div> 
                : null
            }
        </div>
    )
}