import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  HttpCode,
  HttpStatus,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { CreateVoteUseCase } from '../../../use-cases/create-vote';
import { ConfirmVoteUseCase } from '../../../use-cases/confirm-vote';
import { GetVoteResultsUseCase } from '../../../use-cases/get-vote-results';
import { GetVoteEmailsUseCase } from '../../../use-cases/get-vote-emails';
import { ResponseCodes } from '@waysconf/shared';

@Controller('vote')
export class VotesController {
  constructor(
    private readonly createVote: CreateVoteUseCase,
    private readonly confirmVote: ConfirmVoteUseCase,
    private readonly getVoteResults: GetVoteResultsUseCase,
    private readonly getVoteEmails: GetVoteEmailsUseCase,
  ) {}

  @Post()
  @HttpCode(HttpStatus.ACCEPTED)
  async create(
    @Body() body: { projectId?: string; email?: string; marketing?: boolean },
  ) {
    const { projectId, email, marketing } = body ?? {};
    if (!projectId || !email?.trim()) {
      throw new BadRequestException({
        status: ResponseCodes.INVALID_PARAMS,
        message: 'projectId and email are required',
      });
    }
    const result = await this.createVote.execute({
      projectId,
      email: email.trim(),
      marketing: Boolean(marketing),
    });
    if (!result.success) {
      if (result.status === ResponseCodes.NO_SUCH_PROJECT) {
        throw new NotFoundException({
          status: result.status,
          message: result.message,
        });
      }
      throw new BadRequestException({
        status: result.status,
        message: result.message,
      });
    }
    return { status: ResponseCodes.SUCCESS };
  }

  @Get('verify/:hash/:projectId')
  async verify(
    @Param('hash') hash: string,
    @Param('projectId') projectId: string,
  ) {
    const result = await this.confirmVote.execute({ hash, projectId });
    if (!result.success) {
      if (result.status === ResponseCodes.NO_SUCH_PROJECT) {
        throw new NotFoundException({ status: result.status });
      }
      throw new BadRequestException({ status: result.status });
    }
    return { status: ResponseCodes.SUCCESS };
  }

  @Get('results')
  async results() {
    const data = await this.getVoteResults.execute();
    return { status: ResponseCodes.SUCCESS, data };
  }

  @Get('emails')
  async emails() {
    const data = await this.getVoteEmails.execute();
    return { status: ResponseCodes.SUCCESS, data };
  }
}
