import React, { Suspense } from 'react';
import { useQueryLoader } from 'react-relay';
import { ErrorBoundary } from 'react-error-boundary'
import Loading from './Loading';
import AppPageQuery from "./__generated__/AppPageQuery.graphql"
import AppPage from './AppPage';

function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
        </div>
    )
}

export default function App() {
    const [queryRef, loadQuery] = useQueryLoader(AppPageQuery)

    if (queryRef === null) {
        const variables = {
            count: 4
        };

        loadQuery(
            variables
        );
    }

    return (
        <div>
            {
                queryRef != null ?
                    <div>
                        App
                        <ErrorBoundary FallbackComponent={ErrorFallback}  >
                            <Suspense fallback={<Loading />}>
                                <AppPage queryRef={queryRef} />
                            </Suspense>
                        </ErrorBoundary>
                    </div>
                    : null
            }
        </div>
    )

}