/* eslint-disable @typescript-eslint/no-unsafe-call */
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
          text: ca.text,
        })),
      })),
    };
  }

  toEntity(quiz: any): QuizEntity {
    return {
      id: quiz.id,
      title: quiz.title,
      userId: quiz.userId,
      createdAt: quiz.createdAt,
      updatedAt: quiz.updatedAt,
      questions: quiz.questions.map((q: any) => ({
        id: q.id,
        text: q.text,
        type: q.type,
        quizId: q.quizId,
        createdAt: q.createdAt,
        updatedAt: q.updatedAt,
        options: q.options.map((o: any) => ({
          id: o.id,
          text: o.text,
          questionId: o.questionId,
        })),
        correctAnswers: q.correctAnswers.map((ca: any) => ({
          id: ca.id,
          text: ca.option?.text ?? '[missing option]', // Defensive fallback
          questionId: ca.questionId,
        })),
      })),
    };
  }
}
