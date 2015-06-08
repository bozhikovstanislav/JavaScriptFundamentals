function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function Point(x,y){
    if (!isNumber(x) || !isNumber(y)) {
        throw  new Error('X and Y should be numbers.');
    }
    if(!(this instanceof Point)){
        return new Point(x,y);
    }
    this.x=x;
    this.y=y;
}
/**
 * @return {string}
 */
Point.prototype.showPoint = function(){
    return 'P('+this.x+','+this.y+')';
};

function Line(P1,P2){
    if (!(P1 instanceof Point) || !(P2 instanceof Point)) {
        throw  new Error('X and Y should be numbers.');
    }
    if(!(this instanceof Line)){
        return new Line(P1,P2);
    }
    this.P1=P1;
    this.P2=P2;

}
Line.prototype.getDistance=function(){
  var x1=(this.P1.x-this.P2.x)*(this.P1.x-this.P2.x),
      y1=(this.P1.y-this.P2.y)*(this.P1.y-this.P2.y);

    return Math.sqrt(x1+y1);
};

function Triangle(p1,p2,p3){
    if(!(this instanceof Triangle)){
        return new Triangle(p1,p2,p3);
    }

    this.p1=p1;
    this.p2=p2;
    this.p3=p3;
}
function canFormTriangle(a,b,c){
    return (a.getDistance() < b.getDistance() + c.getDistance() &&
        b.getDistance() < c.getDistance() + a.getDistance() &&
        c.getDistance() < a.getDistance() + b.getDistance());

}
var pointA=new Point(2,3),
    pointB=new Point(4,6),
    pointC=new Point(3,8),
    lineA=new Line(pointA,pointB),
    lineB=new Line(pointB,pointC),
    lineC=new Line(pointC,pointA),
    triangle=new Triangle(lineA,lineB,lineC);

console.log(pointA.showPoint());
console.log('Can form triangle'+canFormTriangle(lineA,lineB,lineC));