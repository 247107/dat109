"use strict";

function antallTerningerPaaKast(T1, T2, T3, T4, T5, Id) {
	let ID = Id;
	let sumTerningKast = 0;

	switch (ID) {
		case "1":
			sumTerningKast = enere(T1, T2, T3, T4, T5);
			break;

		case "2":
			sumTerningKast = toere(T1, T2, T3, T4, T5);
			break;

		case "3":
			sumTerningKast = treere(T1, T2, T3, T4, T5);
			break;

		case "4":
			sumTerningKast = firere(T1, T2, T3, T4, T5);
			break;

		case "5":
			sumTerningKast = femmere(T1, T2, T3, T4, T5);
			break;
			
		case "6":
			sumTerningKast = seksere(T1, T2, T3, T4, T5);
			break;

		case "7":
			let sum = parseInt(document.getElementById(spillerID + 'sum').value);

			if (sum >= 63) { 
				sumTerningKast = 50;
			} else {
				sumTerningKast = 0;
			}
		
			break;

		case "8":
			sumTerningKast = ettPar(T1, T2, T3, T4, T5);
			break;

		case "9":
			sumTerningKast = toPar(T1, T2, T3, T4, T5);
			break;

		case "10":
			sumTerningKast = treLike(T1, T2, T3, T4, T5);
			break;

		case "11":
			sumTerningKast = fireLike(T1, T2, T3, T4, T5);
			break;

		case "12":
			sumTerningKast = litenStraight(T1, T2, T3, T4, T5);
			break;

		case "13":
			sumTerningKast = storStraight(T1, T2, T3, T4, T5);
			break;

		case "14":
			sumTerningKast = hus(T1, T2, T3, T4, T5);
			break;

		case "15":
			sumTerningKast = sjanse(T1, T2, T3, T4, T5);
			break;

		case "16":
			sumTerningKast = yatzy(T1, T2, T3, T4, T5);
			break;

		default:
	}
	return sumTerningKast;
}

function enere(T1, T2, T3, T4, T5) {
	let arrayForTerninger = [T1, T2, T3, T4, T5];
	let antall = 0;

	arrayForTerninger
		.filter((Terning) => Terning == 1)
		.forEach((Terning) => antall++);
	return antall;
}

function toere(T1, T2, T3, T4, T5) {
	let arrayForTerninger = [T1, T2, T3, T4, T5];
	let antall = 0;

	arrayForTerninger
		.filter((Terning) => Terning == 2)
		.forEach((Terning) => antall++);
	return antall * 2;
}

function treere(T1, T2, T3, T4, T5) {
	let arrayForTerninger = [T1, T2, T3, T4, T5];
	let antall = 0;

	arrayForTerninger
		.filter((Terning) => Terning == 3)
		.forEach((Terning) => antall++);
	return antall * 3;
}

function firere(T1, T2, T3, T4, T5) {
	let arrayForTerninger = [T1, T2, T3, T4, T5];
	let antall = 0;

	arrayForTerninger
		.filter((Terning) => Terning == 4)
		.forEach((Terning) => antall++);
	return antall * 4;
}

function femmer(T1, T2, T3, T4, T5) {
	let arrayForTerninger = [T1, T2, T3, T4, T5];
	let antall = 0;

	arrayForTerninger
		.filter((Terning) => Terning == 5)
		.forEach((Terning) => antall++);
	return antall * 5;
}

function seksere(T1, T2, T3, T4, T5) {
	let arrayForTerninger = [T1, T2, T3, T4, T5];
	let antall = 0;

	arrayForTerninger
		.filter((Terning) => Terning == 6)
		.forEach((Terning) => antall++);
	return antall * 6;
}

 function ettPar(T1, T2, T3, T4, T5){
    let arrayForTerninger = [T1, T2, T3, T4, T5];
    arrayForTerninger.sort((a, b) => a - b);
    let x = 0;
    if(antallPar(T1, T2, T3, T4, T5) == 1 || antallPar(T1, T2, T3, T4, T5) == 2){
      for(let i = 0; i < arrayForTerninger.length - 1; i++){
        if(arrayForTerninger[i] == arrayForTerninger[i+1] && 
           arrayForTerninger[i] != arrayForTerninger[i-1]){   
          x = arrayForTerninger[i]*2;
        }
      }
      return x;                                             
    }else{
      return 0;
    }
  }

