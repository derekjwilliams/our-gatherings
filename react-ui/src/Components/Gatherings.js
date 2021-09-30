import React from "react";
import { useQuery, gql } from "@apollo/client";
import GatheringDetail from "./GatheringDetail"

const allGatheringsQuery = gql`
  query {
    allGatherings {
      nodes {
        id
        name
        description
      }
    }
  }
`;  

const Gatherings = () => {
  const { loading, error, data } = useQuery(allGatheringsQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="Gatherings-list">
        {data.allGatherings.nodes.map((gathering) => (
          <GatheringDetail key={gathering.id} gathering={gathering}></GatheringDetail>
         )
        )
        }
    </div>
  );
};

export default Gatherings;
