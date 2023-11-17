import { Test, TestingModule } from '@nestjs/testing';
import { PersonajesController } from './personajes.controller';
import { PersonajesService } from './personajes.service';

describe('PersonajesController', () => {
  let controller: PersonajesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonajesController],
      providers: [PersonajesService],
    }).compile();

    controller = module.get<PersonajesController>(PersonajesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
