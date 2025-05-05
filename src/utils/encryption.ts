import * as bcrypt from 'bcrypt';

export function encryptPassword(password: string) {
  const saltOrRounds = 10;
  return bcrypt.hash(password, saltOrRounds);
}

export function passwordMatches(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}
