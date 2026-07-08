const express = require('express');
const fs = require('fs')
const users = require('./users.json');
const app = express();
const PORT = 8000;

// POST → Naya user add karta hai.
// PUT → Pura user replace/update karta hai.
// PATCH → Sirf jo fields bhejo, unko update karta hai.
// DELETE → User delete karta hai.


//middleware - plugin
app.use(express.urlencoded({ extended: false }));

// Routes

app.get('/users', (req, res) => {
    const html = `
    <ul>
    ${users.map((user) => `<li>${user.title}</li>`).join("")}
    </ul>
    `;
    res.send(html);

});

//REST API
app.get("/api/users", (req, res) => {
    return res.json(users);
})
app
    .route("/api/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.json(user);
    })

    .put((req, res) => {
        const id = Number(req.params.id);
        const body = req.body;
        const index = users.findIndex((user) => user.id === id);
        users[index] = { id: id, ...body};
        fs.writeFile("./users.json", JSON.stringify(users), (err) => {
            return res.json({ status: "Success" });
        });
    })

    // .patch((req,res)=>{
    //     //edit user with id
    //    return res.json({status:"Pending"});
    // })

    .patch((req, res) => {
        const id = Number(req.params.id);
        const body = req.body;

        const index = users.findIndex((user) => user.id === id);
        users[index] = { ...users[index], ...body };

        fs.writeFile("./users.json", JSON.stringify(users), (err) => {
            return res.json({ status: "Success" });
        });
    })

    .delete((req, res) => {
        const id = Number(req.params.id);

        const newUsers = users.filter((user) => user.id !== id);

        fs.writeFile("./users.json", JSON.stringify(newUsers), (err) => {
            return res.json({ status: "Success" });
        });
    })

// .delete((req,res)=>{
//     // delete user with id
//    return res.json({status:"Pending"});
// });

app.post('/api/users', (req, res) => {
    const body = req.body;
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile('./users.json', JSON.stringify(users), (err, data) => {
        return res.json({ status: "success", id: users.length });
    })
})


app.listen(PORT, () => console.log(`Server Started at Port:${PORT}`))
