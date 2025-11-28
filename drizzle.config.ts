import {defineConfig} from 'drizzle-kit'
import dotenv from 'dotenv';
dotenv.config({path: '.env'});

export default defineConfig({
    dialect: "mysql", 
    out: './drizzle',
    schema: './src/db/schema.ts',
    dbCredentials: {
        host: process.env.DB_HOST!,
        port: Number(process.env.DB_PORT),
        user: process.env.DB_USER!,
        password: process.env.DB_PASSWORD!,
        database: process.env.DB_NAME!,
        ssl: {
            rejectUnauthorized: false,
        },
    },
    verbose: true,
    strict: true
})
