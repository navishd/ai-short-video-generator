import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  out: "./drizzle",
    dbCredentials: {
    url: 'postgresql://neondb_owner:npg_6mdw5vtTIejq@ep-bold-recipe-adeljgf4-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
  }
});
