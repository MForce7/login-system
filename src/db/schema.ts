import { text, mysqlEnum, mysqlTable } from "drizzle-orm/mysql-core";
import { nanoid } from "nanoid";

export const users_table = mysqlTable("users", {
    id: text("user_id").primaryKey().$default(() => nanoid()),
    name: text("name"),
    email: text("email").notNull().unique(),
    password: text("password").notNull(),
    role : mysqlEnum("role", ['admin', 'user']).notNull().default('user'),
});
