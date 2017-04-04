function ShowMenu(selection)
{
    document.getElementById("first").style.visibility = "hidden";
    document.getElementById("second").style.visibility = "hidden";
    document.getElementById("third").style.visibility = "hidden";
    document.getElementById("fourth").style.visibility = "hidden";
    document.getElementById("fifth").style.visibility = "hidden";
    
    
    switch (selection)
    {
        case "first":
            document.getElementById("first").style.visibility ="visible";
            document.getElementById("second").style.visibility ="hidden";
            document.getElementById("third").style.visibility ="hidden";
            document.getElementById("fourth").style.visibility = "hidden";
            document.getElementById("fifth").style.visibility = "hidden";
            document.getElementById("first").style.position ="relative";
            document.getElementById("second").style.position ="absolute";
            document.getElementById("third").style.position ="absolute";
            document.getElementById("fourth").style.position = "absolute";
            document.getElementById("fifth").style.position = "absolute";
            document.getElementById("orderDisplay").style.visibility = "hidden";
            document.getElementById("orderDisplay").style.position = "absolute";
            document.getElementById("currentorderDisplay").style.visibility = "hidden";
            document.getElementById("currentorderDisplay").style.position = "absolute";
            ListStores();
            break;
        case "second":
            document.getElementById("second").style.visibility ="visible";
            document.getElementById("first").style.visibility ="hidden";
            document.getElementById("third").style.visibility ="hidden";
            document.getElementById("fourth").style.visibility = "hidden";
            document.getElementById("fifth").style.visibility = "hidden";
            document.getElementById("second").style.position ="relative";
            document.getElementById("first").style.position ="absolute";
            document.getElementById("third").style.position ="absolute";
            document.getElementById("fourth").style.position = "absolute";
            document.getElementById("fifth").style.position = "absolute";
            document.getElementById("orderDisplay").style.visibility = "visible";
            document.getElementById("orderDisplay").style.position = "relative";
            document.getElementById("currentorderDisplay").style.visibility = "hidden";
            document.getElementById("currentorderDisplay").style.position = "absolute";
            break;
        case "third":
            document.getElementById("third").style.visibility ="visible";
            document.getElementById("first").style.visibility ="hidden";
            document.getElementById("second").style.visibility ="hidden";
            document.getElementById("fourth").style.visibility = "hidden";
            document.getElementById("fifth").style.visibility = "hidden";
            document.getElementById("third").style.position ="relative";
            document.getElementById("first").style.position ="absolute";
            document.getElementById("second").style.position ="absolute";
            document.getElementById("fourth").style.position = "absolute";
            document.getElementById("fifth").style.position = "absolute";
            document.getElementById("orderDisplay").style.visibility = "hidden";
            document.getElementById("orderDisplay").style.position = "absolute";
            document.getElementById("currentorderDisplay").style.visibility = "visible";
            document.getElementById("currentorderDisplay").style.position = "relative";
            break;
        case "fourth":
            document.getElementById("fourth").style.visibility ="visible";
            document.getElementById("first").style.visibility ="hidden";
            document.getElementById("second").style.visibility ="hidden";
            document.getElementById("third").style.visibility ="hidden";
            document.getElementById("fifth").style.visibility = "hidden";
            document.getElementById("fourth").style.position = "relative";
            document.getElementById("first").style.position ="absolute";
            document.getElementById("second").style.position ="absolute";
            document.getElementById("third").style.position = "absolute";
            document.getElementById("fifth").style.position = "absolute";
            document.getElementById("orderDisplay").style.visibility = "hidden";
            document.getElementById("orderDisplay").style.position = "absolute";
            document.getElementById("currentorderDisplay").style.visibility = "hidden";
            document.getElementById("currentorderDisplay").style.position = "absloute";
            break;
        case "fifth":
            document.getElementById("fifth").style.visibility ="visible";
            document.getElementById("first").style.visibility ="hidden";
            document.getElementById("second").style.visibility ="hidden";
            document.getElementById("third").style.visibility ="hidden";
            document.getElementById("fourth").style.visibility = "hidden";
            document.getElementById("fifth").style.position = "relative";
            document.getElementById("first").style.position ="absolute";
            document.getElementById("second").style.position ="absolute";
             document.getElementById("third").style.position ="absolute";
            document.getElementById("fourth").style.position = "absolute";
            document.getElementById("orderDisplay").style.visibility = "hidden";
            document.getElementById("orderDisplay").style.position = "absolute";
            document.getElementById("currentorderDisplay").style.visibility = "hidden";
            document.getElementById("currentorderDisplay").style.position = "absloute";
            break;
        case "none":
            document.getElementById("first").style.visibility ="hidden";
            document.getElementById("second").style.visibility ="hidden";
            document.getElementById("third").style.visibility ="hidden";
            document.getElementById("fourth").style.visibility = "hidden";
            document.getElementById("fifth").style.visibility = "hidden";
            document.getElementById("first").style.position ="absolute";
            document.getElementById("second").style.position ="absolute";
            document.getElementById("third").style.position ="absolute";
            document.getElementById("fourth").style.position = "absolute";
            document.getElementById("fifth").style.position = "absolute";
            document.getElementById("orderDisplay").style.visibility = "hidden";
            document.getElementById("orderDisplay").style.position = "absolute";
            document.getElementById("currentorderDisplay").style.visibility = "hidden";
            document.getElementById("currentorderDisplay").style.position = "relative";
            break;
        default:
                alert("Please select a different menu option");
    }
}

