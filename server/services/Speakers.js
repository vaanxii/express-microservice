const fs = require("fs");

class SpeakerService {
  constructor({ serviceRegistryUrl, serviceVersionIdentifier }) {
    this.serviceRegistryUrl = serviceRegistryUrl;
    this.serviceVersionIdentifier = serviceVersionIdentifier;
  }

  async getNames() {
    const data = await this.getData();
    return data.map((speaker) => ({
      name: speaker.name,
      shortname: speaker.shortname,
    }));
  }
}
