import { PrismaClient } from "@prisma/client";
import type { IUserRepository } from "../users-repository";
import type { User } from "@/domain/users/User";
import { databaseAdapter } from "@/domain/helpers/databaseAdapter";

export class UsersRepository implements IUserRepository {
	private repository: typeof databaseAdapter;

	constructor() {
		this.repository = databaseAdapter;
	}

	async create(user: User) {
		return this.repository.user.create({
			data: {
				email: user.email,
				name: user.name,
			},
		});
	}

	async list(email: string) {
		const users = await this.repository.user.findMany({
			where: {
				email: email ? { contains: email } : undefined,
			},
		});

		return users;
	}
}
