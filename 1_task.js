function checkyear() {
const year = document.getElementById("year").value;
if ((year % 4 == 0) && (year % 100 !=0) || (year % 400 == 0)) {
result = "високосный"
document.getElementById("result").innerHTML = result;
    } else {
    result = "невисокосный"
document.getElementById("result").innerHTML = result;
    }
const century = Math.ceil(year/100);
document.getElementById("century").innerHTML = century + "век";
}

const elementCheckyear = document.getElementById("checkyear");
elementCheckyear.addEventListener('click', checkyear);