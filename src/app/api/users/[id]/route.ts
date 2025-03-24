import { deleteUserController } from "@/domain/users/factories/delete-user-factory";
import type { NextRequest } from "next/server";

export async function DELETE(req: NextRequest) {
	return deleteUserController.handle(req);
}
