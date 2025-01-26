import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifica che tutte le richieste HTTP siano state gestite
  });

  it('Il servizio dovrebbe essere creato correttamente', () => {
    expect(service).toBeTruthy();
  });

  it('Dovrebbe registrare un nuovo utente', () => {
    const rispostaFittizia = { message: 'Utente registrato con successo.' };
    const email = 'test@example.com';
    const password = 'password123';

    service.register(email, password).subscribe((response) => {
      expect(response).toEqual(rispostaFittizia);
    });

    const req = httpMock.expectOne(`${service['baseUrl']}/register`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ email, password });
    req.flush(rispostaFittizia);
  });

  it('Dovrebbe effettuare il login di un utente esistente e restituire un token', () => {
    const rispostaFittizia = { token: 'token-jwt-fittizio' };
    const email = 'test@example.com';
    const password = 'password123';

    service.login(email, password).subscribe((response) => {
      expect(response).toEqual(rispostaFittizia);
    });

    const req = httpMock.expectOne(`${service['baseUrl']}/login`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ email, password });
    req.flush(rispostaFittizia);
  });
});
