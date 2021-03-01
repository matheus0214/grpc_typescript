import { Server, ServerCredentials } from "grpc";

import { UsersService } from "./proto/users_grpc_pb";
import { UsersServiceImplementation } from "./services/UsersServiceImplementation";

const server = new Server()
server.addService(UsersService, new UsersServiceImplementation())

server.bind("localhost:3333", ServerCredentials.createInsecure())

console.log("Server is running")

server.start()