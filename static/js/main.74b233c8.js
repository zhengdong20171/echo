!function(){"use strict";var n=[],e=new Map([["file1.csv",[[1,2,3,4,5],["The","song","remains","the","same."],["This","is","csv","file","one"]]],["file2.csv",[[10,20,30,40,50],["This","is","csv","file","2."]]]]);var t=[],o="brief";function r(){var r=document.getElementById("repl-command-box");if(null==r)console.log("Couldn't find input element");else if(r instanceof HTMLInputElement){var i=r.value.split(" ");"mode"===i[0]?function(){"brief"===o?o="verbose":"verbose"===o&&(o="brief");var n=new Array("mode is "+o);t.push(n)}():"load_file"===i[0]?function(r){var a=" loading "+function(t){var o=e.get(t);return o?(n=o,"success"):"error"}(r[1]),i=new Array("Command: ".concat(r[0]," ").concat(r[1]),"Output: "+r[1]+a);"brief"==o&&(i=new Array(r[1]+a));t.push(i)}(i):"view"===i[0]?function(e){var r=a(n),i=new Array("Command: ".concat(e[0]),"Output: "+r);"brief"==o&&(i=new Array(r));t.push(i)}(i):"search"===i[0]?function(e){var r=(l=e[1],e[2],l>=n[0].length?[]:[n[1]]),i="No result found";var l;r.length>0&&(i=a(r));var c=new Array("Command: ".concat(e[0]," ").concat(e[1]," ").concat(e[2]),"Output: "+i);"brief"==o&&(c=new Array(i));t.push(c)}(i):function(n){var e=new Array("Command: "+n[0],"Output: Not a valid command");"brief"==o&&(e=new Array("Not a valid command"));t.push(e)}(i),function(){var n="";t.forEach((function(e){e.forEach((function(e){n+="<p>".concat(e,"</p>")}))}));var e=document.getElementById("repl-history");if(null==e)return void console.log("Could not find old-REPL element");if(!(e instanceof HTMLElement))return void console.log("first old-REPL element was not an HTMLElement");e.innerHTML=n}()}else console.log("Found element ".concat(r,", but it wasn't an button"))}function a(n){for(var e="<table border=1>",t=0;t<n.length;t++){e+="<tr>";for(var o=0;o<n[t].length;o++)e+="<td>"+n[t][o]+"</td>";e+="</tr>"}return e+="</table>"}window.onload=function(){!function(){var n=document.getElementById("submit-button");null==n?console.log("Couldn't find input element"):n instanceof HTMLButtonElement?n.addEventListener("click",r):console.log("Found element ".concat(n,", but it wasn't an button"))}()}}();
//# sourceMappingURL=main.74b233c8.js.map