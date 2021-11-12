import checkVisa from './visa.js';
import checkIP from './ip.js';
import checkMac from './mac.js'

const checker = {
  rules: {
    Visa(string){return checkVisa(string)},
    IP(string){return checkIP(string)},
    MAC(string){return checkMac(string)}
  },

  validate(string, pattern) {
    switch (pattern) {
      case 'visa': return this.rules.Visa(string);
        // break;
      case 'ip': return this.rules.IP(string);
        // break;
      case 'mac': return this.rules.MAC(string);
        // break;
    }
  }
};

export default checker;