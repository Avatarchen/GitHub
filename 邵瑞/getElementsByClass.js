var getElementsByClass = function(searchClass,node,tag) {
        var classElements = new Array();
        if ( node == null )
                node = document;
        if ( tag == null )
                tag = '*';
        var elements = node.getElementsByTagName(tag);
        var elsLen = elements.length;
        var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
        for (i = 0, j = 0; i < elsLen; i++) {
                if ( pattern.test(elements[i].className) ) {
                        classElements[j] = elements[i];
                        j++;
                }
        }
        return classElements;
}