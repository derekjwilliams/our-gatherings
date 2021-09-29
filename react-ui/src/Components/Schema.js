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

function Schema(props) {
	const { loading, error, data } = useQuery(GET_SCHEMA);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  // get the QueryType, typically the zeroith element

  const QueryTypeElement = data.__schema.types.find(t => t.name === 'Query')
  // check for undefined

	return (
    <div name="schema">
      {QueryTypeElement.fields.map((e,i,a) => {
        const fieldNameIsAll = e.name.substr(0,3) === 'all'
        if (fieldNameIsAll) {
          const fieldName = e.name.substr(3)
          const fieldTypeName = e.type.name
          if (fieldName + 'Connection' === fieldTypeName) { // find the matching type, e.g. Gathering
            //console.log(data.__schema.types)

            // find the Connection in the fields

            const ConnectionsType = data.__schema.types.filter(t => t.name === fieldTypeName) // e.g. GatheringsConnections
            // a.map(v => {
            //   console.log()
            // })
          }
        }
        //if (e.type.name === "Gathering")
        return (
          <div key={i}>
            <div>
              {e.name}
            </div>
            <div>
              {e.description}
            </div>
            <div>
              {e.type.name}
            </div>
            <hr></hr>
          </div>
        )
      })}
    </div>
  )

	// return (
  //   <div name="schema">
  //     {data.__schema.types[0].fields.map((e,i,a) => {
  //       const fieldNameIsAll = e.name.substr(0,3) === 'all'
  //       if (fieldNameIsAll) {
  //         const fieldName = e.name.substr(3)
  //         const fieldTypeName = e.type.name
  //         if (fieldName + 'Connection' === fieldTypeName) { // find the matching type, e.g. Gathering
  //           console.log(data.__schema.types)

  //           // find the Connection in the fields
  //           // a.map(v => {
  //           //   console.log()
  //           // })
  //         }
  //       }
  //       if (e.type.name === "Gathering")
  //       return (
  //         <div key={i}>
  //           <div>
  //             {e.name}
  //           </div>
  //           <div>
  //             {e.description}
  //           </div>
  //           <div>
  //             {e.type.name}
  //           </div>
  //           <hr></hr>
  //         </div>
  //       )
  //     })}
  //   </div>
  // )
}


export default Schema;