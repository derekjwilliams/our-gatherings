const pg = require('pg')
const express = require('express')
const { postgraphile } = require('postgraphile')
const ConnectionFilterPlugin = require('postgraphile-plugin-connection-filter')
//const PostgisPlugin =  require("@graphile/postgis")
//const PgConnectionFilterPostgisPlugin = require("postgraphile-plugin-connection-filter-postgis");
//const { default: FederationPlugin } = require("@graphile/federation")
const PgManyToManyPlugin = require("@graphile-contrib/pg-many-to-many");
require('dotenv').config()
const app = express()

const pgPool = new pg.Pool({
  connectionString: (process.env.DATABASE_URL || 'postgres://postgres:postgres416@localhost:5432/gather'),
})

app.use(
  postgraphile(
    pgPool,
    process.env.SCHEMA_NAMES ? process.env.SCHEMA_NAMES.split(',') : ['event'],
    {
      appendPlugins: [PgManyToManyPlugin, ConnectionFilterPlugin],
      graphileBuildOptions: {
        connectionFilterRelations: true,
      },    
      watchPg: true,
      graphiql: true,
      enhanceGraphiql: true,
      dynamicJson: true,
      enableCors: true,
      allowExplain(req) {
        return true
      },
    }
  )
)
const port = process.env.PORT || 5000
app.listen(port)
console.log(`🚀 Server ready at http://[host]:${port}/graphql`)
console.log(`🚀 Graphiql UI ready at http://[host]:${port}/graphiql`)