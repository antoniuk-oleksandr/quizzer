import { IsNotEmpty } from 'class-validator';
import { IsPassword } from 'src/validator/is-password.decorator';

export class LoginDto {
  @IsNotEmpty()
  usernameOrEmail: string;

  @IsPassword()
  password: string;
}
