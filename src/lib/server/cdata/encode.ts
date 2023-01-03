import { SignJWT, type JWTPayload } from 'jose';
import { alg, issuer, audience } from './constants';

export const encode = async <T extends JWTPayload>(data: T, pin: string): Promise<string> => {
	const secret = new TextEncoder().encode(pin);

	const jwt = await new SignJWT(data)
		.setProtectedHeader({ alg })
		.setIssuedAt()
		.setIssuer(issuer)
		.setAudience(audience)
		.sign(secret);

	return Buffer.from(jwt).toString('base64');
};
