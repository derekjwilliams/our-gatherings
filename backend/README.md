# Our Gatherings 

Simple Postgraphile based graphQL API for managing gatherings, AKA events

## Installing

The usual: 

```npm install```

## Running

```node server.js```

## Environment File

Copy the `env.example` file to `.env`.  Update the DATABASE_URL to reflect the correct database URL

## Postgraphile Plugins Used

Many To Many

https://github.com/graphile-contrib/pg-many-to-many

Connection Filter

https://github.com/graphile-contrib/postgraphile-plugin-connection-filter


Postgis

https://github.com/graphile/postgis


Postgis Filter

https://github.com/graphile-contrib/postgraphile-plugin-connection-filter-postgis


## SQL Schema

Found in the most obvious place, `schema.sql`.  Update to your liking, modify `.env` to match


## GraphQL Examples

### Queries

```
query {
  allGatherings {
    nodes {
      id
      description
      startTime
      endTime
      gatheringParticipantsByGatheringId {
        nodes {
          participantByParticipantId {
            name
            id
          }
        }
      }
    }
  }
}
```

## Mutations

### Create a Participant
```
mutation CreateParticipant($newParticipant: CreateParticipantInput!) {
  createParticipant(input: $newParticipant) {
    participant {
      name
    }
  }
}
```

QUERY VARIABLES:

```json
{
  "newParticipant": {
    "participant": {
       "name": "Ringo Starr"
    }
  }
}
```

### Create a Gathering

```
mutation CreateGathering($newGathering: CreateGatheringInput!) {
  createGathering(input: $newGathering) {
    gathering {
      name
      description
    }
  }
}
```

QUERY VARIABLES:

```json
{
  "newGathering": {
    "gathering": {
       "name": "Find Your Special Purpose",
       "description": "Is it making eyeglass accessories?"
    }
  }
}
```

## Add a Participant to a Gathering

```
mutation AddGatheringParticipant($gatheringParticipant: CreateGatheringParticipantInput!) {
  createGatheringParticipant(input: $gatheringParticipant) {
    gatheringParticipant {
      participantId
      gatheringId
    }
  }
}
```

QUERY VARIABLES:

```json
{
  "gatheringParticipant": {
    "gatheringParticipant": {
       "participantId": "67cbb3a3-daa2-4922-a8b6-227a39c0cb5d",
       "gatheringId": "c67df2c5-27d7-4ca6-b415-f02b28970455"
    }
  }
}
```

*Note: The ids above will be different for each database, query the Participants and Gatherings to get the ids*