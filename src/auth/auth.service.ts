import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async validateUser(profile: any): Promise<any> {
    // Here, you would normally fetch and return the user from the database
    // For this example, we just return the profile
    return profile;
  }
}
