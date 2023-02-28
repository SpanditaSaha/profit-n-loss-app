const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output-box");

function calculateProfitAndLoss(initial,quantity,current)
{
    if(initial>current)
    {
        var loss = ((initial-current)*quantity);
        var lossPercentage = (loss/(initial*quantity))*100;
        outputBox.style.color = 'red';
        showOutput("Oops! The loss is "+loss.toFixed(2)+" and the percentage of loss is "+lossPercentage.toFixed(2)+ "% ");
    }
    else if(current>initial)
    {
        var profit = ((current-initial)*quantity);
        var profitPercentage = (profit/(initial*quantity))*100;

        outputBox.style.color = 'green';
        showOutput("Yay! The profit is "+profit.toFixed(2)+" and the percentage of profit is "+profitPercentage.toFixed(2)+ "% ");
    }
    else
    {
        showOutput("No pain no gain and no gain no pain!!");
    }
}


function showOutput(msg)
{
  outputBox.innerText = msg;
}

function clickHandler()
{
    var ip = Number(initialPrice.value);
    var sq = Number(stocksQuantity.value);
    var cp = Number(currentPrice.value);

    if(ip&&sq&&cp)
    {
        calculateProfitAndLoss(ip,sq,cp);
    }
    else{
        showOutput("Please enter all the fields!!");
    }
}

submitBtn.addEventListener("click",clickHandler);