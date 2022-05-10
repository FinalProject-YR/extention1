(function () {
  function fnAddButtons() {
    
    var btn = document.createElement("input");
    btn.type="submit"
    btn.id = "search-mm-btn";
    var str =`<img src="data:image/png;
    base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAA7CAMAAADxTAypAAAAVFBMVEVHcEyxzjKlpaaXl5eQkJDBwcH19vaMjY3Jycmampvq8snV1dW4ubnl5ubF2maMj5C9vb6nqamrrK2NkJGQk5SSlZamp6iUl5iwsrOZnJ2ur7Cfn6DVff5tAAAAAXRSTlMAQObYZgAAATlJREFUWMPt1tlygzAMBVBCsK6M5NhsWf//P8tkm6STOE5MH9pyn+GMdAcDRfEDWdv0RJiyQnJi01QtJ8U0fXQaTlyfo0shlTHLmXkSmruZu5m7mbv5Xd2Qsf+NWU/DHKZh7FOmridhFovV32DcZudOvdT1yNQ3/bzDbIH9aZJLVp8wPTC4bEY94DV7qQG99Zvcik0HZu9NHkM7DEQDDpTFcActyKDjnMNAJXyrugfWlHE0pbv81PeSwbTwZTOm9Ng+/DIkMbJEczwIrkXv3v3AXBlFd95FAP3eDpHTXQLjLMrzvdRgczcOtyoSrCYw4nEtloG7kqXVoKKSwJCa6yIU7jt2QYhccB+9tm6KCeMgwpTJFCPjNDZMGsNSmOgwiQxziF9hYV4zeoj2e2Sql0G1f6EkMdWjB+8LlZAWgedbZDQAAAAASUVORK5CYII=" alt="מעבר מהיר בתפריט לשאילתה רשימת ציונים" class="ButtonMenuImage Grades" id="MenuIcon_11">
    <span class="ButtonMenuFont">רשימת ציונים</span>`
    var res = htmlToElement(str);
    btn.appendChild(res)

    
    btn.onclick = function(){
      // var actualCode = "SubmitForm(this, '','HOMEWORK_Student_Screen','-N211470802,-N82176324359249,-N50,-A,R1C5,-N0,-N0,R1C2','')"
      // document.documentElement.setAttribute('onreset', actualCode);
      // document.documentElement.dispatchEvent(new CustomEvent('reset'));
      // document.documentElement.removeAttribute('onreset');
      fetch("https://yedion.jce.ac.il/yedion/fireflyweb.aspx", {
      "headers": {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-language": "en-US,en;q=0.9,he;q=0.8",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded",
        "pragma": "no-cache",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "same-origin",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1"
      },
      "referrer": "https://yedion.jce.ac.il/yedion/fireflyweb.aspx",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": "APPNAME=&PRGNAME=HOMEWORK_Student_Screen&ARGUMENTS=-N211470802%2C-N13453732320058%2C-N50%2C-A%2CR1C5%2C-N0%2C-N0%2CR1C2%2C-AY&R1C5=2022&R1C2=0&generatedToken=01144*01751",
      "method": "POST",
      "mode": "cors",
      "credentials": "include"
      })
      .then(response => response.text())
      .then(data => {var newHTML = document.open("text/html", "replace");
      newHTML.write(data);
      newHTML.close();}
      );
      };

      var x =document.querySelector(".IconMenu");
      if(x)
        x.appendChild(btn);
      
       
  }

  
  function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}
 
  fnAddButtons();
})();

