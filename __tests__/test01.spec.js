import checkVisa from '../solutions/visa';

describe( '1. feladat', () => {
    test( 'Le kellene ellenőriznie a Visa-kártyaszámot.', () => {
        expect(checkVisa('4234567890123456')).toBeTruthy();
        expect(checkVisa('5234567890123456')).toBeFalsy();
    });
});
