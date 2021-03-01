import { credentials } from "grpc";
import { UsersClient } from "./proto/users_grpc_pb";
import { User, Empty } from "./proto/users_pb";

const client = new UsersClient("localhost:3333", credentials.createInsecure())

const getAllUsers = () => {
    const stream = client.getUsers(new Empty())
    stream.on("data", (data: User) => {
        console.log(`${data.getId()} - ${data.getName()} - ${data.getEmail()}`)
    })
}

const createNewUser = () => {
    const newUser = new User()
    newUser.setId(1)
    newUser.setName("Jon Does")
    newUser.setEmail("jondoe@email.com")
    client.createUser(newUser, (e, data: User) => {
        console.log(`${data.getId()} - ${data.getName()} - ${data.getEmail()}`)
    })
}

const createUserStream = () => {
    const newUser = new User()
    newUser.setId(1)
    newUser.setName("Jon Does")
    newUser.setEmail("jondoe@email.com")

    const stream = client.createUserStream()
    const users = [newUser]

    users.forEach(u => stream.write(u))
    stream.end()
    stream.on("data", (data) => {
        console.log(data)
    })
    stream.on("end", () => stream.end())
}

createNewUser()
createNewUser()
createNewUser()
getAllUsers()