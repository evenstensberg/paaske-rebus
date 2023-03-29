import { jsPDF } from "jspdf";
import fs from "node:fs"


const quizzes = JSON.parse(fs.readFileSync("./quiz.json", "utf8"))
const math = JSON.parse(fs.readFileSync("./matte.json", "utf8"))
const doc = new jsPDF();

doc.setFontSize(40)
doc.text(50, 25, 'Påske rebus')
const cover_img = fs.readFileSync("./paske.png", "base64");

const cover_img_data = 'data:image/png;base64,'+ cover_img;

doc.addImage(cover_img_data, 'PNG', 15, 80, 180, 160);
doc.setFontSize(20)
doc.text(50, 270, 'Egnet for barn i 8-12 årsalderen')

doc.addPage()



doc.setFontSize(40)
doc.text(50, 25, 'Spørsmål')

let quizX = 20;
let quizY = 70;


doc.setFontSize(10)


quizzes.forEach((quiz, idx) => {
    if(idx === 11) {
        doc.addPage()
        quizY = 20
    }
    const text = `${idx + 1}. ${quiz.question}`
    doc.text(quizX, quizY, text)
    quizY += 10
    doc.text(quizX, quizY, '_'.repeat(90))
    quizY += 10
});

doc.text(quizX+50, quizY+10, 'Riktige svar')
doc.ellipse(quizX+57, quizY+20, 5, 5)

doc.text(quizX+100, quizY+10, 'Feil svar')
doc.ellipse(quizX+107, quizY+20, 5, 5)

doc.addPage();

doc.setFontSize(40)
doc.text(50, 25, 'Matte')

quizX = 20;
quizY = 70;

doc.setFontSize(10)
math.forEach((quiz, idx) => {
    if(idx === 11) {
        doc.addPage()
        quizY = 20
    }
    const text = `${idx + 1}. ${quiz.question}`
    doc.text(quizX, quizY, text)
    quizY += 10
    doc.text(quizX, quizY, '_'.repeat(90))
    quizY += 10
});

doc.text(quizX+50, quizY+10, 'Riktige svar')
doc.ellipse(quizX+57, quizY+20, 5, 5)

doc.text(quizX+100, quizY+10, 'Feil svar')
doc.ellipse(quizX+107, quizY+20, 5, 5)

doc.addPage();

doc.setFontSize(40)
doc.text(50, 25, 'Bingo')

doc.setLineWidth(2)
doc.setDrawColor(128, 128, 128) 


doc.line(10, 100, 200, 100)
doc.line(10, 150, 200, 150)
doc.line(10, 200, 200, 200)

doc.line(10, 100, 10, 200)
doc.line(50, 100, 50, 200)
doc.line(100, 100, 100, 200)
doc.line(150, 100, 150, 200)
doc.line(200, 100, 200, 200)

doc.setFontSize(20)
doc.setTextColor(128, 128, 128)

doc.text(20, 125, 'Elg')
doc.text(70, 125, 'Rev')
doc.text(115, 125, 'Rådyr')
doc.text(170, 125, 'Elv')


doc.text(20, 175, 'Gul bil')
doc.text(65, 175, 'Katt')
doc.text(115, 175, 'Hund')
doc.text(165, 175, 'Innsjø')

doc.addPage();

doc.setTextColor(0, 0, 0)
doc.setFontSize(40)
doc.text(50, 25, 'Aktivitet')

const aktivitet = [
    "Hopp opp og ned 10 ganger",
    "Krab rundt i stua i 1 min",
    "Lat som du står på ski og skal vinne løpet",
    "Gå en tur ute og prøv å finne en kongle",
    "Spill brettspill med familien",
    "Spill idiot med familien",
    "Spill vri-åtter med familien",
    "Spill tampen brenner"
]


quizX = 20;
quizY = 70;

doc.setFontSize(10);
aktivitet.forEach((a, idx) => {
    if(idx === 11) {
        doc.addPage()
        quizY = 20
    }
    const text = `${idx + 1}. ${a}`
    doc.text(quizX, quizY, text)
    doc.rect(quizX+150, quizY, 5, 5)
    quizY += 20
})

doc.addPage();

doc.setTextColor(0, 0, 0)
doc.setFontSize(40)

const first_img = fs.readFileSync("./1.png", "base64");

const first_img_data = 'data:image/png;base64,'+ first_img;
doc.text(50, 25, 'Soduku 1/6')
doc.addImage(first_img_data, 'PNG', 15, 40, 180, 160)

doc.addPage();

const second_img = fs.readFileSync("./2.png", "base64");

