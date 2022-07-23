import express from 'express'
import home from './routes/home'
import config from './utils/config'
import siteInfos from './routes/siteInfos'
import login from './routes/login'
import posts from './routes/posts'
import post from './routes/post'
import log from './utils/log'
import verifyUuid from './routes/verifyUuid'

const port = config.get('port')

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', home)

app.get('/api/siteinfos', siteInfos)

app.get('/api/posts', posts)

app.get('/api/posts/:id', post)

app.post('/api/session/login', login)

app.get('/api/session/verifyuuid/:id', verifyUuid)

app.listen(port, () => {
    log.info(`Application started on port ${port}!`)
})