function toPar(T1, T2, T3, T4, T5){
    let arrayForTerninger = [T1, T2, T3, T4, T5];
    arrayForTerninger.sort((a, b) => a - b);
    let x = 0;                                                          
    let y = 0;                                                          
    arrayForTerninger.sort((a, b) => a - b);                            
    if(antallPar(T1, T2, T3, T4, T5) == 2){                              
        for(let i = 0; i < arrayForTerninger.length - 1; i++){          
          if(arrayForTerninger[i] == arrayForTerninger[i+1] &&         
             arrayForTerninger[i] != arrayForTerninger[i-1]){        
            x = arrayForTerninger[i]*2;                             
            y = y + x;                                                                     
          }
        }                   
      return y;                                                                                               
    }else{
      return 0;                                                         
    }
  }

function treLike(T1, T2, T3, T4, T5) {
	let arrayForTerninger = [T1, T2, T3, T4, T5];
	arrayForTerninger.sort((a, b) => a - b);

	let arrayEnere = [];
	let arrayToere = [];
	let arrayTreere = [];
	let arrayFirere = [];
	let arrayFemmere = [];
	let arraySeksere = [];

	for (let i = 0; i < arrayForTerninger.length; i++) {
		if (arrayForTerninger[i] == 1) {
			arrayEnere.push(arrayForTerninger[i]);
		} else if (arrayForTerninger[i] == 2) {
			arrayToere.push(arrayForTerninger[i]);
		} else if (arrayForTerninger[i] == 3) {
			arrayTreere.push(arrayForTerninger[i]);
		} else if (arrayForTerninger[i] == 4) {
			arrayFirere.push(arrayForTerninger[i]);
		} else if (arrayForTerninger[i] == 5) {
			arrayFemmere.push(arrayForTerninger[i]);
		} else if (arrayForTerninger[i] == 6) {
			arrayTreere.push(arrayForTerninger[i]);
		}
	}

	if (arraySeksere.length == 3) {
		return checkSumValueOfArray(arraySeksere);
	} else if (arrayFemmere.length == 3) {
		return checkSumValueOfArray(arrayFemmere);
	} else if (arrayFirere.length == 3) {
		return checkSumValueOfArray(arrayFirere);
	} else if (arrayTreere.length == 3) {
		return checkSumValueOfArray(arrayTreere);
	} else if (arrayToere.length == 3) {
		return checkSumValueOfArray(arrayToere);
	} else if (arrayEnere.length == 3) {
		return checkSumValueOfArray(arrayEnere);
	} else {
		return 0;
	}
}

function fireLike(T1, T2, T3, T4, T5) {
	let arrayForTerninger = [T1, T2, T3, T4, T5];
	arrayForTerninger.sort((a, b) => a - b);

	let arrayEnere = [];
	let arrayToere = [];
	let arrayTreere = [];
	let arrayFirere = [];
	let arrayFemmere = [];
	let arraySeksere = [];

	for (let i = 0; i < arrayForTerninger.length; i++) {
		if (arrayForTerninger[i] == 1) {
			arrayEnere.push(arrayForTerninger[i]);
		} else if (arrayForTerninger[i] == 2) {
			arrayToere.push(arrayForTerninger[i]);
		} else if (arrayForTerninger[i] == 3) {
			arrayTreere.push(arrayForTerninger[i]);
		} else if (arrayForTerninger[i] == 4) {
			arrayFirere.push(arrayForTerninger[i]);
		} else if (arrayForTerninger[i] == 5) {
			arrayFemmere.push(arrayForTerninger[i]);
		} else if (arrayForTerninger[i] == 6) {
			arrayTreere.push(arrayForTerninger[i]);
		}
	}

	if (arraySeksere.length == 4) {
		return checkSumValueOfArray(arraySeksere);
	} else if (arrayFemmere.length == 4) {
		return checkSumValueOfArray(arrayFemmere);
	} else if (arrayFirere.length == 4) {
		return checkSumValueOfArray(arrayFirere);
	} else if (arrayTreere.length == 4) {
		return checkSumValueOfArray(arrayTreere);
	} else if (arrayToere.length == 4) {
		return checkSumValueOfArray(arrayToere);
	} else if (arrayEnere.length == 4) {
		return checkSumValueOfArray(arrayEnere);
	} else {
		return 0;
	}
}

function litenStraight(T1, T2, T3, T4, T5) {
	let arrayForTerninger = [T1, T2, T3, T4, T5];
	arrayForTerninger.sort((a, b) => a - b);

	if (
		checkIfArrayIsUnique(arrayForTerninger) &&
		checkSumValueOfArray(arrayForTerninger) == 15
	) {
		return checkSumValueOfArray(arrayForTerninger);
	} else {
		return 0;
	}
}