function ListStores()
{
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getAllCustomers";
    
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var output = JSON.parse(objRequest.responseText);
            GenerateOutput(output);   
        }
    };
    objRequest.open("GET", url, true);
    objRequest.send();
}

function GenerateOutput(result)
{
    var display = "<table><tr><th>View Order</th><th>Customer ID</th><th>Company Name</th><th>City</th></tr>";
    var count = 0;
    var customerID = "";
    var companyname = "";
    var city = "";
    for(count = 0;count < result.GetAllCustomersResult.length;count ++)
    {
        customerID = result.GetAllCustomersResult[count].CustomerID;
        companyname = '<a href="javascript:showOrders(' + "'" + customerID + "');" + '">';
        companyname += result.GetAllCustomersResult[count].CompanyName;
        companyname += '</a>';
        city = result.GetAllCustomersResult[count].City;
        display += '<tr><td><button onclick="get2Current(' + "'" + customerID + "');" + '">View Current Order</button></td><td>' + customerID + "</td><td>" + companyname + "</td><td>" + city + "</td></tr>";
    }
    display += "</table>";
    document.getElementById("customerDisplay").innerHTML = display; }

function getOrders()
{
  var objRequest = new XMLHttpRequest();
  var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getCustomerOrderHistory/";
  url += document.getElementById("custidinput").value;
  
  objRequest.onreadystatechange = function()
  {
    if (objRequest.readyState == 4 && objRequest.status == 200)
    {
        var output = JSON.parse(objRequest.responseText);
        orderOutput(output); }
  };
  objRequest.open("GET", url, true);
  objRequest.send();
}
  
function orderOutput (result)
  {
    var orderText = "<table><tr><th>Order Name</th><th>Total Ordered</th></tr>";
    var count = 0;
    for(count = 0; count < result.length; count ++)
    {
       orderText += "<tr><td>" + result[count].ProductName + "</td><td>" + result[count].Total + "</td></tr>";
    }
    orderText += "</table>";
    document.getElementById("orderDisplay").innerHTML = orderText;
  }

function showOrders(customerID) {
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getCustomerOrderHistory/";
    url += customerID;
    var input = document.getElementById("custidinput");
    input.value = "";
    document.getElementById("menu").selectedIndex = "2";
    
    objRequest.onreadystatechange = function() {
        if (objRequest.readyState == 4 && objRequest.status == 200) {
            var output = JSON.parse(objRequest.responseText);
            showOutput(output);
        }
    };
    
    objRequest.open("GET", url, true);
    objRequest.send();
}
function showOutput(result) {
    var count = 0;
    var orderText = "<table><tr><th>Product Name</th><th>Total</th></tr>";
    
    for (count = 0; count < result.length; count ++) {
    orderText += "<tr><td>" + result[count].ProductName + "</td><td>" + result[count].Total + "</td></tr>";    
    }
    orderText += "</table>";
    ShowMenu("second");
    document.getElementById("menu").selectedIndex = "2";
    document.getElementById("orderDisplay").innerHTML = orderText; }

function goBack() {
    ShowMenu("first");
    document.getElementById("menu").selectedIndex = "1";
}

function getCurrent()
{
  var objRequest = new XMLHttpRequest();
  var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getOrdersForCustomer/";
  url += document.getElementById("custidinput2").value;
  
  objRequest.onreadystatechange = function()
  {
    if (objRequest.readyState == 4 && objRequest.status == 200)
    {
        var output = JSON.parse(objRequest.responseText);
        currentOutput(output); }
  };
  objRequest.open("GET", url, true);
  objRequest.send();
}
  
