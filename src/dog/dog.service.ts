import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  public getHello(): string {
    return 'MONG MONG';
  }

  public introduce(): string {
    return 'My name is BOBIK!';
  }

  public modifyDetail(): string {
    return 'Seccessfully modified';
  }
}
