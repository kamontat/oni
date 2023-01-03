import { decodeJwt, type JWTPayload } from 'jose';

export const decode = <T extends JWTPayload>(jwt: string): T => {
	return decodeJwt(jwt) as T;
};
