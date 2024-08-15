let score = {
    win:0,
    lose:0,
    tie:0
};

function zero()
{
    score.win = 0;
    score.lose = 0;
    score.tie = 0;
    document.querySelector('.score').innerHTML = `Wins: ${score.win} Loss: ${score.lose} Tie: ${score.tie}`;
    blank()
}

function blank()
{
    document.querySelector('.display').innerHTML= ' '
}

function update()
{
    const html = `<p>Are you sure you want to reset the score?</P>
                <button class="yes">Yes</button>
                <button class="no">No</button>`;
    
    document.querySelector('.display').innerHTML= html;
    
    document.querySelector('.yes').addEventListener('click', 
        ()=>{zero()})

    document.querySelector('.no').addEventListener('click', 
        () => {blank()})
}

document.querySelector('.reset').addEventListener('click',
    ()=>{update()}
)

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


    document.querySelector('.but').addEventListener('click',
        () => {d('rock')}
    );
    document.querySelector('.butt').addEventListener('click',
        () => {d('paper')}
    );
    document.querySelector('.buttt').addEventListener('click',
        () => {d('scissors')}
    );

let isplay = false;
let interval;

function autoplay()
{
    console.log('called')
    if(!isplay)
    {
        interval = setInterval(
            () =>
            {
                const play = def();
                d(play);
            },1000
        );
        isplay = true;
        document.querySelector('.auto').innerHTML = 'Stop Play';
    }

    else 
    {
        clearInterval(interval);
        isplay = false;
        document.querySelector('.auto').innerHTML = 'Auto Play';
    }
}

document.body.addEventListener('keydown',(event)=>

{
    if(event.key === 'r')
        d('rock');
    else if(event.key === 'p')
        d('paper');
    else if(event.key === 's')
        d('scissors');
    else if(event.key === 'a')
        autoplay();
    else if(event.key === ' ')
        update();
})

document.querySelector('.auto').addEventListener('click',()=>{autoplay()});

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