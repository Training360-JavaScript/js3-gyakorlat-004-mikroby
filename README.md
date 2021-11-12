# Feladatok

## NAGYON FONTOS!!!
- A könnyebb tesztelhetőség érdekében az elkészített függvényeket és változókat 
exportálni kell!
- Függvények esetén egy példa:
```javascript
export default objectsMerge;
```
- Változók esetén egy példa:
```javascript
export {
  firstName,
  lastName,
  job,
};
```

## 1. feladat
- Fájl: `solutions/visa.js`
- Függvény neve: `checkVisa`
- Export: a checkVisa függvény legyen a default export!
- Írj reguláris kifejezést Visa típusú bankkártyák számának 
validálására! Teszteld is a megoldásod!
- A checkVisa függvényben valósítsd meg a validálást, a paraméterként kapott 
kártyaszámot validálja le a függvény, és true|false legyen a visszatérési értéke 
attól függően, hogy valid|invalid a szám.

## 2. feladat
- Fájl: `solutions/ip.js`
- Függvény neve: `checkIP`
- Export: a checkIP függvény legyen a default export!
- Írj reguláris kifejezést IP-cím validálására! Teszteld is a megoldásod!
- A checkIP függvényben valósítsd meg a validálást, a paraméterként kapott 
IP-címet validálja le a függvény, és true|false legyen a visszatérési értéke 
attól függően, hogy valid|invalid a szám.

## 3. feladat
- Fájl: `solutions/mac.js`
- Függvény neve: `checkMac`
- Export: a checkMac függvény legyen a default export!
- Írj reguláris kifejezést MAC-cím validálására! Teszteld is a megoldásod!
- A checkMac függvényben valósítsd meg a validálást, a paraméterként kapott 
MAC-címet validálja le a függvény, és true|false legyen a visszatérési értéke 
attól függően, hogy valid|invalid a cím.

## 4. feladat
- Fájl: `solutions/app.js`
- Objektum neve: `checker`
- Export: a checker objektum legyen a default export!
- Az előző három reguláris kifejezést és a validálást egy objektumon belül készítsd el. 
- Importáld be a másik három fájlban található függvényeket, és azokat használd 
fel az objektumon belül.
- `rules`: a checker objektumnak legyen egy `rules` property-je, amely objektumban tárolja a függvényeket.
- `validate`: validate metódus, amely paraméterként kap egy string-értéket, és azt, hogy melyik mintát kell ráilleszteni, amely lehet ['visa'|'ip'|'mac']. 
Attól függően hívja meg a `rules`-ban található függvényeket, 
hogy mi a minta neve. A visszatérési értéke a kiválasztott függvény 
visszatérési értéke legyen.
