
function setup(){
    noCanvas();
// let speech = new p5.Speech();
// let speechRec = new p5.SpeechRec('en-US',gotSpeech);

// speechRec.start(true,false);
// speech.speak('HELLO');
let bot = new RiveScript();
bot.loadFile("brain.rive").then(brainReady).catch(brainError);

function brainReady(){
    console.log('chatbot ready');
    bot.sortReplies();
 
    

}
function brainError(){
    console.log('chatbot error');
    
}
    let button = select('#submit');
    let user_input = select('#user_input');
    let output = select('#output');

    button.mousePressed(chat);
    // function gotSpeech(){
    //     if(speechRec.resultValue){
    //         let input = speechRec.resultString;
    //          user_input.value(input);
    //         console.log(input);
    //       bot.reply("local-user",input).then(function(reply) {
    //              speech.speak(reply);
    //             output.html(reply);
    //           });
            
    //     }
    // }
    function chat(){
        let input =user_input.value();
         
        bot.reply("local-user",input).then(function(reply) {
            // speech.speak(reply);
            output.html(reply);
          });
        
        
    }
}   