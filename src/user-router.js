import Router from "../router/Router.js";

export const userRouter = new Router()

const users = [
    {id : 1, name: 'Nastya'},
    {id : 2, name: 'Alina'},
]
userRouter.get('/users', (req,res) => {
    if (req.params.id) {
        return res.end(JSON.stringify(users.find(user => user.id == req.params.id)))
    }
    res.end(JSON.stringify(users))
})

userRouter.post('/users', (req,res) => {
    const user = req.body
    users.push(user)
    res.end(JSON.stringify(users))
})

