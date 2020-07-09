const fs = require("fs");
const util = require("util");

const readFile = util.promisify(fs.readFile);

class SpeakerService {
  constructor(datafile) {
    this.datafile = datafile;
  }

  async getNames() {
    const data = await this.getData();
    return data.map((speaker) => ({
      name: speaker.name,
      shortname: speaker.shortname,
    }));
  }
}
