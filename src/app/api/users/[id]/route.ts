import { deleteUserController } from "@/domain/users/factories/delete-user-factory";
import { updateUserController } from "@/domain/users/factories/update-user-factory";
import type { NextRequest } from "next/server";

export async function DELETE(req: NextRequest) {
	return deleteUserController.handle(req);
}

export async function PUT(req: NextRequest) {
	return updateUserController.handle(req);
}
