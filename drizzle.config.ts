import type {Config} from 'drizzle-kit'
import * as dotenv from 'dotenv'
import { PgSchema } from 'drizzle-orm/pg-core'
dotenv.config({ path: '.env' })

if(!process.env.DATABASE_URL){
    console.log('Cannot find the url')
}

export default {
    dialect: "postgresql"
    schema: '.src/lib/supabase/schema.ts',
    out: './migrations',
    driver: 'pg',
    dbCredentials: {
        url: process.env.DATABASE_URL || '',
    },
} satisfies Config;