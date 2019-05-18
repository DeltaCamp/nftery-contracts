const Nftery = artifacts.require('Nftery.sol')

contract('Nftery', () => {
  describe('mint', () => {
    it('should mint new 721s', async () => {
      const nftery = await Nftery.new()

      const hex = web3.utils.asciiToHex('product://four')

      const { tx, receipt, logs } = await nftery.mint(hex)

      assert.equal(logs[0].event, 'Minted')
    })
  })
})