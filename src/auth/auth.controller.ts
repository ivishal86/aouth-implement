import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {
    // initiates the Google OAuth2 login flow
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req, @Res() res) {
    // Successful authentication, redirect home.
    console.log(res,'2')
    // res.redirect('/auth/profile');
    res.json(req.user.name)
  }

  @Get('profile')
  getProfile(@Req() req) {
    console.log(req.user,'1')
    if (!req.user) {
      return 'No user from Google';
    }
    return (req.user);
  }

  @Get('logout')
  logout(@Req() req, @Res() res) {
    req.logout((err) => {
      if (err) {
        console.error(err);
      }
      res.redirect('/');
    });
  }
}
