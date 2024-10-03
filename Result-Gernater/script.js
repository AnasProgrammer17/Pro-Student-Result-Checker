
function result() {
    var math = prompt ("Enter Your Maths Obtain Number Here!")
    var physics = prompt ("Enter Your Physics Obtain Number Here!")
    var computer = prompt ("Enter Your Computer Obtain Number Here!")
    var chemistery= prompt ("Enter Your chemistery Obtain Number Here!")
    var english= prompt ("Enter Your English Obtain Number Here!")
    var subtotal = parseInt(math) + parseInt(physics) + parseInt(computer) + parseInt(chemistery) + parseInt(english);
    var average = subtotal / 500;
    var total = average * 100;

    if (total >= 90){
        alert (total + "% " + "(Congratulations) Your Grade Is A")
    }else{
        if( total >= 80){
            alert (total + "% " + " (Good) Your Grade Is B")
        }else{
            if(total >= 70){
                alert (total + "% " + " (Nice) Your Grade Is C")
            }else{
                if(total >= 60){
                    alert (total + "% " + "(You Must Better For Next Time!) Your Grade Is D")
                }else{
                    alert (total + "% " + "(Need Hard Work) Your Grade Is Fail")
                }
            }
        }
    }


    // alert (total)
}
