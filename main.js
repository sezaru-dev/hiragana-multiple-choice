let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');
let mcquestionCont = document.querySelector('#mcquestionCont');
let main = document.querySelector('.main-container');
let questionsLeft = document.querySelector('.questionsLeft');
let questionRange = document.querySelector('#questionRange');
var choice1, choice2, choice3, anslocation, chosenbtn, isCorrect;
var totalCorrect = 0,
	totalMistake = 0;
let ms = 0,
	s = 1,
	m = 0;
let timer;
let qAnswer = [
	{
		syllable: 'あ',
		answer: 'a',
	},
	{
		syllable: 'い',
		answer: 'i',
	},
	{
		syllable: 'う',
		answer: 'u',
	},
	{
		syllable: 'え',
		answer: 'e',
	},
	{
		syllable: 'お',
		answer: 'o',
	},
	//ka
	{
		syllable: 'か',
		answer: 'ka',
	},
	{
		syllable: 'き',
		answer: 'ki',
	},
	{
		syllable: 'く',
		answer: 'ku',
	},
	{
		syllable: 'け',
		answer: 'ke',
	},
	{
		syllable: 'こ',
		answer: 'ko',
	},
	//sa
	{
		syllable: 'さ',
		answer: 'sa',
	},
	{
		syllable: 'し',
		answer: 'shi',
	},
	{
		syllable: 'す',
		answer: 'su',
	},
	{
		syllable: 'せ',
		answer: 'se',
	},
	{
		syllable: 'そ',
		answer: 'so',
	},
	//ta
	{
		syllable: 'た',
		answer: 'ta',
	},
	{
		syllable: 'ち',
		answer: 'chi',
	},
	{
		syllable: 'つ',
		answer: 'tsu',
	},
	{
		syllable: 'て',
		answer: 'te',
	},
	{
		syllable: 'と',
		answer: 'to',
	},
	//na
	{
		syllable: 'な',
		answer: 'na',
	},
	{
		syllable: 'に',
		answer: 'ni',
	},
	{
		syllable: 'ぬ',
		answer: 'nu',
	},
	{
		syllable: 'ね',
		answer: 'ne',
	},
	{
		syllable: 'の',
		answer: 'no',
	},
	//ha
	{
		syllable: 'は',
		answer: 'ha',
	},
	{
		syllable: 'ひ',
		answer: 'hi',
	},
	{
		syllable: 'ふ',
		answer: 'fu',
	},
	{
		syllable: 'へ',
		answer: 'he',
	},
	{
		syllable: 'ほ',
		answer: 'ho',
	},
	//ma
	{
		syllable: 'ま',
		answer: 'ma',
	},
	{
		syllable: 'み',
		answer: 'mi',
	},
	{
		syllable: 'む',
		answer: 'mu',
	},
	{
		syllable: 'め',
		answer: 'me',
	},
	{
		syllable: 'も',
		answer: 'mo',
	},
	//ya
	{
		syllable: 'や',
		answer: 'ya',
	},
	{
		syllable: 'ゆ',
		answer: 'yu',
	},
	{
		syllable: 'よ',
		answer: 'yo',
	},
	//ra
	{
		syllable: 'ら',
		answer: 'ra',
	},
	{
		syllable: 'り',
		answer: 'ri',
	},
	{
		syllable: 'る',
		answer: 'ru',
	},
	{
		syllable: 'れ',
		answer: 're',
	},
	{
		syllable: 'ろ',
		answer: 'ro',
	},
	//wa
	{
		syllable: 'わ',
		answer: 'wa',
	},
	{
		syllable: 'を',
		answer: 'wo',
	},
	//n/ng/m
	{
		syllable: 'ん',
		answer: 'ng/m/n',
	},
	//ga
	{
		syllable: 'が',
		answer: 'ga',
	},
	{
		syllable: 'ぎ',
		answer: 'gi',
	},
	{
		syllable: 'ぐ',
		answer: 'gu',
	},
	{
		syllable: 'げ',
		answer: 'ge',
	},
	{
		syllable: 'ご',
		answer: 'go',
	},
	//za
	{
		syllable: 'ざ',
		answer: 'za',
	},
	{
		syllable: 'じ',
		answer: 'ji',
	},
	{
		syllable: 'ず',
		answer: 'zu',
	},
	{
		syllable: 'ぜ',
		answer: 'ze',
	},
	{
		syllable: 'ぞ',
		answer: 'zo',
	},
	//da
	{
		syllable: 'だ',
		answer: 'da',
	},
	{
		syllable: 'ぢ',
		answer: 'dzi',
	},
	{
		syllable: 'づ',
		answer: 'dzu',
	},
	{
		syllable: 'で',
		answer: 'de',
	},
	{
		syllable: 'ど',
		answer: 'do',
	},
	//ba
	{
		syllable: 'ば',
		answer: 'ba',
	},
	{
		syllable: 'び',
		answer: 'bi',
	},
	{
		syllable: 'ぶ',
		answer: 'bu',
	},
	{
		syllable: 'べ',
		answer: 'be',
	},
	{
		syllable: 'ぼ',
		answer: 'bo',
	},
	//pa
	{
		syllable: 'ぱ',
		answer: 'pa',
	},
	{
		syllable: 'ぴ',
		answer: 'pi',
	},
	{
		syllable: 'ぷ',
		answer: 'pu',
	},
	{
		syllable: 'ぺ',
		answer: 'pe',
	},
	{
		syllable: 'ぽ',
		answer: 'po',
	},
	//ky
	{
		syllable: 'きゃ',
		answer: 'kya',
	},
	{
		syllable: 'きゅ',
		answer: 'kyu',
	},
	{
		syllable: 'きょ',
		answer: 'kyo',
	},
	//sh
	{
		syllable: 'しゃ',
		answer: 'sha',
	},
	{
		syllable: 'しゅ',
		answer: 'shu',
	},
	{
		syllable: 'しょ',
		answer: 'sho',
	},
	//ch
	{
		syllable: 'ちゃ',
		answer: 'cha',
	},
	{
		syllable: 'ちゅ',
		answer: 'chu',
	},
	{
		syllable: 'ちょ',
		answer: 'cho',
	},
	//ny
	{
		syllable: 'にゃ',
		answer: 'nya',
	},
	{
		syllable: 'にゅ',
		answer: 'nyu',
	},
	{
		syllable: 'にょ',
		answer: 'nyo',
	},
	//hy
	{
		syllable: 'ひゃ',
		answer: 'hya',
	},
	{
		syllable: 'ひゅ',
		answer: 'hyu',
	},
	{
		syllable: 'ひょ',
		answer: 'hyo',
	},
	//my
	{
		syllable: 'みゃ',
		answer: 'mya',
	},
	{
		syllable: 'みゅ',
		answer: 'myu',
	},
	{
		syllable: 'みょ',
		answer: 'myo',
	},
	//ry
	{
		syllable: 'りゃ',
		answer: 'rya',
	},
	{
		syllable: 'りゅ',
		answer: 'ryu',
	},
	{
		syllable: 'りょ',
		answer: 'ryo',
	},
	//gy
	{
		syllable: 'ぎゃ',
		answer: 'gya',
	},
	{
		syllable: 'ぎゅ',
		answer: 'gyu',
	},
	{
		syllable: 'ぎょ',
		answer: 'gyo',
	},
	//j
	{
		syllable: 'じゃ',
		answer: 'ja',
	},
	{
		syllable: 'じゅ',
		answer: 'ju',
	},
	{
		syllable: 'じょ',
		answer: 'jo',
	},
	//by
	{
		syllable: 'びゃ',
		answer: 'bya',
	},
	{
		syllable: 'びゅ',
		answer: 'byu',
	},
	{
		syllable: 'びょ',
		answer: 'byo',
	},
	//py
	{
		syllable: 'ぴゃ',
		answer: 'pya',
	},
	{
		syllable: 'ぴゅ',
		answer: 'pyu',
	},
	{
		syllable: 'ぴょ',
		answer: 'pyo',
	},
];
let fillers = [
	'a',
	'i',
	'u',
	'e',
	'o',
	'ka',
	'ki',
	'ku',
	'ke',
	'ko',
	'sa',
	'shi',
	'su',
	'se',
	'so',
	'ta',
	'chi',
	'tsu',
	'te',
	'to',
	'na',
	'ni',
	'nu',
	'ne',
	'no',
	'ha',
	'hi',
	'fu',
	'he',
	'ho',
	'ma',
	'mi',
	'mu',
	'me',
	'mo',
	'ya',
	'yu',
	'yo',
	'ra',
	'ri',
	'ru',
	're',
	'ro',
	'wa',
	'wo',
	'ng/n/m',
	'ga',
	'gi',
	'gu',
	'ge',
	'go',
	'za',
	'ji',
	'zu',
	'ze',
	'zo',
	'da',
	'dzi',
	'dzu',
	'de',
	'do',
	'ba',
	'bi',
	'bu',
	'be',
	'bo',
	'pa',
	'pi',
	'pu',
	'pe',
	'po',
	'kya',
	'kyu',
	'kyo',
	'sha',
	'shu',
	'sho',
	'cha',
	'chu',
	'cho',
	'nya',
	'nyu',
	'nyo',
	'hya',
	'hyu',
	'hyo',
	'mya',
	'myu',
	'myo',
	'rya',
	'ryu',
	'ryo',
	'gya',
	'gyu',
	'gyo',
	'ja',
	'ju',
	'jo',
	'bya',
	'byu',
	'byo',
	'pya',
	'pyu',
	'pyo',
];
let answerHistories = [];

