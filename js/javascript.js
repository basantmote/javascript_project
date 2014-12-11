// JavaScript Document
var builder=new Formbuilder();
builder.init();
function Formbuilder(){
	var that = this;
	var containerRight;
	this.editField;
	this.addField;
	this.editContent;
	this.addContent;
	this.container;
	this.addNew;
	var containerLeft;
	
	
	this.init=function(){
		that.container=document.createElement('div');
		that.container.className="wrapper";
		document.getElementById('wrap').appendChild(that.container);
		
		containerLeft=document.createElement('div');
		containerLeft.className="wrapperLeft";
		that.container.appendChild(containerLeft);
		
		
		createTabs(containerLeft);
		
		
		
		containerRight=document.createElement('div');
		containerRight.className="wrapperRight";
		that.container.appendChild(containerRight);
		
		that.addContent = document.createElement('div');
		that.editContent = document.createElement('div');
		
		containerLeft.appendChild(that.addContent);
		that.setUpAddContent(that.addContent);
		
		that.addNew.onclick = function(){	
			
			that.removeAddContent(containerLeft,that.editContent);
			
			containerLeft.appendChild(that.addContent);
			that.setUpAddContent(that.addContent);
		}
		
		that.editField.onclick = function(){
			
			that.removeAddContent(containerLeft,that.addContent);
			
			containerLeft.appendChild(that.editContent);
			that.setUpEditContent(that.editContent);
		
		}
		

			
			//var radioField = document.createElement('input');
//			radioField.className = 'radioField';
//			cont.appendChild(radioField);
//			containerRight.appendChild(cont);
			
				var fix=document.createElement('div');
		fix.className="clearr";
		that.container.appendChild(fix);
			
		} 
		
		this.setUpEditContent = function(div){
		var just = document.createElement('div');
		just.className="try";
		just.innerHTML="It will be replaced later";
		div.appendChild(just);
		}
		
		
		this.removeAddContent = function(parent, child){
			
				parent.removeChild(child);
				return true;
			
		}
		
		
		this.setUpAddContent = function(div){
			
			console.log(that.container);
			var buttonField = document.createElement('button');
		buttonField.className="buttonDesign";
		buttonField.innerHTML="Create text field";
		div.appendChild(buttonField);
		
	
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
		div.appendChild(buttonField);
		
	
		buttonField.onclick = function(){
			var cont = document.createElement('div');
			cont.className = 'wrapperDiv';
			cont.innerHTML = 'Untitled';
			
			
			var paraField = document.createElement('input');
			paraField.className = 'paraField';
			cont.appendChild(paraField);
			containerRight.appendChild(cont);
			
			
		} 
		
		var buttonField = document.createElement('button');
		buttonField.className="buttonDesign";
		buttonField.innerHTML="Create radio";
		div.appendChild(buttonField);
		buttonField.onclick = function(){
			var cont = document.createElement('div');
			cont.className = 'wrapperDiv';
			cont.innerHTML = 'Untitled';
			
		
		var radioItem1 = document.createElement("input");
		radioItem1.type = "radio";
		radioItem1.name = "radioGrp";
		radioItem1.id = "rad1";
		radioItem1.value = "myradio1";

		radioItem1.defaultChecked = true; 
		radioItem1.checked = true;

		var radioItem2 = document.createElement("input");
		radioItem2.type = "radio";
		radioItem2.name = "radioGrp";
		radioItem2.id = "rad2";
		radioItem2.value = "myradio2";
		
		var radioItem3 = document.createElement("input");
		radioItem3.type = "radio";
		radioItem3.name = "radioGrp";
		radioItem3.id = "rad3";
		radioItem3.value = "myradio3";
		
		var radioItem4 = document.createElement("input");
		radioItem4.type = "radio";
		radioItem4.name = "radioGrp";
		radioItem4.id = "rad4";
		radioItem4.value = "myradio4";
		
	

		var objTextNode1 = document.createTextNode("Radio1");
		var objTextNode2 = document.createTextNode("Radio2");
		var objTextNode3 = document.createTextNode("Radio3");
		var objTextNode4 = document.createTextNode("Radio4");

		var objLabel = document.createElement("label");
		objLabel.htmlFor = radioItem1.id;
	
		objLabel.appendChild(cont);

		var objLabel2 = document.createElement("label");
		objLabel2.htmlFor = radioItem2.id;
		
		objLabel2.appendChild(cont);
		
         radioItem1.className='radioField';
		cont.appendChild(radioItem1);
		containerRight.appendChild(cont);
		radioItem2.className='radioField';
		cont.appendChild(radioItem2);
		containerRight.appendChild(cont);
		radioItem3.className='radioField';
		cont.appendChild(radioItem3);
		containerRight.appendChild(cont);
		radioItem4.className='radioField';
		cont.appendChild(radioItem4);
		containerRight.appendChild(cont);
		}
		}
		function createTabs(div){
			that.addNew = document.createElement('div');
			that.addNew.className = 'tabb';
			that.addNew.innerHTML = 'Create New';
			div.appendChild(that.addNew);
			
			that.editField = document.createElement('div');
			that.editField.className = 'tabb';
			that.editField.innerHTML = 'Edit Field';
			div.appendChild(that.editField);
			
			
			var clear = document.createElement('div');
			clear.className = 'clear';
			div.appendChild(clear);	
		}
		
		


		
	
	
	

}