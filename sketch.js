const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var playerIdle_1, playerIdle_2, playerIdle_3, playerIdle_4, playerIdle_5;
var playerRun_1, playerRun_2, playerRun_3, playerRun_4, playerRun_5;
var playerRun, playerIdle, playerJump, playerRunL;
var backgroundImg, groundImg, ground, door, doorImg, invis;

var b1, b2, b3, b4, b5, mouseCursor, b1b, b2b, b3b, b4b, b5b;

var puzzleText, textBox;

var player, level, levelText;

var rightEdge, leftEdge

var num1, num2, num3, submitButton, textBox2, puzzleText21, puzzleText22, puzzleText23, puzzleText24, puzzleText25;

var wall1, wall2, wall3, wall4, wall5, button31, button32, button33;

var puzzleText41, puzzleText42, puzzleText43, textBox4, submitButton41, submitButton42, answer4, qBox, answeInput, question;

var a6, submitButton6, textBox6, question6;

var franceImg, luxumImg, rusImg, box7, a7, label1, label2, label3, france, luxum, rus, question7;

var question8, a8, submitButton8, Box8, endScreen, endText;

function preload() {
    backgroundImg = loadImage("/gameSprites/Environment/background.png")
    groundImg = loadImage("/gameSprites/Environment/bricks.png")
    doorImg = loadImage("/gameSprites/Environment/door.png")

    franceImg = loadImage("/gameSprites/Environment/France.png")
    rusImg = loadImage("/gameSprites/Environment/Russia.png")
    luxumImg = loadImage("/gameSprites/Environment/Luxumborg.png")

    playerRun_1 = loadImage("../gameSprites/Player/Run (1).png")
    playerRun_2 = loadImage("../gameSprites/Player/Run (2).png")
    playerRun_3 = loadImage("../gameSprites/Player/Run (3).png")
    playerRun_4 = loadImage("../gameSprites/Player/Run (4).png")
    playerRun_5 = loadImage("../gameSprites/Player/Run (5).png")

    playerIdle = loadAnimation("../gameSprites/Player/Idle (3).png", "../gameSprites/Player/Idle (6).png", "../gameSprites/Player/Idle (9).png", 
    "../gameSprites/Player/Idle (12).png", "../gameSprites/Player/Idle (15).png");
    playerRun = loadAnimation(playerRun_1, playerRun_2, playerRun_3, playerRun_4, playerRun_5);
    playerJump = loadAnimation("../gameSprites/Player/Jump (3).png", "../gameSprites/Player/Jump (6).png", "../gameSprites/Player/Jump (9).png", 
    "../gameSprites/Player/Jump (12).png", "../gameSprites/Player/Jump (15).png");
    playerRunL = loadAnimation("../gameSprites/Player/RunL (1).png", "../gameSprites/Player/RunL (2).png", "../gameSprites/Player/RunL (3).png", 
    "../gameSprites/Player/RunL (4).png", "../gameSprites/Player/RunL (5).png")

}

