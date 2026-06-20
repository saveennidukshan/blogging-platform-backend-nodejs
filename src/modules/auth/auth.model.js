import { prisma } from './../../configs/db.js';

export const createUser = async (email, password) => {
  const user = await prisma.user.create({
    data: {
      email,
      password,
    },
  });
  return user;
};

export const getUserByEmail = async (email) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  return user;
};
