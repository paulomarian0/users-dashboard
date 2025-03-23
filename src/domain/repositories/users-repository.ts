import type { User } from "../users/User";

export interface IUserRepository {
	create(user: User): Promise<User>;
	findByEmail(email: string): Promise<User | undefined>;
}
