// import React from 'react';
// import { graphql, usePaginationFragment } from 'react-relay';
// import EngineerProject from './EngineerProject';

// export default function EngineerProjects(props) {
//     const {
//         data,
//         loadNext,
//         hasNext,
//       } = usePaginationFragment(graphql`
//       fragment EngineerProjects_projects on Engineer 
//       @refetchable(queryName: "EngineerProjectsPaginationQuery"){
//           projects (first:$count, after:$cursor) 
//           @connection(key:"EngineerProjects_projects_projects"){
//               __id
//               edges {
//                   node {
//                       id
//                       ...EngineerProject_proj
//                   }
//               }
//           }
//       }
//       `, props.projects)

//       const connectionID = data.projects.__id
//       return (
//         <div>
//             {data.projects.edges
//                 // .filter(node => !!node)
//                 .map(({ node }) =>
//                     node && <EngineerProject key={node.id} proj={node} />
//                 )}
//                 {hasNext && <button onClick={() => loadNext(4)}>Next</button>}
//         </div>
//     )

// }