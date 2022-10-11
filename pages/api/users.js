import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("Users_db");
    switch (req.method) {
        case "POST":
            let Userobj = await db.collection("User").insertOne(req.body);
            res.json(Userobj);
            break;
        case "GET":
            const allPosts = await db.collection("User").find({}).toArray();
            res.json({ status: 200, data: allPosts });
            break;
    }
}
