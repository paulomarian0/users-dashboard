import { PrismaClient } from "@prisma/client";
import type { IUserRepository } from "../users-repository";
import { User } from "@/domain/users/User";
import { databaseAdapter } from "@/domain/helpers/databaseAdapter";

export class UsersRepository implements IUserRepository {
	private repository: typeof databaseAdapter;

	constructor() {
		this.repository = databaseAdapter;
	}

	async create(user: User): Promise<User> {
		return this.repository.user.create({
			data: {
				email: user.email,
				name: user.name,
			},
		});
	}

	async findByEmail(email: string): Promise<User | undefined> {
		const user = await this.repository.user.findUnique({
			where: {
				email: email,
			},
		});

		if (!user) {
			return undefined;
		}

		return new User(user.id, user.name, user.email);
	}
}
