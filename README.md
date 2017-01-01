# Dokumentáció
## Névjegyek kezelése
Készítette: Kicsiny Viktor

###1. Követelményanalízis
####1.1 Célkitűzés
A névjegyeink egy helyen történő kezelése a legnagyobb egyszerűségre és kezelhetőségre törekedve.

######Funkcionális követelmények:
* Regisztráció
* Bejelentkezés
* Csak bejelentkezett felhasználók által elérhető funkciók
  - új névjegy létrehozása
  - a meglévő névjegyek szerkesztése
  - a meglévő névjegyek törlése

######Nem funkcionális követelmények:
*	**Használhatóság:** Felhasználóbarát, ergonomikus elrendezés és kinézet.
*	**Teljesítmény:** Gyors működés.
*	**Biztonság:** Jelszavak tárolása, funkciókhoz való hozzáférés.

#####1.2.	Szakterületi fogalomjegyzék
* **Névjegy:** egy névjegy, mely névvel, telefonszámmal, email címmel és kategóriákra bontható.
* **Szerkesztés:** egy névjegy adatainak megváltoztatása.
* **Törlés:** egy névjegy törlése az adatbázisból.

#####1.3.	Használatieset-modell, funkcionális követelmények

**Vendég**: Csak a publikus oldalakat éri el

*	Főoldal
*	Bejelentkezés
*	Regisztráció

**Bejelentkezett felhasználó**: A publikus oldalak elérésén felül egyéb funkciókhoz is hozzáfér.

*	Új névjegy létrehozása
*	Meglévő névjegy megtekintése
*	Meglévő névjegy szerkesztése
*	Meglévő névjegy törlése
* Kijelentkezés

![](docs/images/telj-esetdiagram.png)

Példa egy egyszerű folyamatra:

**Meglévő névjegy szerkesztése:**

1.	A felhasználó az oldalra érkezve, bejelentkezik vagy regisztrál
2.	Regisztráció után megtekintheti a névjegyeket listázó oldalt, ahol kiválaszthatja a szerkeszteni kívánt névjegyet.
3.	Rákattint a szerkeszteni kívánt névjegyre
4.	A megtekintés oldalon kiválaszthatja a „Szerkeszt” gombot
5.	Szerkesztés oldalon felviszi az új adatokat
6.	„Küldés” gombra kattintva elmenti a változásokat

![](docs/images/foly-esetdiagram.png)

###2.	Tervezés

#####2.1.	Architektúra terv

######2.1.1. Oldaltérkép:

**Publikus:**
* Főoldal
* Bejelentkezés
* Regisztráció

**Bejelentkezett:**
* Főoldal
* Új névjegy létrehozása
* Listaoldal  
  * Névjegy megtekintése
    * Névjegy szerkesztése 
    * Névjegy törlése

######2.1.2. Végpontok

* GET/: főoldal
* GET/login: bejelentkező oldal
* POST/login: bejelentkező adatok felküldése
* GET/register: regisztrációs oldal
* POST/register: regisztrációs adatok felküldése
* GET/logout: kijelentkező oldal
* GET/cards: névjegyek oldal
* GET/cards/create: új névjegy létrehozása
* POST/cards/create: új névjegy létrehozásához szükséges adatok felküldése
* GET/cards/id: névjegy adatok
* GET/cards/id/delete: névjegy törlése
* GET/cards/id/edit: névjegy szerkesztése
* POST/cards/id/edit: névjegy szerkesztése, adatok felküldése

#####2.2. Felhasználói-felület modell

######2.2.1.Oldalvázlatok:

**Főoldal**                                              
![](docs/images/terv/fooldal.jpg)

**Bejelentkező oldal**
![](docs/images/terv/belepes.jpg)

**Regisztrációs oldal**
![](docs/images/terv/regisztracio.jpg)

**Névjegyek megtekintése**
![](docs/images/terv/nevjegymegtekint.jpg)

**Új névjegy létrehozása**
![](docs/images/terv/ujnevjegy.jpg)

**Névjegy megtekint**
![](docs/images/terv/nevjegyshow.jpg)

**Névjegy szerkesztése**
![](docs/images/terv/nevjegyszerk.jpg)

######2.2.2.Designtervek (végső megvalósítás kinézete):

**Főoldal**                                                 
![](docs/images/design/fooldal.png)

**Bejelentkező oldal**
![](docs/images/design/belepes.png)

**Regisztrációs oldal**
![](docs/images/design/regiszt.png)

**Új névjegy létrehozása**
![](docs/images/design/ujnevjegy.png)

**Névjegy megtekint**
![](docs/images/design/nevjegyshow.png)

**Névjegy szerkesztése**
![](docs/images/design/nevjegyszerk.png)

######2.2.3. Osztálymodell
 
 **Adatmodell**  
 ![](docs/images/adatmodell.png)
 
###3.	Implementáció

######3.1.1. Fejlesztőkörnyezet

GitHub, Visual Studio Code

+ GitHub account létrehozása
+ GitHub repository létrehozása és klónozása (git clone)
+ Visual Studio Code beállítása
+ Megkezdhetjük a kódolást
+ Visual Studio Code-on belül lehetőségünk van a mentéseinket a git commit, git push parancsokkal frissíteni GitHub reponkat
+ Végezetül a GitHub oldalán leellenőrizhetjük a munkánkat

