const { getRestaurants, createRestaurant } = require("../db/restaurants");
const { login } = require("../db/users");
const { ForbiddenError } = require("apollo-server")

module.exports = {
  Query: {
    restaurants: (_parent, args, context) => console.log('context:', context) || getRestaurants()
  },
  Mutation: {
    createRestaurant: (_parent, args) => createRestaurant(args.restaurant),
    login: (_parent, args) => login(args.email, args.password)
  }
};
