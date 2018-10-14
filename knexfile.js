const db = "docker-music";
const path = require("path");

module.exports = {
  development: {
    client: "pg",
    debug: false,
    connection: {
      host: "postgres",
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      user: process.env.DB_USER,
      charset: "utf8"
    },
    pool: { min: 0, max: 10 },
    migrations: {
      directory: path.join("db", "migrations")
    },
    seeds: {
      directory: path.join("db", "seeds")
    }
  },

  test: {
    client: "pg",
    connection: {
      host: "postgres",
      database: `${db}_test`,
      charset: "utf8"
    },
    migrations: {
      directory: path.join("db", "migrations")
    },
    seeds: {
      directory: path.join("db", "seeds")
    }
  },

  production: {
    client: "pg",
    connection: {
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD
    },
    migrations: {
      directory: path.join("db", "migrations")
    },
    seeds: {
      directory: path.join("db", "seeds")
    }
  }
};
