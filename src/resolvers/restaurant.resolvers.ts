import { QueryResolvers, MutationResolvers } from "../../generated/resolvers/graphqlgen";

const restaurants: QueryResolvers.RestaurantsResolver = (parent, args, context) => context.prisma.restaurants()

const restaurant: QueryResolvers.RestaurantResolver = (parent, args, context) =>  context.prisma.restaurant({
    id: args.id
  })

const createRestaurant: MutationResolvers.CreateRestaurantResolver = (parent, args, context) => context.prisma.createRestaurant({
  name: args.name,
  image: args.image,
})

export default {
  Query: {
    restaurants,
    restaurant
  },
  Mutation: {
    createRestaurant
  }
};