class SetQuestion {
	constructor(syllable, answer) {
		this.syllable = syllable;
		this.answer = answer;
	}

	shuffleQuestions() {
		for (let i = qAnswer.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[qAnswer[i], qAnswer[j]] = [qAnswer[j], qAnswer[i]];
		}
	}

	assignChoices() {
		//generate unique filler choices value and not equals to current question
		choice1 = Math.floor(Math.random() * fillers.length);
		choice2 = Math.floor(Math.random() * fillers.length);
		choice3 = Math.floor(Math.random() * fillers.length);

		if (
			choice1 == choice2 ||
			choice1 == choice3 ||
			choice2 == choice3 ||
			fillers[choice1] == qAnswer[0].answer ||
			fillers[choice2] == qAnswer[0].answer ||
			fillers[choice3] == qAnswer[0].answer
		) {
			setquestion.assignChoices();
		}
	}

	setNewQuestion() {
		//set and pass new question and assign new choices
		if (qAnswer.length > 0) {
			setquestion = new SetQuestion(qAnswer[0].syllable, qAnswer[0].answer);
			//mcquestionCont.innerHTML = qAnswer[0].syllable;
			mcquestionCont.innerHTML = setquestion.syllable;
			setquestion.assignChoices();
		}
	}

	generateChoices() {
		//generate and set correct answer and fillers randomly
		anslocation = Math.floor(Math.random() * 4) + 1;
		switch (anslocation) {
			case 1:
				btn1.value = this.answer;
				btn2.value = fillers[choice1];
				btn3.value = fillers[choice2];
				btn4.value = fillers[choice3];
				break;
			case 2:
				btn1.value = fillers[choice1];
				btn2.value = this.answer;
				btn3.value = fillers[choice2];
				btn4.value = fillers[choice3];
				break;
			case 3:
				btn1.value = fillers[choice1];
				btn2.value = fillers[choice2];
				btn3.value = this.answer;
				btn4.value = fillers[choice3];
				break;
			case 4:
				btn1.value = fillers[choice1];
				btn2.value = fillers[choice2];
				btn3.value = fillers[choice3];
				btn4.value = this.answer;
				break;
		}
	}
	removePastQuestion() {
		if (qAnswer.length > 0) {
			answerHistories.push({
				syllable: this.syllable,
				answer: this.answer,
				userAnswer: chosenbtn,
				isCorrect: isCorrect,
			});
		}

		qAnswer.shift(); //remove first
		if (qAnswer.length > 0) {
			console.log(qAnswer);
		} else {
			console.log('List is now empty');

			//disable btns if qAnswer length is 0 to removes error
			btn1.disabled = true;
			btn2.disabled = true;
			btn3.disabled = true;
			btn4.disabled = true;
			console.log(answerHistories);
			setquestion.showSummary();
		}
	}

