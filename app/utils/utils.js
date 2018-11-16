module.exports = {
    generateId(){
        return Date.now() + Math.random().toString(36);
    }
    
};