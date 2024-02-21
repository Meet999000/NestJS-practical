import { BadRequestException, Injectable } from '@nestjs/common';
import { CalcDto } from './calc.dto';

@Injectable()
export class CalcService {
  calculateExpression(expression: string): number {
    try {
      const result = eval(expression);
      if (isNaN(result)) {
        throw new Error('Invalid expression');
      }
      return Number(result);
    } catch (error) {
      throw new BadRequestException({
        statusCode: 400,
        message: 'Invalid expression provided',
        error: 'Bad Request',
      });
    }
  }
}
