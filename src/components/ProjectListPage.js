import React, { useCallback, Suspense } from 'react';
import { useQueryLoader } from 'react-relay';
import { ErrorBoundary } from 'react-error-boundary'

import Loading from './Loading';

import ProjectListQueryQL from './__generated__/ProjectListQuery.graphql';
import ProjectListQuery from './ProjectListQuery';

function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
        </div>
    )
}

export default function ProjectListPage(props) {
    const [queryRef, loadQuery] = useQueryLoader(ProjectListQueryQL)

    const handleClick = useCallback(() => {
        // Load the query in the event handler, onClick
        loadQuery()
    }, [loadQuery]);


    return (
        <div>
            <button onClick={handleClick}> Load data</button>
            {
                queryRef != null ?
                    <div>
                        <ErrorBoundary FallbackComponent={ErrorFallback}  >
                            <Suspense fallback={<Loading />}>
                                <ProjectListQuery queryRef={queryRef} />
                            </Suspense>
                        </ErrorBoundary>
                    </div>
                    : null
            }
        </div>
    )
}