	showSummary() {
		main.innerHTML = '';
		main.innerHTML = `<div class="box">
      <div class="percent">
         <svg>
            <circle cx='70' cy='70' r='70'></circle>
            <circle class="rating" cx='70' cy='70' r='70'></circle>
         </svg>
         <div class="number">
            <h2 class="scoreRating">87<span>%</span></h2>
         </div>
      </div>
      <h2 class="text">Score</h2>
      <div class="summary">
         <div>
            <h3>Correct</h3>
            <p class="summary-correct">70/140</p>
         </div>
         <div>
            <h3>Mistake</h3>
            <p class="summary-mistake">70/140</p>
         </div>
      </div>`;
		const rating = document.querySelector('.rating');
		const scoreRating = document.querySelector('.scoreRating');
		const summaryCorrect = document.querySelector('.summary-correct');
		const summaryMistake = document.querySelector('.summary-mistake');
		const points = 0.9615384615384616;
		rating.style.strokeDashoffset = `calc(440 - (440 * ${
			points * totalCorrect
		}) / 100)`;
		scoreRating.innerHTML = `${(points * totalCorrect).toFixed(
			1
		)}<span>%</span>`;
		summaryCorrect.innerText = `${totalCorrect}/140`;
		summaryMistake.innerText = `${totalMistake}/140`;
		setquestion.generateAnswerSummary();
		console.log(main);
		console.log(totalCorrect);
	}

