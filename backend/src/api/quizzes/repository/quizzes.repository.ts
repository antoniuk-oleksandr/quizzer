import { Injectable } from '@nestjs/common';
import { QuizzesRepository } from '../interface/quizzes.repository.interface';
import { CreateQuizDto } from '../domain/dto/create-quiz.dto';
import { QuizEntity } from '../domain/entity/quiz.entity';
import { PrismaService } from 'src/prisma/service/prisma.service';

@Injectable()
export class QuizzesRepositoryImpl implements QuizzesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(
    createQuizDto: CreateQuizDto,
    userId: number,
  ): Promise<QuizEntity> {
    return (await this.prismaService.quiz.create({
      data: {
        title: createQuizDto.title,
        user: { connect: { id: userId } },
        questions: {
          create: createQuizDto.questions.map((question) => {
            const options = question.options.map((option) => ({
              text: option.text,
            }));

            return {
              text: question.text,
              type: question.type,
              options: { create: options },
              correctAnswers: {
                create: question.correctAnswers.map((answer) => {
                  // find the corresponding option id
                  const optionIndex = question.options.findIndex(
                    (opt) => opt.text === answer.text,
                  );
                  return { option: { connect: { id: optionIndex + 1 } } };
                  // +1 because Prisma auto-increment IDs start at 1
                }),
              },
            };
          }),
        },
      },
      include: {
        questions: {
          include: {
            options: true,
            correctAnswers: {
              include: {
                option: true, // include option to return text
              },
            },
          },
        },
      },
    })) as unknown as QuizEntity;

    // Map correctAnswers to include option text
    // const quizWithOptionText = {
    //   ...createdQuiz,
    //   questions: createdQuiz.questions.map((q) => ({
    //     ...q,
    //     correctAnswers: q.correctAnswers.map((ca) => ({
    //       id: ca.id,
    //       text: ca.option.text, // return option text
    //     })),
    //   })),
    // };
  }
}
