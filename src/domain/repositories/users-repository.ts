import type { User } from "../users/User";

export interface IUserRepository {
	create(user: User): Promise<User>;
	list(email: string): Promise<User[]>;
}
