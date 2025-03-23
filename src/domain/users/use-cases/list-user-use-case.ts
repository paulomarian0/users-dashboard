import type { IUserRepository } from "@/domain/repositories/users-repository";
import type { User } from "../User";

export class ListUserUseCase {
	constructor(private readonly userRepository: IUserRepository) {}

	async execute(email: string): Promise<User[]> {
		return this.userRepository.list(email);
	}
}