######3.1.2. Könyvtárstruktúra, funkciók

+ alkfejl-bead
  + app
    + Http
      + Controllers
        + CardController.js
        + UserController.js
      + kernel.js
      + routes.js
    + Model
      + Card.js
      + Category.js
      + Token.js
      + User.js
  + bootstrap
  + config
    + express-admin
      + config.json
      + custom.json
      + settings.json
      + users.json
    + app.js
    + auth.js
    + bodyParser.js
    + cors.js
    + database.js
    + event.js
    + session.js
    + shield.js
  + database
    + migrations
      + 1479467393750_User.js
      + 1479467393751_Token.js
      + 1479467449798_categories.js
      + 1479467500091_cards.js
    + cards.sqlite
  + docs
  + node_modules
  + public
    + scripts
      + edit.js
      + main.js
      + pop_del.js
      + pop_log.js
      + pop_reg.js
    + style.css
  + resources
    + views
      + cardCreate.njk
      + cardEdit.njk
      + cardSearch.njk
      + cardShow.njk
      + layout.njk
      + login.njk
      + main.njk
      + master.njk
      + register.njk
      + welcome.njk
  + tests
  + .env
  + package.json
  + server.js

###4.	Tesztelés

Selenium IDE

A teszteléshez szükséges tesztesetek a tests mappában találhatóak.

A 'nevjegy' test-suite futtatásához szükséges lépések:

1. Mozzila Firefox indítása
2. Selenium IDE letöltése
3. JavaScript kikapcsolása!! (F12/Settings)
4. localhost:3333 megnyitása

(A biztos működés érdekében a slidert Fast-ről Slow-ra állítsuk)
A 'nevjegy' test-suite tesztelése:

1. Play entire test suite gombra kattintás

Amit tesztelni fog:

1. 'test' regisztrálása
2. új próba névjegy létrehozása
3. névjegyek megtekintése oldal használatba vétele (szűkítés)
4. létrehozott próba névjegy szerkesztése
5. Kijelentkezés
6. bejelentkezés a 'test' felhasználóval
7. egy újabb próba névjegy létrehozása
8. névjegyek megtekintése oldal újboli használatba vétele (szűkítés)
9. újonnan létrehozott próba névjegy szerkesztése
10. a két létrehozott névjegy listában való megjelenítése

###5. Progresszív fejlesztés (js)

**Új funkciók:**

+ pop_del.js: felugró ablak törlés megerősítéséhez
+ pop_reg.js: felugró ablak regisztrációhoz
+ pop_log.js: felugró ablak bejelentkezéshez
+ névjegy létrehozás: adatok ellenőrzése
+ névjegy szerkesztése: 
  + edit.js: vezeték-, keresztnév megadás kötelező
  + még pontosabb adat ellenőrzése
    + telefonszám: 11 db szám
    + email: @-t kell tartalmaznia

###6.	Felhasználói dokumentáció

#####6.1.	A futtatáshoz ajánlott hardver-, szoftver konfiguráció

**Futtatáshoz szükséges operációs rendszer:** Windows 10

**A futtatáshoz szükséges hardver:** Operációs rendszerek szerint megadva

**Egyéb követelmények:** Mozilla Firefox telepítése, JavaScript ajánlott

#####6.2.	Telepítés lépései

1. Kód letöltése

    a. ZIP letöltése

    b. dokitheone/alkfejl-bead klónozása

    c. dokitheone/alkfejl-bead forkolása és a saját repo klónozása

2. `git config --global url."https://".insteadOf git://` (szükségszerűen)
3. `npm install`
4. `.env.example` fájl átnevezése `.env`-re
5. `npm run dev` paranccsal futtatni
6. `localhost:3333` megnyitása

###### Express-admin adatbázis-kliens futtatása

1. `node_modules\.bin\admin config/express-admin`
2. Első futtatáskor a paraméterek beállítása

    a. `sqlite` adatbázis

    b. 4444-es port pl.

    c. username és password beállítása

#####6.3.	A program használata

1. Böngészőben nyissuk meg a főoldalt
2. Bal felső sarokban kattintsunk a Belépés feliratra
3. Belépés/Regisztráció után a jobb felső sarokban köszönt az oldal
4. Bal felső sarokban a Névjegy létrehozása gombra kattintva tudunk új névjegyet létrehozni
5. Töltsük ki az űrlapot
6. Hibás adatok esetén az űrlap jelezni fogja a hibát
7. Küldés gombra kattintva mentsük el az adatokat
8. Névjegyek megtekintése oldalon: a hozzánk tartozó névjegyre kattintás után a Törlés gombra kattintva törölhetjük a névjegyet
9. Névjegyek megtekintése oldalon: a hozzánk tartozó névjegyre kattintás után a Szerkeszt gombra kattintva szerkeszthetjük a névjegyet
10. Szerkesztés oldal: hasonlít a névjegy létrehozás funkcióihoz, csak előre láthatóak benne a recept eddigi adatai illetve még több precizitást igényel