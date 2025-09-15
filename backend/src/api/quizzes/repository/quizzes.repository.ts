import { Injectable } from '@nestjs/common';
import { QuizzesRepository } from '../interface/quizzes.repository.interface';
import { CreateQuizDto } from '../domain/dto/create-quiz.dto';
import { QuizEntity } from '../domain/entity/quiz.entity';
import { PrismaService } from 'src/prisma/service/prisma.service';
import { QuizMapper } from '../mapper/quiz.mapper';
import { RawQuizSummaryDto } from '../domain/dto/raw-quiz-summary.dto';

@Injectable()
export class QuizzesRepositoryImpl implements QuizzesRepository {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly quizMapper: QuizMapper,
  ) {}

  async delete(id: number, userId: number): Promise<void> {
    await this.prismaService.quiz.delete({
      where: { id, userId },
    });
  }

  async findById(id: number): Promise<QuizEntity | null> {
    const quiz = await this.prismaService.quiz.findUnique({
      where: { id },
      include: {
        questions: {
          include: {
            options: true,
            correctAnswers: {
              include: {
                option: true,
              },
            },
          },
        },
      },
    });

    return quiz ? this.quizMapper.toEntity(quiz) : null;
  }

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
                  const optionIndex = question.options.findIndex(
                    (opt) => opt.text === answer.text,
                  );
                  return { option: { connect: { id: optionIndex + 1 } } };
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
                option: true,
              },
            },
          },
        },
      },
    })) as unknown as QuizEntity;
  }

  async findAll(): Promise<RawQuizSummaryDto[]> {
    return await this.prismaService.quiz.findMany({
      select: {
        id: true,
        title: true,
        _count: {
          select: { questions: true },
        },
      },
    });
  }
}
