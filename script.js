const barkBTN = document.getElementById('bark')
const glowaBTN = document.getElementById('glowa')
const ramieBTN = document.getElementById('ramie')
const lokiecBTN = document.getElementById('lokiec')
const nadgarstekBTN = document.getElementById('nadgarstek')
const biodroBTN = document.getElementById('biodro')
const kolanoBTN = document.getElementById('kolano')
const stopaBTN = document.getElementById('stopa')

const opis = document.querySelector('.opis')
const header = document.querySelector('.header')
window.addEventListener('scroll', fixnav)
function fixnav(){
    if(window.scrollY > header.offsetHeight + 150){
        header.classList.add('active')
    }else{
        header.classList.remove('active')
    }
}


barkBTN.addEventListener('click',() => {
    opis.innerText=`Staw barkowy, łączący kończynę górną z tułowiem, złożony jest z kilku stawów i wykazuje największy zakres ruchów ze wszystkich stawów organizmu. Struktury kostne (kość ramienna, łopatka, obojczyk i mostek) są otoczone przez liczne więzadła, mięśnie, ścięgna i kaletki, które zapewniają stabilizację barku i płynność wykonywanych ruchów. Najważniejszą rolę pełni tzw. stożek rotatorów, czyli grupa czterech mięśni i ich ścięgien otaczających jeden ze stawów, tj. staw ramienno-łopatkowy.`
})
glowa.addEventListener('click',() => {
    opis.innerText=`Napięciowy ból głowy to obok migreny, jeden z najczęstszych rodzajów bólów, który występuje u pacjentów. Może mieć zarówno charakter epizodyczny (utrzymujący się kilka godzin, dni) jak i przewlekły (utrzymujący się przez miesiące). Czym się charakteryzuje? Zazwyczaj jest to promieniujący ból, który przenosi się od części potylicznej czaszki aż do samego jej czubka. Towarzyszyć mu może uczucie kłucia, ciągnięcia za okiem i uchem. `;
})
ramieBTN.addEventListener('click', ()=>{
    opis.innerText=`Ból ramienia czy uogólniony ból barku może mieć wiele przyczyn. Odpowiednia diagnostyka zarówno obrazowa jak również badanie podmiotowe i przedmiotowe powinny dostarczyć fizjoterapeucie niezbędnej wiedzy do przeprowadzenia odpowiedniej terapii. Dobór technik również jest uzależniony od prawidłowo przeprowadzonej diagnostyki. Ból barku bardzo często nie zagraża zdrowiu ani życiu. Niemniej ważne jest, aby jak najszybciej go wyeliminować i zdiagnozować jego przyczynę.`
})
lokiecBTN.addEventListener('click', ()=>{
    opis.innerText=`Ból stawu łokciowego może być spowodowany różnymi czynnikami. Dlatego objawy mogą mieć różne nasilenie, lokalizację i charakter. Ból może pojawić się nagle lub stopniowo narastać, może być tępy, kłujący, ostry, czy promieniujący. Towarzyszyć mu może obrzęk, ograniczenie ruchomości, problem ze zgięciem, wyprostem, rotacją wewnętrzną lub zewnętrzną. Ból może pojawiać się w nocy i powodować problemy z zasypianiem. Może być wyczuwalne wzmożone napięcie mięśni w obrębie stawu i osłabienie siły mięśniowej.`
})
nadgarstekBTN.addEventListener('click', ()=>{
    opis.innerText=`Ból nadgarstka znacząco utrudnia codzienne funkcjonowanie, a często także pracę zawodową. Ból w nadgarstku może mieć różne nasilenie i pojawiać się tylko w określonych sytuacjach (np. przy podpieraniu, chwytaniu). Ostry i długotrwały ból oraz spuchnięty nadgarstek może być związany z urazem bądź kontuzją lub być objawem choroby. Przyczyn dolegliwości bólowych w nadgarstku jest sporo, a w zależności od postawionej diagnozy ustalamy leczenie i program rehabilitacji. `
})
biodroBTN.addEventListener('click', ()=>{
    opis.innerText=`Ból stawu biodrowego nie jest już wyłącznie domeną osób starszych, prowadzących siedzący tryb życia. Coraz częściej do poradni ortopedycznych zgłaszają się z tą dolegliwością osoby w wieku 30-40 lat, czasem też młodsze, prowadzące aktywny tryb życia. Jedną z przyczyn bólu może być rozpoznawany przez ortopedów, radiologów, czy fizjoterapeutów konflikt udowo-panewkowy - Femoroacetabular Impingement (FAI). Charakteryzuje się on deformacją części kostnych stawu, uczuciem bólu w stawie biodrowym i zauważalnie zmniejszonym zakresem ruchu bioder.`
})
kolanoBTN.addEventListener('click', ()=>{
    opis.innerText=`Osoby cierpiące na schorzenia stawów kolanowych t.j: zmiany zwyrodnieniowe, kolano skoczka, uszkodzenie więzadeł,  uszkodzenia łąkotek oraz inne, mogą odczuwać przewlekły ból tych stawów. Ból kolana to powszechna dolegliwość zarówno u osób w podeszłym wieku jak i młodszych. Przyczyny bólu mogą być bardzo różne: uraz kolana, wady budowy lub też uszkodzenia związane z chorobą, np. martwicą chrzęstno-kostną. Jednak najczęstszymi przyczynami naszych kłopotów z kolanem są mikrourazy i przeciążenia.`
})
stopaBTN.addEventListener('click', ()=>{
    opis.innerText=`Ból stóp/stopy może być wywołany różnymi czynnikami. Należy jednak pamiętać, że przyczyny tego rodzaju dolegliwości mogą być zarówno związane z samą stopą, jak i stanowić bardziej uogólniony problem, dotyczący całego organizmu lub schorzenia obejmującego odległą od stopy lokalizację.`
})

