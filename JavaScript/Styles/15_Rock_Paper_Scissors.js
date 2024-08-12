let score = {
    win:0,
    lose:0,
    tie:0
};

function update()
{
  document.querySelector('.score').innerHTML = `Wins: ${score.win} Loss: ${score.lose} Tie: ${score.tie}`;
}

function d(b)
{
    if(b === 'scissors')
    {
        let y = def();
            let res = ' ';
        if(y==='rock'){
            res = 'You lose';
            score.lose++;}
        else if(y==='paper'){
            res = 'You win';
            score.win++;}
        else if(y==='scissors'){
            res = 'Tie';
            score.tie++;}
        document.querySelector('.result').innerHTML = res+'.';
        document.querySelector('.moves').innerHTML = `You <img class="image" src="icon/${b}-emoji.png">
  <img class="image" src="icon/${y}-emoji.png">Computer`;
        document.querySelector('.score').innerHTML = `Wins: ${score.win} Loss: ${score.lose} Tie: ${score.tie}`;
    }
    else if(b === 'paper')
    {
        let y = def();
        let res = '';
        if(y==='rock'){
            res = 'You win';
            score.win++;}
        else if(y==='paper'){
            res = 'Tie';
            score.tie++;}
        else if(y==='scissors'){
            res = 'You lose';
            score.lose++;}
        document.querySelector('.result').innerHTML = res+'.';
        document.querySelector('.moves').innerHTML = `You <img class="image" src="icon/${b}-emoji.png">
  <img class="image" src="icon/${y}-emoji.png">Computer`;
        document.querySelector('.score').innerHTML = `Wins: ${score.win} Loss: ${score.lose} Tie: ${score.tie}`;            }
    else if(b === 'rock')
    {
        let y = def();
        let res = ' ';
        if(y==='rock'){
            res = 'Tie';
            score.tie++;}
        else if(y==='paper'){
            res = 'You lose';
            score.lose++;}
        else if(y==='scissors'){
            res = 'You win';
            score.win++;}
        document.querySelector('.result').innerHTML = res+'.';
        document.querySelector('.moves').innerHTML = `You <img class="image" src="icon/${b}-emoji.png">
  <img class="image" src="icon/${y}-emoji.png">Computer`;
        document.querySelector('.score').innerHTML = `Wins: ${score.win} Loss: ${score.lose} Tie: ${score.tie}`;            }
}

function def()
{
    let y='';
    let x = Math.floor((Math.random() * 3) + 1);
    if(x <= 1)
    {
        y='rock';
    }
    else if(x <= 2)
    {
        y='paper';
    }
    else if(x <= 3)
    {
        y='scissors';
    }
    return y;
}