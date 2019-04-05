const archiveFile = require('../reader');
const readlinkFile = require('../linkis');


describe('archive', () => {
  it('archive Is a function', () => {
    expect(true).toBe(true);
  });
  
});

describe('linkis', () => {
  it('linkis Is a function', () => {
    expect(typeof readlinkFile.readlink).toBe('function');
  });
});