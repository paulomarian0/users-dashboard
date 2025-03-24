import type { User } from "../users/User";

export interface IUserRepository {
	create(user: User): Promise<User>;
	list(email: string): Promise<User[]>;
	find({
		id,
		name,
		email,
	}: { id?: string; email?: string; name?: string }): Promise<User | null>;
}
