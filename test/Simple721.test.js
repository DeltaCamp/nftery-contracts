const Simple721 = artifacts.require('Simple721.sol')

contract('Simple721', (accounts) => {
  const [owner, admin, user1] = accounts

  describe('mint', () => {
    it('should mint new tokens', async () => {
      const simple721 = await Simple721.new()
      const { tx, receipt, logs } = await simple721.mint(user1)
      assert.equal(logs[0].event, 'Transfer')
    })
  })
})