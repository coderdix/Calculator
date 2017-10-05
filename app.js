
function readyFn() {
	
	const operators = [ '+', '*', '/', '-' ];
	
	let input   = '',
			log     = '',
			answer  = '',
			set     = [],
			symbol;
	
	$('.number').on('click', operand);
	$('.operator').on('click', selectOperator);
	$('.ac').on('click', reset);
	$('.solve').on('click', solve);
	
	 
	
	function operand() {
		input = $(this).attr('value'); 
		log += input;
		set.push(input);
		$('#log').text(log);
		console.log('input: ' + input)
	}
	
	function selectOperator() { 
		symbol = $(this).attr('value');
		console.log('clicked', symbol);
		
		if (operators.includes(set[set.length-1	]) 
			 && operators.includes(symbol)) {
			console.log("Can't add 2 operators in a row!")
			return;
		} 
		
		log += symbol;
		set.push(symbol);
		$('#log').text(log);
	}
	
	function solve() {
		answer = eval(log);
		input  = '';
		$('#display').text(answer);
	}
	
	function reset() {
		input = '';
		log   = '';
		answer = '';
		set   = [];
		$('#display, #log').text('0');
	}
	
}

$(readyFn);
