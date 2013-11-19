        var getElementsByClassName=function(className){
	    	var tags=document.getElementsByTagName("*");
	    	var data= new Array();
	    	for(var n=1;n<tags.length;n++){
	    		var temp=tags.className.split(' ')
	    		for(m in temp)
	    			if(temp[m]==className)data[tags.length]=tags[m]; 
	    	}
	    	return data;
	    }