function setup() {
    engine = Engine.create();
    world = engine.world

    var canvas = createCanvas(800, 600)

    level = 1;

    player = createSprite(canvas.width * 0.2, canvas.height - 85, 20, 50);
    player.scale = 0.2

    ground = createSprite(canvas.width/2, canvas.height - 15, canvas.width, 30)
    ground.scale = 1.2

    invis = createSprite(ground.x, ground.y + 1, ground.width, ground.height)
    invis.visible = false

    door = createSprite(canvas.width - 100, canvas.height - 400)
    door.scale = 1.5


    b1 = createSprite(100, 300, 100, 70);
    b2 = createSprite(200, 300, 85, 70);
    b3 = createSprite(300, 300, 65, 70);
    b4 = createSprite(400, 300, 45, 70);
    b5 = createSprite(500, 300, 25, 70);

    b1b = createSprite(100, 300, 100, 70);
    b2b = createSprite(200, 300, 85, 70);
    b3b = createSprite(300, 300, 65, 70);
    b4b = createSprite(400, 300, 45, 70);
    b5b = createSprite(500, 300, 25, 70);

    b1b.visible = false;
    b5b.visible = false;
    b4b.visible = false;
    b3b.visible = false;
    b2b.visible = false;

    b1.setCollider("rectangle", 0, 5, 100, 60)
    b2.setCollider("rectangle", 0, 5, 85, 60)
    b3.setCollider("rectangle", 0, 5, 65, 60)
    b4.setCollider("rectangle", 0, 5, 45, 60)
    b5.setCollider("rectangle", 0, 5, 25, 60)

    wall1 = createSprite(200, 490, 25, 140)
    wall2 = createSprite(300, 490, 25, 140)
    wall3 = createSprite(400, 490, 25, 140)
    wall4 = createSprite(500, 490, 25, 140)
    wall5 = createSprite(600, 490, 25, 140)

    wall1.visible = false
    wall2.visible = false
    wall3.visible = false
    wall4.visible = false
    wall5.visible = false

    //player.debug = true
    player.setCollider("rectangle", - 170, 30, 300, 500)

    b1.shapeColor = "white";
    b3.shapeColor = "white";
    b4.shapeColor = "white";
    b5.shapeColor = "white";
    b2.shapeColor = "white";

    mouseCursor = createSprite(0, 0, 10, 10)
    mouseCursor.shapeColor = "green"
    mouseCursor.visible = false;

    player.addAnimation("run", playerRun);
    player.addAnimation("jump", playerJump);
    player.addAnimation("runL", playerRunL);
    player.addAnimation("idle", playerIdle);
    ground.addAnimation("ground", groundImg)
    door.addAnimation("door", doorImg)

    rightEdge = createSprite(canvas.width, canvas.height/2, 10, canvas.height)
    leftEdge = createSprite(-20, canvas.height/2, 50, canvas.height)

    puzzleText = createElement('h2')
    puzzleText.position(canvas.width/2 - 260, 23)

    puzzleText21 = createElement('h2')
    puzzleText22 = createElement('h2')
    puzzleText23 = createElement('h2')
    puzzleText24 = createElement('h2')
    puzzleText25 = createElement('h2')

    puzzleText41 = createElement('h2')
    puzzleText42 = createElement('h2')
    puzzleText43 = createElement('h2')

    textBox4 = createSprite(canvas.width/2, 250, 600, 120)
    textBox4.shapeColor = "white";
    textBox4.visible = false;

    puzzleText41.position(120, 190)
    puzzleText42.position(120, 220)
    puzzleText43.position(120, 250)

    textBox = createSprite(canvas.width/2, 50, 700, 30)
    textBox.shapeColor = "white"

    textBox2 = createSprite(400, 175, 525, 150)
    textBox2.shapeColor = "white";
    textBox2.visible = false;

    levelText = createElement('h2');

}

function draw() {
    background(backgroundImg);
    player.velocityY += 0.8
    player.collide(invis);
    player.collide(rightEdge);
    player.collide(leftEdge);

    levelText.html("Level: " + level)
    levelText.position(700, 600)

    playLevel(level)

    

    mouseCursor.x = mouseX
    mouseCursor.y = mouseY

    player.changeAnimation("idle")
    player.setCollider("rectangle", - 170, 30, 300, 500)

    if (keyIsDown(RIGHT_ARROW)) {
        player.x += 20
        player.changeAnimation("run", playerRun)
        player.setCollider("rectangle", - 120, 30, 300, 500)
    }

    if (keyIsDown(UP_ARROW) && player.collide(ground) || keyIsDown(UP_ARROW) && player.isTouching(b1b) || keyIsDown(UP_ARROW) && 
    player.isTouching(b2b) || keyIsDown(UP_ARROW) && player.isTouching(b3b) || keyIsDown(UP_ARROW) && player.isTouching(b4b) || 
    keyIsDown(UP_ARROW) && player.isTouching(b5b)) {
        player.velocityY = -10
        player.changeAnimation("jump", playerJump)
    }

    if (keyIsDown(LEFT_ARROW)) {
        player.x -= 20
        player.changeAnimation("runL", playerRunL)
        player.setCollider("rectangle", 70, 30, 300, 500)
    }

    if (player.isTouching(door)) {
        changeLevel(level+1)
    }
    
    //player.x = mouseX
    //player.y = mouseY

    drawSprites();
}


