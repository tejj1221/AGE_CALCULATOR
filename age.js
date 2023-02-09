const calculate=()=>{
    let Result=document.getElementById("result")
   const date=document.querySelector("#datevalue").value
   
    const month=document.getElementById("monthvalue").value
    const year=document.getElementById("yearvalue").value
    if(date>99||date<0){
        document.getElementById("errors").innerHTML="date should be positive two digits only"
        document.getElementById("days").innerHTML=' '
        document.getElementById("months").innerHTML=' '
        document.getElementById("years").innerHTML=' '
    }else if(month>12||month<0){
        document.getElementById("errors").innerHTML="month should be positive and two digits only"
        document.getElementById("days").innerHTML=' '
        document.getElementById("months").innerHTML=' '
        document.getElementById("years").innerHTML=' '
    }
    else if(year>9999||year<0){
        document.getElementById("errors").innerHTML="year should be positive and four digits only"
        document.getElementById("days").innerHTML=' '
        document.getElementById("months").innerHTML=' '
        document.getElementById("years").innerHTML=' '
    }
    let present =new Date()
    newyear=present.getFullYear()
    newmonth=present.getMonth()
    newdate=present.getDate()
  let y1=newyear-year
  let m2=newmonth-month
  let d1=newdate-date
  if(d1<0){
    m2=m2-1
    d1=parseInt(30+d1)
  }
  if(m2<0){
    y1=y1-1
    m2=parseInt(12+m2)
  }
  if(y1<0){
    Result.innerHTML="ENTER VALID DATA"
  }
 document.getElementById("days").innerHTML="your age is"+" "+d1+" " +"days"
 document.getElementById("months").innerHTML=m2+" "+"months"
 document.getElementById("years").innerHTML=y1+" "+"years"

}