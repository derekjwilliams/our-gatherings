import React, {useState, useEffect} from 'react';
import { gql, useMutation } from '@apollo/client';

const CREATE_GATHERING = gql`
mutation CreateGathering($name: String!, $description: String) {
  createGathering(
    input: { 
      gathering: { 
        name: $name 
        description: $description 
      } 
    }
  ) {
    gathering {
      name
      description
    }
  }
}`;


const GatheringCreator = () => {

    const [createGathering, { data, loading, error }] = useMutation(CREATE_GATHERING);
    const [isSaveDisabled, setIsSaveDisabled] = useState(true);

    const [values, setValues] = useState({
        name: '',
        description: ''
      });


    const setFormStateValues = target => {
      const values = {[target.name]: target.value};
      //setValues(prevState => ({
      //    ...prevState, ...values
      //}));
    }
    
    const handleInputChange = e => {
      e.preventDefault();
      setFormStateValues(e.target)
    }

    const handleSubmit = e => {
      e.preventDefault();
      const gatheringName = document.getElementById("gatheringName").value;

      createGathering({variables: 
                    {
                      name: gatheringName,
                      description: 'test'
                    }
                  });

    }

    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;

    return (
        <div>
          <form onSubmit={handleSubmit}>
            <div>
            
                <label for="gatheringName">Name:</label>
                <input
                name="gatheringName"
                id="gatheringName"
                //value={values.name}
                onChange={handleInputChange} 
                />
            </div>
            <div>
                <label for="gatheringDescription">Description:</label>
                <input
                name="gatheringDescription"
                //value={values.description}
                onChange={handleInputChange} 
                />
            </div>


            <button name="save" type='submit' aria-label='save-gathering'>Save</button>
          </form>
        </div>
      );
}
export default GatheringCreator;