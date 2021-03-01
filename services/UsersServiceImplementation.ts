import { sendUnaryData, ServerDuplexStream, ServerUnaryCall, ServerWritableStream } from "grpc";
import { IUsersServer } from "../proto/users_grpc_pb";
import { Empty, User } from "../proto/users_pb";


class UsersServiceImplementation implements IUsersServer {
    private users: User[] = []

    private passToObject({ email, name }: Omit<User.AsObject, "id">) {
        const newUser = new User()
        newUser.setId(this.users.length + 1)
        newUser.setName(name)
        newUser.setEmail(email)

        return newUser
    }

    public async createUser(
        call: ServerUnaryCall<User>,
        callback: sendUnaryData<User>
    ): Promise<void> {
        const newUser = this.passToObject({ name: call.request.getName(), email: call.request.getEmail() })

        this.users.push(newUser)

        callback(null, newUser)
    }

    public async getUsers(
        call: ServerWritableStream<Empty, User>
    ): Promise<void> {
        this.users.forEach(u => call.write(u))
        call.end()
    }

    public async createUserStream(
        call: ServerDuplexStream<User, User>,
    ): Promise<void> {
        call.on("data", (data) => {
            const newUser = this.passToObject({ name: data.getName(), email: data.getEmail() })

            this.users.push(newUser)

            call.write(newUser)
        })

        call.on("end", () => call.end())
    }

}

export { UsersServiceImplementation }
