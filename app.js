//Created by Saransh Gupta!
var score, roundScore, activePlayer, dice, gamePlaying;
init();

document.querySelector('.btn-roll').addEventListener('click', function() {
            if (gamePlaying) {
                //Random Number
                dice = Math.floor((Math.random() * 6) + 1);
                document.querySelector('#current-' + activePlayer).textContent = dice;
                //display
                document.querySelector('.dice').style.display = 'block';
                var diceDOM = document.querySelector('.dice');
                diceDOM.style.display = 'block';
                diceDOM.src = 'dice-' + dice + '.png';
                //add roundScore
                roundScore += dice;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;

                //NextPlayer
                if (dice == 1) {
                    document.querySelector('#current-' + activePlayer).textContent = 0;
                    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
                    roundScore = 0;

                    document.querySelector('.player-0-panel').classList.toggle('active');
                    document.querySelector('.player-1-panel').classList.toggle('active');

                    document.querySelector('.dice').style.display = 'block';

                }
            }
          });

        document.querySelector('.btn-hold').addEventListener('click', function() {
            if (gamePlaying) {
                //ADD current score to GLOBAL score
                score[activePlayer] += roundScore;
                roundScore = 0;

                //UI
                document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
                document.querySelector('.dice').style.display = 'none';


                document.querySelector('#current-' + activePlayer).textContent = 0;
                //Check winner
                if (score[activePlayer] >= 100) {
                    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
                    document.querySelector('.dice').style.display = 'none';
                    gamePlaying = false;
                    activePlayer = 0;
                } else {


                    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
                    document.querySelector('#current-' + activePlayer).textContent = 0;

                    document.querySelector('.player-0-panel').classList.toggle('active');
                    document.querySelector('.player-1-panel').classList.toggle('active');
                }

            }

        });

        document.querySelector('.btn-new').addEventListener('click', reload);

        function reload() {
            document.location.reload(true);
        }

        function init() {
            score = [0, 0];
            roundScore = 0;
            activePlayer = 0;
            gamePlaying = true;
            document.getElementById('score-0').textContent = 0;
            document.getElementById('score-1').textContent = 0;
            document.getElementById('current-0').textContent = 0;
            document.getElementById('current-1').textContent = 0;

            document.querySelector('.dice').style.display = 'none';
            document.querySelector('#name-0').textContent = 'Player1';
            document.querySelector('#name-1').textContent = 'Player2';

        }

        function showDiv() {
            document.getElementById('myModal').style.display = "block";
        }

        function hideDiv() {
            document.getElementById('myModal').style.display = "none";
        }
