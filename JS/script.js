function checkGuess() 
{
	let guess = document.querySelector("#guess");
	let result = document.querySelector("#result");
	let count = 6;

	const todaysWord = "toast";
	//const answer = prompt('Enter a guess: ');

		if (guess.value === todaysWord) {
			result.innerHTML = guess.value + " correct"; 
			return;
		}
		else {
			count -= 1;
			result.innerHTML = guess.value + " wrong. " + count + " tries left"; 
		}
}
