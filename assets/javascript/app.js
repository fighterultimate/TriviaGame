// Created object for Qs and As
var currentQuestion = 1;
var questions =
{
    q1: {
        q: "Where did Sora first encounter the keyblade?",
        a1: "Traverse Town",
        a2: "Destiny Island",
        a3: "Alice and Wonderland",
        a4: "Agrabah",
        a5: "Destiny Island",
        a6: '<img src="assets/images/aech-k-destiny-island-better.jpg"/>',
    },
    // 
    q2: {
        q: "Who was the last Princess of Hearts?",
        a1: "Jasmine",
        a2: "Pocahontas",
        a3: "Ariel",
        a4: "Kairi",
        a5: "Kairi",
        a6:'<img src="assets/images/kairi-kingdom-hearts-9.08.jpg">',
    },
    q3: {
        q: "What move do you get for defeating Cloud?",
        a1: "Sonic Blade",
        a2: "Ragnarok",
        a3: "Blitz",
        a4: "Fire",
        a5: "Sonic Blade",
        a6:'<img src="assets/images/200px-Sonic_Blade_KHIIFM.gif">',
    },
    q4: {
        q: "Who was the hardest boss in the game?",
        a1: "Ansem",
        a2: "Sephiroth",
        a3: "Riku",
        a4: "Cloud",
        a5: "Sephiroth",
        a6:'<img src="assets/images/tumblr_m2m2ezPrVC1qepij6o1_r1_500.gif">',
    },
    q5: {
        q: "What is the second strongest Keyblade in the game?",
        a1: "Ultima Weapon",
        a2: "Wishing Star",
        a3: "Oathkeeper",
        a4: "Oblivion",
        a5: "Oblivion",
        a6:'<img src="assets/images/_kingdom_hearts__oblivion_keyblade_mmd__download___by_nevbix_dbjobkc-pre.jpg">',
    },
    q6: {
        q: "Where was Kairis heart during most of the game?",
        a1: "Purgatory",
        a2: "With the heartless",
        a3: "Soras heart",
        a4: "Rikus heart",
        a5: "Soras heart",
        a6:'<img src="assets/images/Sora_Impales_Himself_KH.jpg">',
    },
    q7: {
        q: "What does the quote 'If two people share one, their destinies become intertwined' refer to?",
        a1: "Paopu fruit",
        a2: "The Keyblade",
        a3: "Love",
        a4: "Friendship",
        a5: "Paopu fruit",
        a6:'<img src="assets/images/59918911_499971233875228_7188540704561250978_n.jpg">',
    },
    
};

var correct=0;
var wrong=0;

function next(){
    currentQuestion++;
    console.log(correct);
        console.log(wrong);
    if(currentQuestion>=7)
    {
        time=0;
        $("#question").html(correct);
        $("#timer").html(wrong);
        $("#a1").html('<img src="assets/images/fG9nHZ.jpg">');
        $("#a2").html("");
        $("#a3").html("");
        $("#a4").html("");
    }
    else {
    clearInterval(timer)
    cycle();
    timer();
    }
};
//
function timer() {
    var time = 5;
    var timer = setInterval(function () {
        if(currentQuestion<7){
        time--;
        $("#timer").html(time);
    
        if (time === 0) {
            clearInterval(timer);
            $("#question").html("Sorry times up!, the correct answer is " + questions['q' + currentQuestion].a5);
            $("#a1").html(questions['q' + currentQuestion].a6);
            setTimeout(function(){next();},5000);
            wrong++;
        };
        $(".answers").on("click", function () {
            clearInterval(timer);
        });


    } else {
        clearInterval(timer);
    }}, 1000)

};
// create function that displays current question and answer, timer cycles through them
timer();
function cycle() {
    timer();
    $("#question").html(questions['q' + currentQuestion].q);
    $("#a1").html(questions['q' + currentQuestion].a1);// example
    $("#a2").html(questions['q' + currentQuestion].a2);
    $("#a3").html(questions['q' + currentQuestion].a3);
    $("#a4").html(questions['q' + currentQuestion].a4);
}
cycle();



//answer=$("#a1").text();
//console.log(answer);


$(".answers").on("click", function () {
    if (questions['q' + currentQuestion].a5 === $(this).text()) {
        $("#question").html("Correct!!!");
        $("#a1").html(questions['q' + currentQuestion].a6);
        $("#a2").html("");
        $("#a3").html("");
        $("#a4").html("");
        setTimeout(function () {
            next();
        }, 5000);
        correct++;
    }

    else {
        $("#question").html("Sorry wrong answer!, the correct answer is " + questions['q' + currentQuestion].a5);
        $("#a1").html(questions['q' + currentQuestion].a6);
        $("#a2").html("");
        $("#a3").html("");
        $("#a4").html("");
        setTimeout(function () {
            next();
        }, 5000);
        wrong++;
    }
    
    ;
});

