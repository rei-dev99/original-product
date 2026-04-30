"use server";

import fs from "fs";
import { importPKCS8, SignJWT } from "jose";

export async function createBackendJwt(payload: {
	email: string;
	provider: string;
	uid: string;
}) {
	const privateKey = await importPKCS8(
		fs.readFileSync("keys/private.pem", "utf-8"),
		"RS256",
	);

	return await new SignJWT(payload)
		.setProtectedHeader({ alg: "RS256", typ: "JWT" })
		.setIssuedAt()
		.setIssuer("understanding-debt-checker-next")
		.setAudience("understanding-debt-checker-rails")
		.setExpirationTime("1h")
		.sign(privateKey);
}
