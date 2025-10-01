import { Test, TestingModule } from '@nestjs/testing';
import { CandidateController } from './recruit.controller';
import { CandidateService } from './recruit.service';

describe('CandidateController', () => {
  let controller: CandidateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CandidateController],
      providers: [CandidateService],
    }).compile();

    controller = module.get<CandidateController>(CandidateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
