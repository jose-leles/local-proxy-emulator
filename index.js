const ARGS = process.argv.slice(2);
if(!ARGS[0] || !ARGS[1])
  throw("Informe a porta e a url base para rodar o programa")

const express = require('express')
const fs = require('fs')
const app = express()
const axios = require('axios')

const port = parseInt(ARGS[0]);
const URL_BASE = ARGS[1];

app.use((req, res, next) => {
  let { method, headers, path, query, body } = req;
  const params = Object.entries(query);
  axios({
    method,
    url: `${URL_BASE}/${path}?${params.map(([key, value]) => key + "=" + value).join("&")}`,
    data: body, 
    withCredentials: true,
    responseType: 'arraybuffer',
    headers:{
      Cookie: headers.cookie ? headers.cookie : ""
    } 
  })
  .then(resInternal => {
    let {headers, status, data} = resInternal;
    if(headers != null && headers['set-cookie']){
      headers['Set-Cookie'] = headers['set-cookie']
    }
    res.header(headers)
    res.status(status ? status : 200)
    res.write(data)
    res.end();
  })
  .catch(errorInternal => {
    console.log(errorInternal)
    res.end(500);
  })
})

app.listen(port, () => {
  console.log(`Aplicacao rodando na porta: http://localhost:${port}`)
})