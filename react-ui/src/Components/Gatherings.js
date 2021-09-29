import React from "react";

import { gql, useQuery } from '@apollo/client';

const GET_GATHERINGS = gql`
  {
    allGatherings {
    	nodes {
				id
        name
      }
    }
  }
`

function Gatherings(props) {
	const { loading, error, data } = useQuery(GET_GATHERINGS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

	return (
    <div name="dog">
      {data.allGatherings.nodes.map(v => (
        <div key={v.id}>
          {v.name}
        </div>
      ))}
    </div>
  );
}


export default Gatherings;