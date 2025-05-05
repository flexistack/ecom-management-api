export class RegistrationDto {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
  shop: {
    name: string;
    description: string;
  };
}