function playLevel(lvl) {
    if (lvl === 1) {
        player.collide(b1);
        player.collide(b2);
        player.collide(b3);
        player.collide(b4);
        player.collide(b5);

        b1b.x = b1.x
        b2b.x = b2.x
        b3b.x = b3.x
        b4b.x = b4.x
        b5b.x = b5.x

        b1b.y = b1.y
        b2b.y = b2.y
        b3b.y = b3.y
        b4b.y = b4.y
        b5b.y = b5.y
        
        puzzleText.html("Construct a staircase to make your way out of here!")
    }

    else if (lvl === 2) {


        num1.position(125, 300)
        num2.position(325, 300)
        num3.position(525, 300)

        submitButton.position(350, 400)

        puzzleText21.html("682 One number is correct and correctly placed")
        puzzleText22.html("614 One number is correct and wrongly placed")
        puzzleText23.html("206 Two numbers are correct but wrongly placed")
        puzzleText24.html("738 Nothing is correct here")
        puzzleText25.html("870 One number is correct but in wrong place")
        puzzleText21.position(165, 100);
        puzzleText22.position(165, 125);
        puzzleText23.position(165, 150);
        puzzleText24.position(165, 175);
        puzzleText25.position(165, 200);

        submitButton.mousePressed ( ()=> {
            console.log(level)
            a1 = num1.value()
            a2 = num2.value()
            a3 = num3.value()
            if (a1 === "0" && a2 === "4" && a3 === "2") {
                
                changeLevel(3)
                console.log(level)
            }
            
            console.log(a1)
            console.log(a2)
            console.log(a3)
        })

        puzzleText.html("Solve this combination lock to make it through!")
    }

    else if (level === 3) {

        puzzleText.html("Try and get all the walls down so you can reach the door!")
        puzzleText.position(100, 23)
        

        player.collide(wall1)
        player.collide(wall2)
        player.collide(wall3)
        player.collide(wall4)
        player.collide(wall5)
        
        button31.position(200, 250);
        button32.position(400, 250);
        button33.position(600, 250)

        button31.mousePressed( ()=> {
            wall1.velocityY = 5
            wall2.velocityY = 5
            wall5.velocityY = 5

            wall3.y = 490;
            wall3.velocityY = 0

            wall4.y = 490;
            wall4.velocityY = 0
        })

        button32.mousePressed( ()=> {
            wall1.velocityY = 0;
            wall1.y = 490;

            wall2.velocityY = 0;
            wall2.y = 490;

            wall5.velocityY = 0;
            wall5.y = 490;

            wall4.velocityY = 5;
        })

        button33.mousePressed(()=> {
            wall3.velocityY = 5
        })
    }

    else if (level === 4) {
        submitButton41.position(350, 450)
        puzzleText.html("Play this short memory game to advance! Be observative to pass!")
        puzzleText41.html("Sunset is the time of day when our sky meets the outer")
        puzzleText42.html("space solar winds. There are blue,")
        puzzleText43.html("pink, and purple swirls, spinning and twisting,")

        submitButton41.mousePressed(()=>{
            submitButton42 = createButton("Click Me to Submit!")
            submitButton42.position(360, 500)
            submitButton41.hide()
            textBox4.destroy()
            puzzleText41.hide()
            puzzleText42.hide()
            puzzleText43.hide()
    
            qBox = createSprite(400, 215, 470, 30)
            qBox.shapeColor = "white";
            question = createElement('h2')
            answerInput = createInput("Answer...")
            answerInput.position(350, 430)
            answer4 = answerInput.value();
            question.position(200, 190);
            question.html("How many times did the letter 'a' appear?")

            changeLevel(4.5);
        })
    
    }

    else if (level === 4.5) {
        submitButton42.mousePressed(()=>{
            answer4 = answerInput.value();
            if (answer4 === "6") {
                changeLevel(4.6)
                console.log(level)
            }
        })
    }

    else if (level === 4.6) {
        submitButton42.mousePressed(()=>{
            answer4 = answerInput.value();
            if (answer4 === "sunset" || answer4 === "play") {
                changeLevel(5)
                console.log(level)
            }
        })
    }

    else if(level === 5) {
         puzzleText.html("Try and catch the door! It runs away faster than expected!")

         if (frameCount%15 === 0) {
             door.x = random(300, 770)
             door.y = random(300, 550)
         }
    }

    else if (level === 6) {
        level = "Dont Cheat :)"
    }

    else if (level === "Dont Cheat :)") {
        submitButton6.mousePressed(()=>{
            if (a6.value() === "6") {
                changeLevel(7)            
            }
        })
    }

    else if(level === 7) {
        puzzleText.html("Can you find the right one?")
        puzzleText.position(270 ,23);

        if (a7.value()==="1") {
            changeLevel(8)
        }
    }

    else if (level === 8) {
        submitButton8.mousePressed(()=>{
            question8.html("I see, well games over!")

            a8.hide();
            submitButton8.hide();

            endScreen.visible = true;
        })
    }

}

