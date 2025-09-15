import { IsNotEmpty } from 'class-validator';

export class CreateCorrectAnswerDto {
  @IsNotEmpty()
  text: string;
}
