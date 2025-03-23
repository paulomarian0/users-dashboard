import { type NextRequest, NextResponse } from "next/server";
import type { CreateUserUseCase } from "../use-cases/create-user-use-case";

export class CreateUserController {
	constructor(private readonly createUserUseCase: CreateUserUseCase) {}

	async handle(request: NextRequest): Promise<NextResponse> {
		try {
			const { id, name, email } = await request.json();
			console.log("aaa");

			const user = await this.createUserUseCase.execute({ id, name, email });

			console.log(user);

			return NextResponse.json(user, { status: 201 });
		} catch (error) {
			return NextResponse.json(
				{ message: error.message || "Unexpected error." },
				{ status: 400 },
			);
		}
	}
}
