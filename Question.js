class Form {

    constructor() {
      this.input1 = createInput("Enter Your Name..");
      this.input2 = createInput('Enter Correct Option No.');
      this.title = createElement('h2');
      this.question = createElement('h4');
      this.option1 = createElement('h6');
      this.option2 = createElement('h6')
      this.option3 = createElement('h6');
      this.option4 = createElement('h6');
      this.button = createButton('Submit');
    }
    hide(){
      this.button.hide();
      this.input1.hide();
      this.input2.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("My Quiz Game");
      this.title.position(350, 0);
        this.question.html("Question:-What starts and ends with the letter 'E' ,but has only one letter")
        this.question.position(150,80);
        this.option1.html("1:Envelope")
        this.option1.position(150,100);
        this.option2.html("2:Everyone")
        this.option2.position(150,120);
        this.option3.html("3:Estimate");
        this.option3.position(150,140);
        this.option4.html("4:Example");
        this.option4.position(150,160);
      this.input1.position(150,230);
      this.input2.position(400,230);
      this.button.position(350,300)

      this.button.mousePressed(()=>{
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        contestant.name = this.input1.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
      });
  
    }
}