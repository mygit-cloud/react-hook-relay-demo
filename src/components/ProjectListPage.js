import React, { Suspense } from 'react';
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

    // useEffect(() => {
    //     loadQuery();
    // });

    if (queryRef === null) {
        loadQuery();
    }

    return (
        <div>
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