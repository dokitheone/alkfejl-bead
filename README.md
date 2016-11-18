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

**Bejelentkezett oldal**
![](docs/images/terv/bejelentkezett.jpg)

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

**Bejelentkezett oldal**
![](docs/images/design/bejelentkezett.png)

**Névjegyek megtekintése**
![](docs/images/design/nevjegymegtekint.png)

**Új névjegy létrehozása**
![](docs/images/design/ujnevjegy.png)

**Névjegy megtekint**
![](docs/images/design/nevjegyshow.png)

**Névjegy szerkesztése**
![](docs/images/design/nevjegyszerk.png)

######2.2.3. Osztálymodell
 
 **Adatmodell**
 
 ![](docs/images/adatmodell.png)
 