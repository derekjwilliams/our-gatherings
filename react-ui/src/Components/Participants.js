import React from "react";
import { useQuery, gql } from "@apollo/client";
import ParticipantDetail from "./ParticipantDetail"

const allParticipantsQuery = gql`
  query {
    allParticipants {
      nodes {
        id
        name
      }
    }
  }
`;  

const Participants = () => {
  const { loading, error, data } = useQuery(allParticipantsQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="locations-list">
        {data.allParticipants.nodes.map((participant) => (
          <ParticipantDetail key={participant.id} participant={participant}></ParticipantDetail>
         )
        )
        }
    </div>
  );
};

export default Participants;
