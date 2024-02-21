// logging.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const start = new Date().getTime();

    res.on('finish', () => {
      const end = new Date().getTime();
      const duration = end - start;
      console.log(`${req.method} ${req.url} ${res.statusCode} ${duration} ms`);
    });

    next();
  }
}
