// creating Event Listner on Click of Button //
var event1 = document.getElementById("button");
event1.addEventListener('click',calculate,false);

// creating Event Listner on Click of Button //
var event2 = document.getElementById("button1");
event2.addEventListener('click',reset,false);


// Creating Function to Calculate Salary //

function calculate()
{
    var salary = document.getElementById("amount").value;
    
// If statement for salary under 10600
    if ( salary <= 10600)
        {
            document.getElementById("GrossSalary").innerHTML ="<li>"+ "Your Gross Salary is " +salary+"."+"</li>";
            
            document.getElementById("TaxFreeAllowance").innerHTML ="<li>"+ "Your Tax Free Allowance "+ 10600. +"</li>";
                                                                                                                                                     
            document.getElementById("NetSalary").innerHTML ="<li>"+ "Your Net Salary is "+salary + "." + "</li>" ;

        }
    
// statement for salary between 10600 & 31000
    
   else if (( salary >10600) && salary <= 31000 )
        {
            
            var Taxableamount =( salary - 10600 ); 
            
            var Tax = Taxableamount * 0.20;
            
            var NetSalary = salary-Tax;
            
            document.getElementById("GrossSalary").innerHTML ="<li>"+"Your Gross Salary is" +salary+"."+"</li>";
            
            document.getElementById("TaxFreeAllowance").innerHTML ="<li>"+"Your Tax Free Allowance "+ 10600+"."+"</li>";

            document.getElementById("TaxAt20").innerHTML ="<li>" + "Your Tax At 20% is " + Tax+"."+"</li>";

            document.getElementById("NetSalary").innerHTML ="<li>"+ "Your Net Salary is "+NetSalary+"."+"</li>";

        }
    
    // for salary abouve 31000
    else 
        {
            
            var Taxableamount =( 31000 - 10600 ); 
            
            var Tax = Taxableamount * 0.20;
            
            var Taxableamount2 = ( salary - 31000 )
            
            var Tax1 = Taxableamount2 *.40;
            
            var totaltax = Tax + Tax1;
            
            var NetSalary = salary-totaltax;
            
            
            document.getElementById("GrossSalary").innerHTML ="<li>"+"Your Gross Salary is " +salary+"."+"</li>";
            
            document.getElementById("TaxFreeAllowance").innerHTML ="<li>"+"Your Tax Free Allowance "+ 10600+"."+"</li>";

            document.getElementById("TaxAt20").innerHTML = "<li>"+"Your Tax At 20% is " + Tax+"."+"</li>";

            document.getElementById("TaxAt40").innerHTML ="<li>"+ "Your Tax at 40% is " + Tax1+"."+"</li>";

            document.getElementById("NetSalary").innerHTML ="<li>"+ "Your Net Salary is "+NetSalary+"."+"</li>";

        }
    
    
}

function reset()

{
    window.location.reload();
}
