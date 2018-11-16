const request = require('supertest');
require('dotenv').config({path: 'app/config/.env'})

describe('auth middleware', ()=>{
    let token;

    beforeEach((done)=>{
        require('../../../api/clients/routes/clientsRoutes');
        require('../../../api/policies/routes/policiesRoutes');
        token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1NDIyOTkyNTg3NzEwLmN3Mm1ycjQxMGQ1IiwibmFtZSI6Ik9yaW9sIiwiZW1haWwiOiJvcmlvbEBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1NDIyOTkyNjJ9.0CFAgYF9aoosN98RCJdWN5ygTxBKlhlbawk5dYoUMi0';
        server = require('../../../../app/config/server');
        done()
    })

    const exec = () =>{
        const clientname = 'Britney';
        const endpoint = '/policies/' + clientname;
        return request(server).get(endpoint).set('x-auth-token', token);
    }

    it('returns 401 if no token is provided', async()=>{
        token = '';
        const res = await exec();
        expect(res.status).toBe(401);
    })

    it('returns 400 if token is invalid', async()=>{
        token = 'a';
        const res = await exec();
        expect(res.status).toBe(400);
    })

    it('returns 200 if token is valid', async()=>{
        const res = await exec();
        expect(res.status).toBe(200);
    })
})