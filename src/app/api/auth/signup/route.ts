import { db } from "@/db/db";
import { users_table } from "@/db/schema";

export async function POST(request: Request) {
    const { name, email, password } = await request.json(); 
    try {
        const existingUser = await db.select().from(users_table).where(users_table.email.eq(email));
        if (existingUser.length > 0) {
            return new Response(JSON.stringify({ message: "User already exists" }), { status: 409 });
        }


        await db.insert(users).values({ name, email, password });
        return new Response(JSON.stringify({ message: "User registered successfully" }), { status: 201 });
    }
    catch (error) {
        return new Response(JSON.stringify({ message: "Internal Server Error" }), { status: 500 });
    }   
}