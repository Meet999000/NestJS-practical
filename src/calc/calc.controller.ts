import { Body, Controller, Post } from '@nestjs/common';
import { CalcService } from './calc.service';
import { CalcDto } from './calc.dto';

@Controller('calc')
export class CalcController {
  constructor(private readonly calcService: CalcService) { }

  @Post('/')
  calculate(@Body() body: { expression: string }): { result: string } {
    const result: any = this.calcService.calculateExpression(body.expression);
    return { result };
  }
}
