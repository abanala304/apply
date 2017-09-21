var obj ={num:10}
function add (a,b,c)

{
    
	return this.num+ a+ b+ c;

}
var Anil = [1,2,3];
add.apply(obj.Anil);
