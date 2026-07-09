const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();

// In-memory array
const users = [];

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());


app.get("/", (req, res) => {
    res.render("index");
});

// Signup
app.post("/create", async (req, res) => {
    const { username, email, password, age } = req.body;

    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        return res.send("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
        username,
        email,
        password: hashedPassword,
        age
    };

    users.push(newUser);

    const token = jwt.sign(
        { email: newUser.email },
        "shhhhhhhhhhhh",
        { expiresIn: "1h" }
    );

    res.cookie("token", token);

    res.send({
        message: "User Created Successfully",
        user: newUser
    });
});


app.get("/login", (req, res) => {
    res.render("login");
});


app.post("/login", async (req, res) => {

    const { email, password } = req.body;

    const user = users.find(user => user.email === email);

    if (!user) {
        return res.send("User not found");
    }

    const result = await bcrypt.compare(password, user.password);

    if (!result) {
        return res.send("Invalid Password");
    }

    const token = jwt.sign(
        { email: user.email },
        "shhhhhhhhhhhh",
        { expiresIn: "1h" }
    );

    res.cookie("token", token);

    res.send("Login Successful");
});


function verifyToken(req, res, next) {

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).send("Please Login First");
    }

    try {
        const data = jwt.verify(token, "shhhhhhhhhhhh");
        req.user = data;
        next();
    } catch (err) {
        return res.status(403).send("Invalid Token");
    }
}


app.get("/profile", verifyToken, (req, res) => {
    res.send(`Welcome ${req.user.email}`);
});

app.get("/logout", (req, res) => {
    res.cookie("token", "");
    res.redirect("/");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});