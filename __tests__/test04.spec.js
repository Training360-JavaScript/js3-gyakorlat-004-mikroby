import checker from '../solutions/app';

describe( '4. feladat', () => {
    test( 'Le kellene ellenőriznie a Visa-kártyaszámot.', () => {
        expect(checker.validate('4234567890123456', 'visa')).toBeTruthy();
        expect(checker.validate('5234567890123456', 'visa')).toBeFalsy();
    });

    test( 'Le kellene ellenőriznie az IP-címet.', () => {
        expect(checker.validate('255.106.138.55', 'ip')).toBeTruthy();
        expect(checker.validate('256.106.138.55', 'ip')).toBeFalsy();
    });

    test( 'Le kellene ellenőriznie a MAC-címet.', () => {
        expect(checker.validate('a1:23:45:6f:89:AB', 'mac')).toBeTruthy();
        expect(checker.validate('a1:23:45:6f:89:AG', 'mac')).toBeFalsy();
    });
});
