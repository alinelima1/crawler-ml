const crawler = require('../src/models/crawler')

describe('Teste de funcionalidades', () => {
    describe('Testes arquivo crawler.js', () => {
        it('Retorno esperado objeto vazio.', () => {
            const res = crawler({
                "search": "cadeado",
                "limit": 0
            });
            let t = {}
            expect(res).toEqual(expect.objectContaining(t))
        })
        it('Retorno esperado objeto vazio', () => {
            const res = crawler({
                "search": "cadeado"
            });
            let t = {}
            expect(res).toEqual(expect.objectContaining(t))
        })
        it('Retorno esperado objeto vazio', () => {
            const res = crawler({
                "limit": 0
            });
            let t = {}
            expect(res).toEqual(expect.objectContaining(t))
        })
        it('Retorno esperado objeto vazio', () => {
            const res = crawler();
            let t = {}
            expect(res).toEqual(expect.objectContaining(t))
        })
        it('Retorno esperado objeto com 3 elementos', () => {
            async function t (){
            const res = await crawler({
                    "search": "cadeado",
                    "limit": 3
                });
                expect(JSON.parse(res).length()).toBe(3)
            }
        })
    })
})