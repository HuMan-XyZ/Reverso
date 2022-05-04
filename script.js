
function Reverse() {
   
    /// Defining The Word To Be Reversed
        let word = document.getElementById("word_input").value;
    
    
        ///Reverse Code.    
        let rword = String(word);
        var reversedWord = rword.split('').reverse().join('');
        let output = document.getElementById("word_output");
        output.value = reversedWord;
        
        }
    
    

    
    
    
    
     