import React from "react";
import { useQuery, gql } from "@apollo/client";
import LocationDetail from "./LocationDetail"

const allLocationsQuery = gql`
  query {
    allLocations {
      nodes {
        id
        name
        description
      }
    }
  }
`;  

const Locations = () => {
  const { loading, error, data } = useQuery(allLocationsQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="locations-list">
        {data.allLocations.nodes.map((location) => (
          <LocationDetail key={location.id} location={location}></LocationDetail>
         )
        )
        }
    </div>
  );
};

export default Locations;
