import { QueryResolvers } from "../../generated/resolvers/graphqlgen";

const restaurants: QueryResolvers.RestaurantsResolver = (parent, args, context) => {
  const { prisma } = context;
  return prisma.restaurants()
};

const restaurant: QueryResolvers.RestaurantResolver = (parent, args, context) =>  {
  return context.prisma.restaurant({
    id: args.id
  })
}

export default {
  Query: {
    restaurants,
    restaurant
  }
}