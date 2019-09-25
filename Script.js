class Character{

    constructor(name,energy,id){

        this.name=name;
        this.energy=energy;
        this.id=id;
    }

    display = function(){

        document.getElementById(this.id).innerHTML=`name: ${this.name} <br> energy: ${this.energy}`;

    }

    attack = function(opponent,item){
        let newEnergy= opponent.energy - item.iHitpoint;
        opponent.energy=newEnergy;
        opponent.display();
        if(opponent.energy<=0){
            document.getElementById(opponent.id).innerHTML=`looser`;
            document.getElementById(this.id).innerHTML=`winer`;
        }
        document.getElementById("console").innerHTML= `${this.name} is attacking ${opponent.name} with ${item.img} `;
    }



}

class item {
    constructor( iName, iHitpoint, img){
        this.iName=iName;
        this.iHitpoint=iHitpoint;
        this.img=img;
    }
}
const item1 = new item("gun",20,'<img class="img" src="gun.jpg">');
const item2 = new item("grenade",30,'<img class="img" src="grenade.jpg">');
const item3 = new item("RPG",35,'<img class="img" src="RPG.jpg" >');
const item4 = new item("laser",25,'<img class="img" src="laser.jpg" >');
const item5 = new item("arrow",15,'<img class="img" src="arrow.jpg" >');
const item6 = new item("knife",5,'<img class="img" src="knife.jpg" >');

const c1 = new Character("Augmen",100,"c1");
const c2 = new Character("Chun",100,"c2");
c1.display();
c2.display();

reset = function(){

    c1.energy=100;
    c2.energy=100;
    c1.display();
    c2.display();
    document.getElementById('console').innerHTML="  ";

}

const items=[item1, item2, item3, item4, item5, item6];

function selectItem(){
let number=Math.floor(Math.random()*6);
return items[number];

}
