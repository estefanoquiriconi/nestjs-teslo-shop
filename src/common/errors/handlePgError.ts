import { ConflictException, Logger } from '@nestjs/common';
import { InternalServerErrorException } from '@nestjs/common';

export interface PgError {
  code: string;
  message: string;
  detail: string;
}

export const handlePgError = (error: PgError): void => {
  const logger = new Logger('Postgres');
  logger.error(error.message);
  if (error.code === '23505') throw new ConflictException(error.detail);
  throw new InternalServerErrorException('Unexpected error, check server logs');
};
