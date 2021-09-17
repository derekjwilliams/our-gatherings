# Our Gatherings 

Simple Postgraphile based graphQL API for managing gatherings, AKA events


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

