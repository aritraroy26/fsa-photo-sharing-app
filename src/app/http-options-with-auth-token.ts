import { HttpHeaders } from '@angular/common/http';

export const httpOptionsWithAuthToken = (
  token: string,
  removeContentType: boolean = false
) => ({
  headers: removeContentType
    ? new HttpHeaders({
        AuthToken: token,
      })
    : new HttpHeaders({
        'Content-Type': 'application/json',
        AuthToken: token,
      }),
});
