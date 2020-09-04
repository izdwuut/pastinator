import { CustomDateAdapter } from './custom-date-adapter';
import { Platform } from '@angular/cdk/platform';

describe('CustomDateAdapter', () => {
  it('should create an instance', () => {
    expect(new CustomDateAdapter('en-GB', new Platform({}) )).toBeTruthy();
  });
});
