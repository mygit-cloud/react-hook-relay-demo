import React from 'react';
import { graphql, usePaginationFragment } from 'react-relay';
import Engineer from './Engineer';

export default function EngineerList(props) {
    const {
        data,
        loadNext,
        hasNext,
      } = usePaginationFragment(
        graphql`
        fragment EngineerList_engineers on Query 
        @refetchable(queryName: "EngineerListPaginationQuery"){
            engineers (first:$count, after:$cursor) 
            @connection(key:"EngineerList_engineers_engineers"){
                __id
                edges {
                    node {
                        id
                        ...Engineer_engi
                    }
                }
            }
        }
        `,
        props.engineers,
    );    

    // const connectionID = data.engineers.__id
    
    return (
        <div>
            {data.engineers.edges.map(
                ({node}) => 
                node && <Engineer  key={node.id} engi={node}/>
            )}
            {hasNext && <button onClick={() => loadNext(4)}>Next</button>}
        </div>
    )
}