// JavaScript Document
var builder=new Formbuilder();
builder.init();
function Formbuilder(){
	this.init=function(){
		var container=document.createElement('div');
		container.className="wrapper";
		document.getElementById('wrap').appendChild(container);
		
		var containerLeft=document.createElement('div');
		containerLeft.className="wrapperLeft";
		container.appendChild(containerLeft);
		
		
		var containerRight=document.createElement('div');
		containerRight.className="wrapperRight";
		container.appendChild(containerRight);
		
		var buttonField = document.createElement('button');
		buttonField.className="buttonDesign";
		buttonField.innerHTML="Create Field";
		containerLeft.appendChild(buttonField);
		
	
		buttonField.onclick = function(){
			var cont = document.createElement('div');
			cont.className = 'wrapperDiv';
			cont.innerHTML = 'Untitled';
			
			
			var txtField = document.createElement('input');
			txtField.className = 'txtField';
			cont.appendChild(txtField);
			containerRight.appendChild(cont);
			
			
		} 
	var buttonField = document.createElement('button');
		buttonField.className="buttonDesign";
		buttonField.innerHTML="Create Para";
		containerLeft.appendChild(buttonField);
		
	
		buttonField.onclick = function(){
			var cont = document.createElement('div');
			cont.className = 'wrapperDiv';
			cont.innerHTML = 'Untitled';
			
			
			var txtField = document.createElement('input');
			txtField.className = 'paraField';
			cont.appendChild(paraField);
			containerRight.appendChild(cont);
			
			
		} 
		

		
		var fix=document.createElement('div');
		fix.className="clearr";
		container.appendChild(fix);
	}
}