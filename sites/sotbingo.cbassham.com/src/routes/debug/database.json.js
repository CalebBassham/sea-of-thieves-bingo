import {sql} from "$lib/database.server.js";

export async function GET() {
    try {
        await sql`SELECT 1`
        return {
            body: {
                status: "successfully pinged database"
            }
        }
    } catch (err) {
        console.error(err)
        return {
            status: 500
        }
    }
}