	generateAnswerSummary() {
		for (let i = 0; i < answerHistories.length; i++) {
			let newCard = document.createElement('div');
			main.appendChild(newCard);
			newCard.setAttribute('class', 'cards');
			newCard.setAttribute('id', `card${i}+1`);

			let newLabel = document.createElement('label');
			newCard.appendChild(newLabel);
			newLabel.setAttribute('for', `cbox${i + 1}`);
			newLabel.setAttribute('class', `btns ${answerHistories[i].isCorrect}`);
			newLabel.innerText = `${i + 1}. ${answerHistories[i].syllable}`;

			let newCardCbox = document.createElement('input');
			newCard.appendChild(newCardCbox);
			newCardCbox.setAttribute('type', 'checkbox');
			newCardCbox.setAttribute('id', `cbox${i + 1}`);
			newCardCbox.hidden = true;

			let newCardDiv = document.createElement('div');
			newCard.appendChild(newCardDiv);
			newCardDiv.setAttribute('class', 'infos');
			newCardDiv.setAttribute('id', `info${i + 1}`);
			newCardDiv.hidden = true;

			let infoSyllable = document.createElement('p');
			newCardDiv.appendChild(infoSyllable);
			infoSyllable.setAttribute('class', 'syllable');
			infoSyllable.innerHTML = `Syllable:  ${answerHistories[i].syllable}`;

			let infoReading = document.createElement('p');
			newCardDiv.appendChild(infoReading);
			infoReading.setAttribute('class', 'reading');
			infoReading.innerHTML = `Reading:  ${answerHistories[i].answer}`;

			let userAnswer = document.createElement('p');
			newCardDiv.appendChild(userAnswer);
			userAnswer.innerHTML = `Your Answer:  ${answerHistories[i].userAnswer}`;
		}

		//to maximized/minimized divs
		let cboxes = [...document.querySelectorAll('input[type="checkbox"]')];
		cboxes.forEach((cbox) => {
			cbox.addEventListener('change', () => {
				if (cbox.checked == true) {
					cbox.nextSibling.hidden = false;
				} else if (cbox.checked == false) {
					cbox.nextSibling.hidden = true;
				}
			});
		});
	}

