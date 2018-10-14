#!/bin/bash

echo "waiting for db connection"
sleep 5

echo "resetting the database"
knex migrate:rollback
knex migrate:latest --env development
knex seed:run --env development

echo "starting the server"
npm run dev
