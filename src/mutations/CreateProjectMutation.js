import { graphql, useMutation } from 'react-relay';

export default (content, leader, startDate, callback) => {
    const [commit] = useMutation(graphql`
    mutation CreateProjectMutation($input:createProjectInput!) {
        createProject(input:$input) {
          project {
            id
            content
            leader
          }
        } 
      }
    `)

    const variables = {
        input: {
            content,
            leader,
            startDate,
        }
    }

    commit({
        variables,
        onCompleted: () => {
            callback();
        },
    }
    )
}