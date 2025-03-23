import { createUserController } from "@/domain/users/factories/create-user-factory";
import { listUserController } from "@/domain/users/factories/list-user-factory";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
	return createUserController.handle(req);
}

export async function GET(req: NextRequest) {
	return listUserController.handle(req);
}
