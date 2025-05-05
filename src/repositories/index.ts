import { UserRepository } from './user.repository';
import { RegistrationRepository } from './registration.repository';

export const Repositories = [UserRepository, RegistrationRepository];

export * from './user.repository';
export * from './registration.repository';
