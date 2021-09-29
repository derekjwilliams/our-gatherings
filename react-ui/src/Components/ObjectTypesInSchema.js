import React from "react";

import { gql, useQuery } from '@apollo/client';

const GET_SCHEMA = gql`
fragment FullType on __Type {
  kind
  name
  description
  fields(includeDeprecated: true) {
    name
    description
    args {
      ...InputValue
    }
    type {
      ...TypeRef
    }
    isDeprecated
    deprecationReason
  }
  inputFields {
    ...InputValue
  }
  interfaces {
    ...TypeRef
  }
  enumValues(includeDeprecated: true) {
    name
    description
    isDeprecated
    deprecationReason
  }
  possibleTypes {
    ...TypeRef
  }
}
fragment InputValue on __InputValue {
  name
  description
  type {
    ...TypeRef
  }
  defaultValue
}
fragment TypeRef on __Type {
  kind
  name
  ofType {
    kind
    name
    ofType {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
              }
            }
          }
        }
      }
    }
  }
}


query IntrospectionQuery {
  __schema {
    queryType {
      name
    }
    types {
      ...FullType
    }
    directives {
      name
      description
      locations
      args {
        ...InputValue
      }
    }
  }
}
`

function ObjectTypesInSchema(props) {
	const { loading, error, data } = useQuery(GET_SCHEMA);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  // get the types with kind of "object", exclude the connections

  const ObjectsInSchemaElements = data.__schema.types.filter(t => t.kind === 'OBJECT' && 
                                                             !t.name.includes('Connection') && 
                                                             t.name !== 'Mutation' &&
                                                             t.name !== 'Query' &&
                                                             t.name.substr(0,2) !== '__' &&
                                                             !t.name.includes('Payload') &&
                                                             t.name != 'PageInfo')
  const TopObjects = ObjectsInSchemaElements.filter(e => {
    const isNodes = e.fields.find(f => {
      // console.log(f.)
      return f.name === 'cursor'
    })


    if (isNodes) {
      return false
    }
    return true

  })
  //TODO check for undefined


	return (
    <div name="objects-in-schema">
      {TopObjects.map((e,i,a) => {
        return (
          <div key={i}>
            <div>
              {e.name}
            </div>
            <div>
              {e.kind}
            </div>
            <div>
              {e.description}
            </div>
            <hr></hr>
          </div>
        )
      })}
    </div>
  )
}


export default ObjectTypesInSchema;