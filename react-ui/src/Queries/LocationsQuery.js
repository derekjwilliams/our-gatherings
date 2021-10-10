import { gql, useMutation } from '@apollo/client';

export const GET_LOCATIONS = gql`
  {
    allLocations {
    	nodes {
				id
        name
        description
      }
    }
  }
`