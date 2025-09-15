import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
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

  @Get()
  async getAllQuizzes() {
    return await this.quizzesService.getAllQuizzes();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createQuiz(
    @Body() createQuizDto: CreateQuizDto,
    @CurrentUser() user: { id: number },
  ) {
    return this.quizzesService.createQuiz(createQuizDto, user.id);
  }

  @Get(':id')
  async getQuizById(@Param('id') id: number) {
    return await this.quizzesService.getQuizById(id);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deleteQuiz(
    @Param('id') id: number,
    @CurrentUser() user: { id: number },
  ) {
    return await this.quizzesService.deleteQuiz(id, user.id);
  }
}
