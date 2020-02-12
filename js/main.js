

var quotes = [
	"Think of how stupid the average person is, and realize half of them are stupider than that.",
	"Have you ever noticed that anybody driving slower than you is an idiot, and anyone going faster than you is a maniac?",
	"Electricity is really just organized lightning",
	"I have as much authority as the Pope, I just don't have as many people who believe it.",
	"The main reason Santa is so jolly is because he knows where all the bad girls live.",
	"Here's all you have to know about men and women: women are crazy, men are stupid. And the main reason women are crazy is that men are stupid.",
	"Inside every cynical person, there is a disappointed idealist.",
	"Don't sweat the petty things and don't pet the sweaty things.",
	"Weather forecast for tonight: dark. Continued dark overnight, with widely scattered light by morning.",
	"When you're born you get a ticket to the freak show. When you're born in America, you get a front row seat.",
	"The very existence of flame-throwers proves that some time, somewhere, someone said to themselves, You know, I want to set those people over there on fire, but I'm just not close enough to get the job done.."

];

var btn = document.getElementById('userinput');
btn.addEventListener('keypress', function enterKey(e) {
	if(e.keyCode == 13) {
		horoscope();
	};
}, false);

function horoscope() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
