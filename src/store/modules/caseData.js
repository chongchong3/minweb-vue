export function getDesinerMes(url,params) {
    return fetch("http://www.example.org/submit.php", {
     method: "POST",
     headers: {
       "Content-Type": "application/x-www-form-urlencoded"
     },
     body: JSON.stringify(params)
   })
 }