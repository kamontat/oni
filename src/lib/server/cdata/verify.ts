import { jwtVerify, type JWTPayload } from 'jose';
import { audience, issuer } from './constants';

export const verify = async <T extends JWTPayload>(jwt: string, pin: string): Promise<T> => {
	const secret = new TextEncoder().encode(pin);
	const { payload } = await jwtVerify(jwt, secret, {
        issuer: issuer,
        audience: audience,
      });

	return payload as T;
};
