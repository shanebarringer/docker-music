#!/bin/bash

echo "setting up the database"
knex migrate:latest --env development
knex seed:run --env development