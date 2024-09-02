[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/Fj2E3Yxb)

# The ZOO

---

## 📄 About The Project 

**During the course "Javascript fördjupning" at Medieinstitutet we were tasked with developing The Zoo webpage using React and TypeScript.**

---

## 👨🏻‍💻 Tech Stack

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

---

## ⚙️ How to run the project

- #### **Clona the repository from GitHub:**
    - git clone https://github.com/Medieinstitutet/the-zoo-RebeckaGothlin

- #### **Install the dependencies:**
    - npm install

- #### **Start the developer server:**
    - npm run dev

---

## Created by

[![Github](https://img.shields.io/badge/Rebecka%20Göthlin-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/RebeckaGothlin)

[![LinkdIn](https://img.shields.io/badge/Rebecka%20Göthlin-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rebecka-g%C3%B6thlin-963037280/)

#### Published: 2024

---

# Inlämningsuppgift The Zoo

Använd react med typescript för att skapa en sida för ett zoo. En lista med djur finns tillgänglig på: https://animals.azurewebsites.net/api/animalsDu behöver ladda ner djuren till din applikation och spara dem i applikationen. Det kommer inte gå att ändra djuren via api:t. Förslagsvis lagrar du dem i localStorage ellersessionStorage

## Betyg G

- Skapa en SPA (i React med TypeScript) som innehåller en startsida där djuren presenteras med namn och en kort beskrivning.
- Det skall gå att klicka på ett djur för att se mer information om detta djur via en egen route.
- Från djurets egna sida skall du kunna markera om djuret nu är matat eller inte via en knapp som heter "Mata djur". När du klickar på denna knapp skall djurets status ändras så att det framgår att det är matat. Och det skall inte längre gå att klicka på knappen. Du behöver också lägga in tiden som djuret matades.
- Ni behöver ha en god struktur i ert projekt vad gäller komponenter och filer.

## Betyg VG

- Samtliga krav för G
- Hantera trasiga bildlänkar på ett snyggt sätt
- När du går in på djurets sida nästa gång kontrollerar du om det har gått mer än tre timmar sedan senaste matningen. Om så är fallet nollställs matningen och det skall gå att mata djuret igen.
- Ni skall presentera en liten notis på startsidan, samt på djursidan, om att ett djur behöver matas om det är mer än fyra timmar sedan djuret matades.
- Ni behöver använda minst en tjänst i er applikation, både för hämtning av data och för gemensamma beräkningar.