function currentOutput(result)
  {
    var count = 0;
    var customerID = document.getElementById("custidinput2").value;
    var orderText2 = "<table><tr><th>Button</th><th>Order Date</th><th>Order ID</th><th>Ship Address</th><th>Ship City</th><th>Ship Name</th><th>Post Code</th><th>Shipped Date</th></tr>";
    
    for(count = 0; count < result.GetOrdersForCustomerResult.length; count ++)
    {
       orderText2 += '<tr><td><button onclick="BeforeUpdate(' + "'" + customerID + "')" + '">Update Current Order</button></td><td>' + result.GetOrdersForCustomerResult[count].OrderDate + "</td><td>" + result.GetOrdersForCustomerResult[count].OrderID + "</td><td>" + result.GetOrdersForCustomerResult[count].ShipAddress + "</td><td>" + result.GetOrdersForCustomerResult[count].ShipCity +"</td><td>" + result.GetOrdersForCustomerResult[count].ShipName + "</td><td>" + result.GetOrdersForCustomerResult[count].ShipPostcode + "</td><td>" + result.GetOrdersForCustomerResult[count].ShippedDate + "</td></tr>";
    }
    orderText2 += "</table>";
    ShowMenu("third");
    document.getElementById("menu").selectedIndex = "3";
    document.getElementById("currentorderDisplay").innerHTML = orderText2;
  }
  
function get2Current(customerID) {
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getOrdersForCustomer/";
    url += customerID;
    var input = document.getElementById("custidinput2");
    input.value = "";
    document.getElementById("menu").selectedIndex = "3";
    
    objRequest.onreadystatechange = function() {
        if (objRequest.readyState == 4 && objRequest.status == 200) {
            var output = JSON.parse(objRequest.responseText);
            currentOutput2(output);
        }
    };
    
    objRequest.open("GET", url, true);
    objRequest.send();
}
function currentOutput2(result) {
    var count = 0;
    var orderText2 = "<table><tr><th>Update Order</th><th>Order Date</th><th>Order ID</th><th>Ship Address</th><th>Ship City</th><th>Ship Name</th><th>Post Code</th><th>Shipped Date</th></tr>";
    
    for(count = 0; count < result.GetOrdersForCustomerResult.length; count ++)
    {
       orderid = result.GetOrdersForCustomerResult[count].OrderID;
        shipaddress = result.GetOrdersForCustomerResult[count].ShipAddress;
        shipcity = result.GetOrdersForCustomerResult[count].ShipCity;
        shipname = result.GetOrdersForCustomerResult[count].ShipName;
        shippostal = result.GetOrdersForCustomerResult[count].ShipPostcode;
        updateorderinfo = '<button onclick="BeforeUpdate(' + "'" + orderid + "')" + '">Update Current Order</button>';
       orderText2 += "<tr><td>" + updateorderinfo + "</td><td>" + orderid + "</td><td>" + shipaddress + "</td><td>" + shipcity + "</td><td>" + shipname + "</td><td>" + shippostal + "</td></tr>";
    }
    orderText2 += "</table>";
    document.getElementById("currentorderDisplay").innerHTML = orderText2;
    ShowMenu("third");
  }
  
function BeforeUpdate(orderid)
{
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getCustomerOrderInfo/";
    url += orderid;
    document.getElementById("menu").selectedIndex = "4";
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200) {
        var result = JSON.parse(objRequest.responseText);
        EditUpdate(result);  
        }
    };
    objRequest.open("GET", url, true);
    objRequest.send();
}

function EditUpdate(result)
{
    document.getElementById("orderid").value = result[0].OrderID;
    document.getElementById("orderid").disabled = "true";
    document.getElementById("shipaddress").value = result[0].ShipAddress;
    document.getElementById("shipcity").value = result[0].ShipCity;
    document.getElementById("shipname").value = result[0].ShipName;
    document.getElementById("postalinput").value = result[0].ShipPostcode;
    ShowMenu("fourth");
}

function Update()
{
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/UpdateOrderAddress";
    var orderid = Number(document.getElementById("orderid").value);
    var shipaddress = document.getElementById("shipaddress").value;
    var shipcity = document.getElementById("shipcity").value;
    var shipname = document.getElementById("shipname").value;
    var shippostal = document.getElementById("postalinput").value;
    var parameters = '{"OrderID":' + orderid + ',"ShipAddress":"' + shipaddress + '","ShipCity":"' + shipcity + '","ShipName":"' + shipname + '","ShipPostCode":"' + shippostal + '"}';
    objRequest.onreadystatechange = function()
    {
        if(objRequest.readyState == 4 && objRequest.status == 200)
        {
             var result = JSON.parse(objRequest.responseText);
             var outcome = result.WasSuccessful;
            var error = result.Exception;
            UpdateResult(outcome, error);
            console.log(result);
            UpdateResult(result);
            ShowMenu("first");
            document.getElementById("menu").selectedIndex = "1";
        }
};
objRequest.open("POST", url, true);
objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
objRequest.send(parameters);
}

function UpdateResult(result)
{
//    switch (success)
    switch(result)
    {
        case 1:
            alert("The operation was successful");
            break;
        case 0:
            alert("The operation was not successful:" + exception); 
            break;
        case -2:
            alert("The operation was not successful becasue the data string supplied coul not be deserialized into the service object.");
            break;
        case -3:
            alert("The operation was not successful because a record with the supplied Order ID could not be found.");
            break;
    } 
}
