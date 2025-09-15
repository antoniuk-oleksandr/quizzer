import { Body, Controller, Inject, Post, UseGuards } from '@nestjs/common';
import type { QuizzesService } from '../interface/quizzes.service.interface';
import { QUIZZES_SERVICE } from '../constants/quizzes.constants';
import { JwtAuthGuard } from 'src/api/auth/guard/jwt-auth.guard';
import { CreateQuizDto } from '../domain/dto/create-quiz.dto';
import { CurrentUser } from '../decorator/current-user.decorator';

@Controller('quizzes')
export class QuizzesController {
  constructor(
    @Inject(QUIZZES_SERVICE)
    private readonly quizzesService: QuizzesService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createQuiz(
    @Body() createQuizDto: CreateQuizDto,
    @CurrentUser() user: { id: number },
  ) {
    return this.quizzesService.createQuiz(createQuizDto, user.id);
  }
}
