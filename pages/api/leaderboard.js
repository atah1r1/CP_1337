import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("Users_db");
    switch (req.method) {
        case "GET":
            const allLeaderboard = await db.collection("Leaderboard").find({}).toArray();
            res.json({ status: 200, data: allLeaderboard });
            break;
    }
}
