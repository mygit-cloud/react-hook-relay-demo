import React from 'react';
import { graphql, usePaginationFragment } from 'react-relay';
import Project from "./Project"
import CreateProject from "./CreateProject";

export default function ProjectList(props) {
    const {
        data,
        loadNext,
        hasNext,
      } = usePaginationFragment(
        graphql`
        fragment ProjectList_projects on Query 
        @refetchable(queryName: "ProjectListPaginationQuery"){
            projects (first:$count, after:$cursor) 
            @connection(key:"ProjectList_projects_projects"){
                __id
                edges {
                    node {
                        id
                        ...Project_proj
                    }
                }
            }
        }
        `,
        props.projects,
    );
    
    const connectionID = data.projects.__id

    // todo 这里删除的时候根据projectid只能删除node，但是边还在，还会render，所以
    //加上了node的判断。不知道这么处理是否可行？？
    return (
        <div>

            {data.projects.edges
                // .filter(node => !!node)
                .map(({ node }) =>
                    node && <Project key={node.id} proj={node} />
                )}
                {hasNext && <button onClick={() => loadNext(4)}>Next</button>}
            <CreateProject connectionID={connectionID}/>
        </div>
    )


}