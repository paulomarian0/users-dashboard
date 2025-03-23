import { UsersRepository } from "@/domain/repositories/implementation/users-prisma-implementation";
import { CreateUserUseCase } from "../use-cases/create-user-use-case";
import { CreateUserController } from "../controller/create-user-controller";

const usersRepository = new UsersRepository();
const createUserUseCase = new CreateUserUseCase(usersRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
