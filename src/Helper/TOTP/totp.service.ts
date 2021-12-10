import { Injectable } from '@nestjs/common';
import config from '../../Core/Config/config';
import * as totp from 'totp-generator';

@Injectable()
export class TOTPService {
  generateTotop() {
    // const totp = require('totp-generator');

    const token = totp(config().TOTPSECRETKEY);

    return token;
  }
}
