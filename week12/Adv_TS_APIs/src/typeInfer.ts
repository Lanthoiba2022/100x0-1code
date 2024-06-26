
import {z} from 'zod';
import express from "express";

const app = express();

const userProfileSchema = z.object({
    name: z.string().min(1,{message: "Name cannot be empty"}),
    email: z.string().email({message: "Invalid email format"}),
    age: z.number().min(18, {message: "yoy must be atleast 18 years old"}).optional()
});

app.put("/user", (req,res) => {
    const{ success } = userProfileSchema.safeParse(req.body);
    const updateBody: z.infer<typeof userProfileSchema> = req.body;

    if(!success){
        res.status(411).json({});
    }

    res.json({
        message: "User updated"
    })
});

console.log("app is listening");
app.listen(3000);

