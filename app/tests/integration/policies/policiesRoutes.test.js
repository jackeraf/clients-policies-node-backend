const request = require('supertest');
require('dotenv').config({path: 'app/config/.env'})

describe('Policies Routes', ()=>{
    let token;

    beforeEach((done)=>{
        require('../../../api/clients/routes/clientsRoutes');
        require('../../../api/policies/routes/policiesRoutes');
        token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1NDIyODE5NzEyMDAwLmtoeHJxNTlmYTRjIiwibmFtZSI6Ik9yaW9sIiwiZW1haWwiOiJvcmlvbEBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1NDIyODE5Nzd9.oLqN8fufpXdppjAz10EN8WqPYXxZ7w9Xp9NjToTrCWs';
        server = require('../../../../app/config/server');
        done()
    })

    describe('GET', ()=>{
        it('/policies/:clientname should return policies given a client name', async()=>{
            const clientname = 'Britney';
            const endpoint = '/policies/' + clientname;
            const res = await request(server).get(endpoint).set('x-auth-token', token);
            expect(res.status).toBe(200);
        })

        it('/policy/:number should return the user linked to a policy number', async()=>{
            const policyNumber = '6f514ec4-1726-4628-974d-20afe4da130c';
            const endpoint = '/policy/' + policyNumber;
            const res = await request(server).get(endpoint).set('x-auth-token', token);
            expect(res.status).toBe(200);
        })
    })
    
})