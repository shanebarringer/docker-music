#!/bin/bash

echo "resetting the database"
knex migrate:rollback
knex migrate:latest --env development
knex seed:run --env development