import {
  expect
} from 'chai';

import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first Test', () => {
  it('it should pass', () => {
    expect(1).to.equal(1);
  });
});

describe('index.html', (done) => {
  const index = fs.readFileSync('./src/index.html', 'utf-8');
  jsdom.env(index, (err, window) => {
    const h1 = window.document.getElementsByTagName('h1')[0];
    expect(h1.innerHTML).to.equal('This is a Heading');
    done();
    window.close();

  })

})
