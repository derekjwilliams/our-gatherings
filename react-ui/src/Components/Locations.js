import React from "react";

import { gql, useQuery } from '@apollo/client';
import { GET_LOCATIONS} from '../Queries/LocationsQuery';

function Locations(props) {
	const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div name="locations">
      {data.allLocations.nodes.map(location => (
        <div class="location">
        <span key={location.id}>
          {location.name}, 
        </span>
        <span key={location.description}>
          {location.description}
        </span>
      </div>
    ))}
    </div>
  );
}


export default Locations;