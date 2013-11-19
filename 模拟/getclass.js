function getclass(className){
	var tags=document.getElementsByTagName("*");
	var data=[];
	for(var n=1;n<tags.length;n++)
	{		
	 if(data[n].className==className)
	 {
	 	data.push(tags[n]);
	 } 
	    	}
	    	return data;
	    }