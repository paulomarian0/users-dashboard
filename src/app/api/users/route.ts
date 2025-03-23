import { createUserController } from "@/domain/users/factories/create-user-factory";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
	return createUserController.handle(req);
}
