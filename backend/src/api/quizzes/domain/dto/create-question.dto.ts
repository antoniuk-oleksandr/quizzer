import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsEnum,
  IsNotEmpty,
  ValidateNested,
} from 'class-validator';
import { QuestionType } from 'generated/prisma';
import { CreateCorrectAnswerDto } from './create-correct-answer-dto';
import { CreateOptionDto } from './create-option.dto';

export class CreateQuestionDto {
  @IsNotEmpty()
  text: string;

  @IsEnum(QuestionType)
  type: QuestionType;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => CreateOptionDto)
  options: CreateOptionDto[];

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => CreateCorrectAnswerDto)
  correctAnswers: CreateCorrectAnswerDto[];
}
