import checkIP from '../solutions/ip';

describe( '2. feladat', () => {
    test( 'Le kellene ellenőriznie az IP-címet.', () => {
        expect(checkIP('255.106.138.55')).toBeTruthy();
        expect(checkIP('255.106.138.256')).toBeFalsy();
    });
});
