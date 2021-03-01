// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var users_pb = require('./users_pb.js');

function serialize_users_Empty(arg) {
  if (!(arg instanceof users_pb.Empty)) {
    throw new Error('Expected argument of type users.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_Empty(buffer_arg) {
  return users_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_User(arg) {
  if (!(arg instanceof users_pb.User)) {
    throw new Error('Expected argument of type users.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_User(buffer_arg) {
  return users_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}


var UsersService = exports.UsersService = {
  getUsers: {
    path: '/users.Users/GetUsers',
    requestStream: false,
    responseStream: true,
    requestType: users_pb.Empty,
    responseType: users_pb.User,
    requestSerialize: serialize_users_Empty,
    requestDeserialize: deserialize_users_Empty,
    responseSerialize: serialize_users_User,
    responseDeserialize: deserialize_users_User,
  },
  createUser: {
    path: '/users.Users/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.User,
    responseType: users_pb.User,
    requestSerialize: serialize_users_User,
    requestDeserialize: deserialize_users_User,
    responseSerialize: serialize_users_User,
    responseDeserialize: deserialize_users_User,
  },
  createUserStream: {
    path: '/users.Users/CreateUserStream',
    requestStream: true,
    responseStream: true,
    requestType: users_pb.User,
    responseType: users_pb.User,
    requestSerialize: serialize_users_User,
    requestDeserialize: deserialize_users_User,
    responseSerialize: serialize_users_User,
    responseDeserialize: deserialize_users_User,
  },
};

exports.UsersClient = grpc.makeGenericClientConstructor(UsersService);
