import React from "react";

import { gql, useQuery } from '@apollo/client';

const GET_LOCATIONS = gql`
  {
    allParticipants {
    	nodes {
				id
        name
      }
    }
  }
`

function Participants(props) {
	const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div name="dog">
      {data.allParticipants.nodes.map(v => (
        <div key={v.id}>
          {v.name}
        </div>
      ))}
    </div>
  );
}


export default Participants;