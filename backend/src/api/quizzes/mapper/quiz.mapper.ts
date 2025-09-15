import { QuizDto } from '../domain/dto/quiz.dto';
import { QuizEntity } from '../domain/entity/quiz.entity';
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

export class QuizMapper {
  toDto(quiz: QuizEntity): QuizDto {
    return {
      ...quiz,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      questions: quiz.questions.map((q) => ({
        ...q,
        correctAnswers: q.correctAnswers.map((ca) => ({
          id: ca.id,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-expect-error
          text: ca.option.text,
        })),
      })),
    };
  }
}