const second_img_data = 'data:image/png;base64,'+ second_img;
doc.text(50, 25, 'Soduku 2/6')
doc.addImage(second_img_data, 'PNG', 15, 40, 180, 160);

doc.addPage();

const third_img = fs.readFileSync("./3.png", "base64");

const third_img_data = 'data:image/png;base64,'+ third_img;
doc.text(50, 25, 'Soduku 3/6')
doc.addImage(third_img_data, 'PNG', 15, 40, 180, 160);

doc.addPage();

const fourth_img = fs.readFileSync("./4.png", "base64");

const fourth_img_data = 'data:image/png;base64,'+ fourth_img;
doc.text(50, 25, 'Soduku 4/6')
doc.addImage(fourth_img_data, 'PNG', 15, 40, 180, 160);

doc.addPage();

const fifth_img = fs.readFileSync("./5.png", "base64");

const fifth_img_data = 'data:image/png;base64,'+ fifth_img;
doc.text(50, 25, 'Soduku 5/6')
doc.addImage(fifth_img_data, 'PNG', 15, 40, 180, 160);

doc.addPage();

const sixth_img = fs.readFileSync("./6.png", "base64");

const sixth_img_data = 'data:image/png;base64,'+ sixth_img;
doc.text(50, 25, 'Soduku 6/6')
doc.addImage(sixth_img_data, 'PNG', 15, 40, 180, 160);


doc.addPage();
doc.text(50, 25, 'Fargelegging 1/3')

const farge_1 = fs.readFileSync("./farge_1.jpeg", "base64");

const farge_1_img = 'data:image/jpeg;base64,'+ farge_1;
doc.addImage(farge_1_img, 'JPEG', 50, 100, 90, 100);

doc.addPage();
doc.text(50, 25, 'Fargelegging 2/3')

const farge_2 = fs.readFileSync("./farge_2.jpeg", "base64");

const farge_2_img = 'data:image/jpeg;base64,'+ farge_2;
doc.addImage(farge_2_img, 'JPEG', 50, 100, 90, 100);

doc.addPage();
doc.text(50, 25, 'Fargelegging 3/3')

const farge_3 = fs.readFileSync("./farge_3.png", "base64");

const farge_3_img = 'data:image/png;base64,'+ farge_3;
doc.addImage(farge_3_img, 'PNG', 50, 90, 90, 100);

doc.addPage();
doc.text(50, 25, 'Ordkluss')

const krypto = fs.readFileSync("./krypto.png", "base64");

const krypto_img = 'data:image/png;base64,'+ krypto;
doc.addImage(krypto_img, 'PNG', 50, 30, 50, 100);


doc.setFontSize(20)

const godPåskeCipher = "1. Tekst: 7, 15, 4, 16, 29, 19, 11, 5"
doc.text(50, 180, godPåskeCipher)

const niceCipher = "2. Tekst: 4, 21, 5, 18, 6, 12, 9, 14, 11"
doc.text(50, 200, niceCipher)

const thirdCipher = "3. Tekst: 6, 12, 9, 19, 1"
doc.text(50, 220, thirdCipher)

doc.addPage();
doc.setTextColor(0, 0, 0)
doc.setFontSize(40)

const first_dot = fs.readFileSync("./dot_1.png", "base64");

const first_dot_data = 'data:image/png;base64,'+ first_dot;
doc.text(50, 25, 'Tegne 1/4')
doc.addImage(first_dot_data, 'PNG', 15, 40, 180, 160)

doc.addPage();

const second_dot = fs.readFileSync("./dot_2.png", "base64");

const second_dot_data = 'data:image/png;base64,'+ second_dot;
doc.text(50, 25, 'Tegne 2/4')
doc.addImage(second_dot_data, 'PNG', 15, 40, 180, 160)

doc.addPage();

const third_dot = fs.readFileSync("./dot_3.png", "base64");

const third_dot_data = 'data:image/png;base64,'+ third_dot;
doc.text(50, 25, 'Tegne 3/4')
doc.addImage(third_dot_data, 'PNG', 15, 40, 180, 160)

doc.addPage();

const fourth_dot = fs.readFileSync("./dot_4.png", "base64");

const fourth_dot_data = 'data:image/png;base64,'+ fourth_dot;
doc.text(50, 25, 'Tegne 4/4')
doc.addImage(fourth_dot_data, 'PNG', 15, 40, 180, 160)

doc.addPage();

doc.setFontSize(20)
doc.text(50, 270, 'Laget av Even Stensberg')
doc.text(15, 280, 'Vipps 923 32 349 for innsatsen hadde vært fint')

doc.save("rebus.pdf");