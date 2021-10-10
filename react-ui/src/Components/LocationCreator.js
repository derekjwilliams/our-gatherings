import { gql, useMutation } from '@apollo/client';

// Define mutation
const CREATE_LOCATION = gql
`mutation CreateLocation($newLocation: CreateLocationInput!) {
  createLocation(input: $newLocation) {
    location {
      name
    }
  }
}`;
// `mutation CreateLocation($newLocation: CreateLocationInput!) {
//   createLocation(input: $newLocation) {
//     location {
//       name
//     }
//   }
// }`;

function LocationCreator() {
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
            } 
          });
          nameInput.value = '';
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
    </div>
  );
}

export default LocationCreator;