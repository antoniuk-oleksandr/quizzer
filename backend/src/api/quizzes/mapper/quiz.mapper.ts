/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { QuizSummaryDto } from '../domain/dto/quiz-summary.dto';
import { QuizDto } from '../domain/dto/quiz.dto';
import { RawQuizSummaryDto } from '../domain/dto/raw-quiz-summary.dto';
import { QuizEntity } from '../domain/entity/quiz.entity';

export class QuizMapper {
  toSummary(raw: RawQuizSummaryDto[]): QuizSummaryDto[] {
    return raw.map((r) => ({
      id: r.id,
      title: r.title,
      questionsCount: r._count.questions,
    }));
  }

  toDto(quiz: QuizEntity): QuizDto {
    return {
      ...quiz,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      questions: quiz.questions.map((q) => ({
        ...q,
        correctAnswers: q.correctAnswers.map((ca) => ({
          id: ca.id,
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
