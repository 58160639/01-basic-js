const helloFn = require ('./hello')
test('hello',() =>{

    //Arrange
    let name = 'neung'

    //Act
    let result = helloFn(name)

  //assert
    expect(result).toBe('hello neung')

  })