	start() {
		if (!timer) {
			timer = setInterval(setquestion.run, 10);
		}
	}
	run() {
		setquestion.getTimer();
		ms++;
		if (ms == 100) {
			ms = 0;
			s--;
		}
		if (ms == 70) {
			setquestion.enablebtn();
			btn1.classList.remove('correctbtn');
			btn2.classList.remove('correctbtn');
			btn3.classList.remove('correctbtn');
			btn4.classList.remove('correctbtn');
			btn1.classList.remove('wrongbtn');
			btn2.classList.remove('wrongbtn');
			btn3.classList.remove('wrongbtn');
			btn4.classList.remove('wrongbtn');
			setquestion.removePastQuestion();
			setquestion.setNewQuestion();
			setquestion.generateChoices();
			setquestion.showQuestionLeft();
			//console.log('generate setquestion');
			setquestion.stop();
		}
	}
	stop() {
		setquestion.stopTimer();
		ms = 0;
		s = 5;
		m = 0;
	}
	stopTimer() {
		clearInterval(timer);
		timer = false;
	}

	getTimer() {
		return s;
	}

	showRightWrongAns() {
		switch (anslocation) {
			case 1:
				btn1.classList.add('correctbtn');
				break;
			case 2:
				btn2.classList.add('correctbtn');
				break;
			case 3:
				btn3.classList.add('correctbtn');
				break;
			case 4:
				btn4.classList.add('correctbtn');
				break;
		}
	}

	disablebtn() {
		btn1.disabled = true;
		btn2.disabled = true;
		btn3.disabled = true;
		btn4.disabled = true;
	}
	enablebtn() {
		btn1.disabled = false;
		btn2.disabled = false;
		btn3.disabled = false;
		btn4.disabled = false;
	}
	showQuestionLeft() {
		if (questionRange.value <= 104) {
			questionRange.value++;
			questionsLeft.innerHTML = `${questionRange.value} out of 104 syllables`;
		}
	}

	checkAnswer() {
		btn1.addEventListener('click', () => {
			if (btn1.value === qAnswer[0].answer) {
				totalCorrect++;
				isCorrect = 'correct';
				btn1.classList.add('correctbtn');
				setquestion.disablebtn();
				chosenbtn = btn1.value;
				setquestion.start();
			} else {
				totalMistake++;
				isCorrect = 'wrong';
				btn1.classList.add('wrongbtn');
				setquestion.disablebtn();
				setquestion.showRightWrongAns();
				chosenbtn = btn1.value;
				setquestion.start();
			}
		});

		btn2.addEventListener('click', () => {
			if (btn2.value === qAnswer[0].answer) {
				totalCorrect++;
				isCorrect = 'correct';
				chosenbtn = btn2.value;
				btn2.classList.add('correctbtn');
				setquestion.disablebtn();
				setquestion.start();
			} else {
				totalMistake++;
				isCorrect = 'wrong';
				btn2.classList.add('wrongbtn');
				setquestion.disablebtn();
				setquestion.showRightWrongAns();
				chosenbtn = btn2.value;
				setquestion.start();
			}
		});

		btn3.addEventListener('click', () => {
			if (btn3.value === qAnswer[0].answer) {
				totalCorrect++;
				isCorrect = 'correct';
				chosenbtn = btn3.value;
				btn3.classList.add('correctbtn');
				setquestion.disablebtn();
				setquestion.start();
			} else {
				totalMistake++;
				isCorrect = 'wrong';
				btn3.classList.add('wrongbtn');
				setquestion.disablebtn();
				setquestion.showRightWrongAns();
				chosenbtn = btn3.value;
				setquestion.start();
			}
		});

		btn4.addEventListener('click', () => {
			if (btn4.value === qAnswer[0].answer) {
				totalCorrect++;
				isCorrect = 'correct';
				chosenbtn = btn4.value;
				btn4.classList.add('correctbtn');
				setquestion.disablebtn();
				setquestion.start();
			} else {
				totalMistake++;
				isCorrect = 'wrong';
				btn4.classList.add('wrongbtn');
				setquestion.disablebtn();
				setquestion.showRightWrongAns();
				chosenbtn = btn4.value;
				setquestion.start();
			}
		});
	}
}

setquestion = new SetQuestion();
setquestion.shuffleQuestions(); // initialized only once
console.log(qAnswer);
setquestion.setNewQuestion();
setquestion.generateChoices();
console.log(`ans location: btn${anslocation}`);
setquestion.checkAnswer();
