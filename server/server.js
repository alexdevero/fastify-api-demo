const fastify = require('fastify')({ logger: true })
const helmet = require('fastify-helmet')
const cors = require('fastify-cors')
const compress = require('fastify-compress')

const jokesJSON = require('./data/jokes.json')

fastify.register(helmet)
fastify.register(cors)
fastify.register(compress)

fastify.get('/', async () => {
  return { message: 'Hello from Fastify!' }
})

fastify.get('/jokes/all', async () => {
  return jokesJSON.jokes
})

fastify.get('/jokes/dark', async () => {
  const jokesDark = jokesJSON.jokes.filter(joke => joke.category.toLocaleLowerCase() === 'dark')
  const randomNumber = Math.floor(Math.random() * jokesDark.length)
  const randomJoke = jokesDark[randomNumber]

  return randomJoke
})

fastify.get('/jokes/dark/all', async () => {
  return jokesJSON.jokes.filter(joke => joke.category.toLocaleLowerCase() === 'dark')
})

fastify.get('/jokes/misc', async () => {
  const jokesMisc = jokesJSON.jokes.filter(joke => joke.category.toLocaleLowerCase() === 'miscellaneous')
  const randomNumber = Math.floor(Math.random() * jokesMisc.length)
  const randomJoke = jokesMisc[randomNumber]

  return randomJoke
})

fastify.get('/jokes/misc/all', async () => {
  return jokesJSON.jokes.filter(joke => joke.category.toLocaleLowerCase() === 'miscellaneous')
})

fastify.get('/jokes/programming', async () => {
  const jokesProgramming = jokesJSON.jokes.filter(joke => joke.category.toLocaleLowerCase() === 'programming')
  const randomNumber = Math.floor(Math.random() * jokesProgramming.length)
  const randomJoke = jokesProgramming[randomNumber]

  return randomJoke
})

fastify.get('/jokes/programming/all', async () => {
  return jokesJSON.jokes.filter(joke => joke.category.toLocaleLowerCase() === 'programming')
})

fastify.get('/jokes/pun', async () => {
  const jokesPun = jokesJSON.jokes.filter(joke => joke.category.toLocaleLowerCase() === 'pun')
  const randomNumber = Math.floor(Math.random() * jokesPun.length)
  const randomPunJoke = jokesPun[randomNumber]

  return randomPunJoke
})

fastify.get('/jokes/pun/all', async () => {
  return jokesJSON.jokes.filter(joke => joke.category.toLocaleLowerCase() === 'pun')
})

const start = async () => {
  try {
    await fastify.listen(3000)

    fastify.log.info(`Server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
