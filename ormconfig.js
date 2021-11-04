const dbConfig = {
  name: 'default',
  type: 'sqlite',
  database: process.env.DB_DATABASE || './db/data/test.sqlite',
  entities: [__dirname + (process.env.ENTITIES_PATH || '/dist/**/*.entity.js')],
  migrations: [process.env.MIGRATION_PATH || '/src/migrations/*.js'],
  seeds: [__dirname + (process.env.DB_SEEDS || '/dist/seeds/**/*.js')],
  logging: false,
  synchronize: false,
  autoLoadEntities: false,
};
module.exports = dbConfig;