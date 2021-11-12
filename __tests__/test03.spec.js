import checkMac from '../solutions/mac';

describe( '3. feladat', () => {
    test( 'Le kellene ellenőriznie a MAC-címet.', () => {
        expect(checkMac('a1:23:45:6f:89:AB')).toBeTruthy();
        expect(checkMac('a1:23:45:6f:89:AG')).toBeFalsy();
    });
});