function changeLevel(levelChange) {
    
    if (level === 1) {

        num1 = createInput("First Digit")
        num2 = createInput("Second Digit")
        num3 = createInput("Third Digit")

        submitButton = createButton("Submit Answers")


        b1.destroy();
        b2.destroy();
        b3.destroy();
        b4.destroy();
        b5.destroy();
        b1b.destroy();
        b2b.destroy();
        b3b.destroy();
        b4b.destroy();
        b5b.destroy();

        door.visible = false

        textBox2.visible = true
    }

    else if (level === 2) {

        puzzleText21.hide();
        puzzleText22.hide();
        puzzleText23.hide();
        puzzleText24.hide();
        puzzleText25.hide();

        textBox2.destroy();

        submitButton.hide();
        num1.hide();
        num2.hide();
        num3.hide();

        door.visible = true
        door.x = 700
        door.y = 475

        button31 = createButton("Click Me!")
        button32 = createButton("Click Me!")
        button33 = createButton("Click Me!")

        wall1.visible = true
        wall2.visible = true
        wall3.visible = true
        wall4.visible = true
        wall5.visible = true
    }

    else if (level === 3) {
        wall1.destroy();
        wall2.destroy();
        wall3.destroy();
        wall4.destroy();
        wall5.destroy();

        button31.hide();
        button32.hide();
        button33.hide();

        textBox4.visible = true;
        door.visible = false;
        submitButton41 = createButton("Click Me to Take Test!")

        door.x = 1000
        door.y = 475
    }

    else if(level === 4.5 ) {
        question.html("What was the first word? (type without caps)")
        question.position(173, 190)

        door.x = 1000
        door.y = 475
    }

    else if(level === 4.6) {
        question.hide();
        qBox.destroy();
        submitButton42.hide();
        answerInput.hide();

        door.x = 700
        door.y = 475

        door.visible = true;
    }

    else if (level === 5) {
        puzzleText.html("Do you Remember?")
        puzzleText.position(340, 23)
        textBox6 = createSprite(400, 150, 700, 40)
        a6 = createInput("Answer...")
        question6 = createElement('h2');

        a6.position(340, 430);
        question6.position(150, 125);

        question6.html("What level is this? (Hope you were keeping track!)")

        textBox6.shapeColor = "white";

        submitButton6 = createButton("Check Answer")
        submitButton6.position(365, 300)

        door.x = 1000
        door.y = 475

        door.visible = false;
    }

    else if (level === "Dont Cheat :)") {
        textBox6.destroy()
        question6.hide();
        a6.hide()
        submitButton6.hide();
        
        box7 = createSprite(400, 300, 600, 350);
        box7.shapeColor = rgb(211, 211, 211)

        a7 = createInput("Number?")
        a7.position(350, 500);

        france = createSprite(255, 350, 10, 10)
        luxum = createSprite(405, 350, 10, 10)
        rus = createSprite(555, 350, 10, 10)

        france.addAnimation("france", franceImg)
        luxum.addAnimation("luxum", luxumImg)
        rus.addAnimation("russia", rusImg)

        label1 = createElement('h2')
        label2 = createElement('h2')
        label3 = createElement('h2')

        question7 = createElement('h2')
        question7.position(210, 200);
        question7.html("Which one of these is the flag for france?")

        label1.html("1")
        label2.html("2")
        label3.html("3")

        label1.position(270, 250)
        label2.position(410, 250)
        label3.position(550, 250)

        door.x = 1000
        door.y = 475

        door.visible = false;
    }

    else if (level === 7) {
        box7.destroy();
        label1.hide()
        label2.hide()
        label3.hide()
        a7.hide();
        france.destroy();
        luxum.destroy();
        rus.destroy();
        question7.hide();

        puzzleText.html("This is the last level, Hope you enjoyed the game!")
        puzzleText.position(200, 23)
        
        box8 = createSprite(400, 300, 400, 300);
        box8.shapeColor = "white";

        question8 = createElement('h2');

        question8.html("Did you enjoy this game?")
        question8.position(290, 200)

        a8 = createInput("Answer....")
        a8.position(320, 350);

        submitButton8 = createButton("Submit")
        submitButton8.position(380, 300);

        endScreen = createSprite(400, 300, 800, 600);
        endScreen.shapeColor = "black";
        
        endScreen.visible = false;
    }
    
    player.x = canvas.width * 0.1 
    player.y = 515


    level = levelChange
}   


function mouseDragged() {
    if (mouseCursor.collide(b1)) {
        followPos(b1)
    }

    if (mouseCursor.collide(b2)) {
        followPos(b2)
    }

    if (mouseCursor.collide(b3)) {
        followPos(b3)
    }

    if (mouseCursor.collide(b4)) {
        followPos(b4)
    }

    if (mouseCursor.collide(b5)) {
        followPos(b5)
    }
}

function followPos(sprite) {
    sprite.x = mouseX
    sprite.y = mouseY
}

