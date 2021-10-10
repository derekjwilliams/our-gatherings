import { gql, useMutation } from '@apollo/client';
import Locations from './Locations';
import { GET_LOCATIONS} from '../Queries/LocationsQuery';

const CREATE_LOCATION = gql
  `mutation CreateLocation($newLocation: CreateLocationInput!) {
  createLocation(input: $newLocation) {
    location {
      name
    }
  }
}`;

const LocationCreator = () => {
  let nameInput;
  let descriptionInput;
  const [createLocation, { data, loading, error }] = useMutation(CREATE_LOCATION);

  if (loading) return 'Submitting New Location...';
  if (error) return `Submission error! ${error.message}`;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          createLocation({
            variables: {
              newLocation: {
                location: {
                  name: nameInput.value,
                  description: descriptionInput.value
                }
              }
            },
            refetchQueries: [GET_LOCATIONS]
          });
          nameInput.value = '';
          descriptionInput.value = '';
        }}
      >
        <input
          ref={node => {
            nameInput = node;
          }}
        />
        <input
          ref={node => {
            descriptionInput = node;
          }}
        />
        <button type="submit">Add Location</button>
      </form>
      <Locations></Locations>
    </div>
  );
}

export default LocationCreator;