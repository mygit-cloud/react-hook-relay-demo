// import { graphql, useMutation } from 'react-relay';



// export default function CreateProjectMutation(content, leader, startDate, callback) {
//   console.log("fake CreateProjectMutation");
//     const [commit, isInFlight] = useMutation(graphql`
//   mutation CreateProjectMutation($input:createProjectInput!) {
//       createProject(input:$input) {
//         project {
//           id
//           content
//           leader
//         }
//       } 
//     }
//   `)

//     const variables = {
//       input: {
//         content,
//         leader,
//         startDate,
//       }
//     }

//     commit({
//       variables,
//       onCompleted: () => {
//         callback();
//       },
//     }
//     )
// }