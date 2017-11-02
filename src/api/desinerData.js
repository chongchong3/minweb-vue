export function getDesinerMes(params) {
    return fetch("/designer/listDesigners", {
     method: "POST",
     headers: {
       "Content-Type": "application/json;charset=UTF-8"
     },
     body: JSON.stringify(params)
   })
 }