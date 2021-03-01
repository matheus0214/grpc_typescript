// package: users
// file: users.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as users_pb from "./users_pb";

interface IUsersService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUsers: IUsersService_IGetUsers;
    createUser: IUsersService_ICreateUser;
    createUserStream: IUsersService_ICreateUserStream;
}

interface IUsersService_IGetUsers extends grpc.MethodDefinition<users_pb.Empty, users_pb.User> {
    path: "/users.Users/GetUsers";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<users_pb.Empty>;
    requestDeserialize: grpc.deserialize<users_pb.Empty>;
    responseSerialize: grpc.serialize<users_pb.User>;
    responseDeserialize: grpc.deserialize<users_pb.User>;
}
interface IUsersService_ICreateUser extends grpc.MethodDefinition<users_pb.User, users_pb.User> {
    path: "/users.Users/CreateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_pb.User>;
    requestDeserialize: grpc.deserialize<users_pb.User>;
    responseSerialize: grpc.serialize<users_pb.User>;
    responseDeserialize: grpc.deserialize<users_pb.User>;
}
interface IUsersService_ICreateUserStream extends grpc.MethodDefinition<users_pb.User, users_pb.User> {
    path: "/users.Users/CreateUserStream";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<users_pb.User>;
    requestDeserialize: grpc.deserialize<users_pb.User>;
    responseSerialize: grpc.serialize<users_pb.User>;
    responseDeserialize: grpc.deserialize<users_pb.User>;
}

export const UsersService: IUsersService;

export interface IUsersServer {
    getUsers: grpc.handleServerStreamingCall<users_pb.Empty, users_pb.User>;
    createUser: grpc.handleUnaryCall<users_pb.User, users_pb.User>;
    createUserStream: grpc.handleBidiStreamingCall<users_pb.User, users_pb.User>;
}

export interface IUsersClient {
    getUsers(request: users_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<users_pb.User>;
    getUsers(request: users_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<users_pb.User>;
    createUser(request: users_pb.User, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: users_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    createUser(request: users_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    createUserStream(): grpc.ClientDuplexStream<users_pb.User, users_pb.User>;
    createUserStream(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<users_pb.User, users_pb.User>;
    createUserStream(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<users_pb.User, users_pb.User>;
}

export class UsersClient extends grpc.Client implements IUsersClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getUsers(request: users_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<users_pb.User>;
    public getUsers(request: users_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<users_pb.User>;
    public createUser(request: users_pb.User, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: users_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    public createUser(request: users_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.User) => void): grpc.ClientUnaryCall;
    public createUserStream(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<users_pb.User, users_pb.User>;
    public createUserStream(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<users_pb.User, users_pb.User>;
}
