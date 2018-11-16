const request = require('supertest');
require('dotenv').config({path: 'app/config/.env'})

describe('Client Routes', ()=>{
    let token;

    beforeEach((done)=>{
        require('../../../api/clients/routes/clientsRoutes');
        require('../../../api/policies/routes/policiesRoutes');
        token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1NDIyODE5NzEyMDAwLmtoeHJxNTlmYTRjIiwibmFtZSI6Ik9yaW9sIiwiZW1haWwiOiJvcmlvbEBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1NDIyODE5Nzd9.oLqN8fufpXdppjAz10EN8WqPYXxZ7w9Xp9NjToTrCWs';
        server = require('../../../../app/config/server');
        done()
    })

    describe('GET', ()=>{
        it('/client/id/:id should return data filtered by user id', async()=>{
            const clientId = 'a0ece5db-cd14-4f21-812f-966633e7be86';
            const endpoint = '/client/id/' + clientId;
            const res = await request(server).get(endpoint).set('x-auth-token', token);
            expect(res.status).toBe(200);
        })

        it('/client/name/:name should return data filtered by user name', async()=>{
            const clientName = 'Britney';
            const endpoint = '/client/name/' + clientName;
            const res = await request(server).get(endpoint).set('x-auth-token', token);
            expect(res.status).toBe(200);
        })
    })
    
})