function storStraight(T1, T2, T3, T4, T5) {
	let arrayForTerninger = [T1, T2, T3, T4, T5];
	arrayForTerninger.sort((a, b) => a - b);

	if (
		checkIfArrayIsUnique(arrayForTerninger) &&
		checkSumValueOfArray(arrayForTerninger) == 20
	) {
		return checkSumValueOfArray(arrayForTerninger);
	} else {
		return 0;
	}
}

function hus(T1, T2, T3, T4, T5) {
	let arrayForTerninger = [T1, T2, T3, T4, T5];
	arrayForTerninger.sort((a, b) => a - b);
	let x = 0
	if (treLike(T1, T2, T3, T4, T5) != 0 && antallPar(T1, T2, T3, T4, T5) != 0) {
		let like = treLike(T1, T2, T3, T4, T5);
		let par = ettPar(T1, T2, T3, T4, T5);
		x = like + par;
	}
	return x;
}

function yatzy(T1, T2, T3, T4, T5) {
	let arrayForTerninger = [T1, T2, T3, T4, T5];
	arrayForTerninger.sort((a, b) => a - b);
	console.log(arrayForTerninger);

	if (
		arrayForTerninger[0] == arrayForTerninger[1] &&
		arrayForTerninger[1] == arrayForTerninger[2] &&
		arrayForTerninger[2] == arrayForTerninger[3] &&
		arrayForTerninger[3] == arrayForTerninger[4]
	) {
		return 50;
	} else {
		return 0;
	}
}

function sjanse(T1, T2, T3, T4, T5) {
	let arrayForTerninger = [T1, T2, T3, T4, T5];
	arrayForTerninger.sort((a, b) => a - b);

	return checkSumValueOfArray(arrayForTerninger);
}

function checkIfArrayIsUnique(inputArray) {
	let rl = true;

	for (let i = 0; i < inputArray.length - 1; i++) {
		if (inputArray[i] == inputArray[i + 1]) {
			rl = false;
		}
	}
	return rl;
}

function checkSumValueOfArray(x) {
	let sum = 0;

	for (let i = 0; i < x.length; i++) {
		sum = x[i] + sum;
	}
	return sum;
}

function antallPar(T1, T2, T3, T4, T5) {
	let arrayForTerninger = [T1, T2, T3, T4, T5];
	arrayForTerninger.sort((a, b) => a - b);
	let par = 0
	for (let i = 0; i < arrayForTerninger.length - 1; i++) {
		if (arrayForTerninger[i] == arrayForTerninger[i + 1] &&
			arrayForTerninger[i] != arrayForTerninger[i - 1]) {
			par++;
		}
	}
	return par;
}

function log(id, result, spillerID) {
	switch (id) {
		case "1":
			let ones = document.getElementById(spillerID + 'ones');
			ones.innerHTML = result;
			break;
		case "2":
			let twos = document.getElementById(spillerID + 'twos');
			twos.innerHTML = result;
			break;
		case "3":
			let threes = document.getElementById(spillerID + 'threes');
			threes.innerHTML = result;
			break;
		case "4":
			let fours = document.getElementById(spillerID + 'fours');
			fours.innerHTML = result;
			break;
		case "5":
			let fives = document.getElementById(spillerID + 'fives');
			fives.innerHTML = result;
			break;
		case "6":
			let sixes = document.getElementById(spillerID + 'sixes');
			sixes.innerHTML = result;
			break;
		case "7":
			let bonus = document.getElementById(spillerID + 'bonus');
			bonus.innerHTML = result;
			break;
		case "8":
			let onePair = document.getElementById(spillerID + 'one-pair');
			onePair.innerHTML = result;
			break;
		case "9":
			let twoPair = document.getElementById(spillerID + 'two-pair');
			twoPair.innerHTML = result;
			break;
		case "10":
			let threeKind = document.getElementById(spillerID + 'three-kind');
			threeKind.innerHTML = result;
			break;
		case "11":
			let fourKind = document.getElementById(spillerID + 'four-kind');
			fourKind.innerHTML = result;
			break;
		case "12":
			let house = document.getElementById(spillerID + 'full-house');
			house.innerHTML = result;
			break;
		case "13":
			let sStraight = document.getElementById(spillerID + 'small-straight');
			sStraight.innerHTML = result;
			break;
		case "14":
			let lStraight = document.getElementById(spillerID + 'large-straight');
			lStraight.innerHTML = result;
			break;
		case "15":
			let chance = document.getElementById(spillerID + 'chance');
			chance.innerHTML = result;
			break;
		case "16":
			let yatzy = document.getElementById(spillerID + 'yatzy');
			yatzy.innerHTML = result;
			break;
		default:
	}
}

