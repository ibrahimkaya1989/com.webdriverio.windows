const { expect } = require('chai');

describe('Windows Calculator Tests', () => {
  it('should add two numbers', async () => {
    // Sayıların ve işlemlerin elementlerini buluyoruz
    //const buttonOne = await $('~One'); // accessibility id
    const buttonOne = await $('name:One');
    const buttonFive = await $('name:Five');
    const buttonPlus = await $('name:Plus');
    const buttonEquals = await $('name:Equals');
    const calculatorResult = await $('//*[@AutomationId="CalculatorResults"]');

    // Hesaplama yapıyoruz: 1 + 5 = 6
    await buttonOne.click();
    await buttonPlus.click();
    await buttonFive.click();
    await buttonEquals.click();

    // Sonucu alıyoruz ve kontrol ediyoruz
    const resultText = await calculatorResult.getText();
    const result = resultText.replace('Display is', '').trim(); // "Display is 6" gibi bir sonuç gelir
    expect(result).to.equal('6');
  });
});
