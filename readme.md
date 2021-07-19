# local-proxy-emulator

Esse projeto foi desenvolvido com a intenção de melhor a experiencia de quem programa utilizando o emulador do Android Studio uma vez que o mesmo nao permite que utilizemos de forma facil o host do windows, dentro do proprio emulador.

Por exemplo se no seu host do windows você tem um dominio abc-adoleta.com no emulador ele nao vai conseguir entender esse dominio, mesmo que ele já esteja mapeado na sua maquina.

Para utilizar este projeto basta rodar da seguinte forma:

```bash
npm install
node index.js [PORTA] [URL_BASE]
```

por exemplo:

```bash
npm install
node index.js 3000 http://abc-doleta.com
```

E então tudo que bater no seu localhost (ip da sua maquina), na porta que foi indicada por você, será vai passar imetiatamente para a url que foi indicada.