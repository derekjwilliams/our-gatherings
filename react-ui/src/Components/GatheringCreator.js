import React from "react";
import { gql, useMutation } from '@apollo/client';

const CREATE_GATHERING = gql`
  mutation CreateGathering($newGathering: CreateGatheringInput!) {
    createGathering(input: $newGathering) {
      gathering {
        name
        description
      }
    }
  }
`;


const GatheringCreator = ({gathering}) => {

    let input;
    const [createGathering, { data, loading, error }] = useMutation(CREATE_GATHERING);
    
    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;

    return (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              createGathering({ variables: 
                { 
                  newGathering: {
                    gathering: {
                        name: input.value,
                        description: "just this for now"
                     }
                  }
             } });          
              input.value = '';
            }}
          >
            <div>
                <label for="gatheringName">Name:</label>
                <input
                name="gatheringName"
                id="gatheringName"
                ref={node => {
                    input = node;
                }}
                />
            </div>
            <div>
                <label for="gatheringDescription">Description:</label>
                <input
                name="gatheringDescription"
                id="gatheringDescription"
                ref={node => {
                    input = node;
                }}
                />
            </div>


            <button type="submit">Create Gathering</button>
          </form>
        </div>
      );
}
export default GatheringCreator;