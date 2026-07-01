import { prisma } from "../configs/db.config.js";

export class UserRepository {

  static async create( email, password, username ) {
    try {
      return await prisma.user.create({
        data: {
          email,
          password,
          username,
        },
        select: {
          id: true,
          username: true,
          email: true,
          createdAt: true,
        },
      });
    } 
    catch{
        throw new Error("Database error");      
    }
  }

  static async findByEmail(email) {
    try {
      return await prisma.user.findUnique({
        where: {
          email,
        },
        select: {
          id: true,
          username: true,
          email: true,
          password: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch {
      throw new Error("Failed to fetch user");
    }
  }

  static async findById(id) {
    try {
      return await prisma.user.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          username: true,
          email: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      throw new Error("Failed to fetch user");
    }
  }

  static async existsByEmail(email) {
    try {
      const count = await prisma.user.count({
        where: {
          email,
        },
      });

      return count > 0;
    } catch {
      throw new Error("Database error");
    }
  }

  static async updatePassword(id, hashedPassword) {
    try {
      return await prisma.user.update({
        where: {
          id,
        },
        data: {
          password: hashedPassword,
        },
      });
    } catch {
      throw new Error("Failed to update password");
    }
  }

  static async updateLastLogin(id) {
    try {
      await prisma.user.update({
        where: {
          id,
        },
        data: {
          last_login: new Date(),
        },
      });
    } catch {
      throw new Error("Failed to update last login");
    }
  }

  static async delete(id) {
    try {
      await prisma.user.delete({
        where: {
          id,
        },
      });
    } catch {
      throw new Error("Failed to delete user");
    }
  }
}